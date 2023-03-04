//action value, 안에서도 쓰지만 밖에서도 써야하므로 export해줘야지
// 이후 app.js가서 써주자 (12*)
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";
export const PLUS_N = "counter/PLUS_N";
export const MINUS_N = "counter/MINUS_N";

//action creator : action value를 액셕객체로 return 하는 함수
export const plusOne = () => {
  return { type: PLUS_ONE }; // 액션 객체는 디스패치가 사용하는애 즉 컴포넌트에서 쓰이므로 export해주고 app.js로 넘어가기(13*)
};
export const minusOne = () => {
  return { type: MINUS_ONE };
};
export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload: payload,
  };
};

export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload: payload,
  };
};

// 초기 상태값 (state)
// const [nubmer, setNubmer] = useState(0) 이 부분을 아래로 쓰는거임 그냥
const initialState = {
  number: 0,
};

//리듀서 : "state에 변화를 일으키는 "함수
// (1) state를 action의 type에 따라 변경하는 함수다.

//인자로는 state와 action 두 가지를 받는다
// state = initialState 로 적어줌
// action이 인자로 들어올 때 action은 객체 형태로 되어있고 객체는 액션의 타입과 밸류를 가지고 있다.
// 액션 = 스테이트를 어떻게 수정할건지 액션에 대해 표현하는 액션객체
// action 객체라는 것은 action type을 payload 만큼 처리하는 것이다 (payload 1*)
// ex : plyload가 3이다. 3만큼을 action type을 해라
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE: //액션에 있는 타입을 플러스 원으로 던져주면 되겠다 다시 app.js로 (8*)
      return { number: state.number + 1 }; //객체로 넣어줘야한다. (10*)
    case MINUS_ONE: // 이렇게 바꾸면 리듀서랑 실제 컴포넌트 호출 부분을 맞춰줘야 한다. 그런데 만약 리듀서를 200개 컴포넌트가 쓴다면? 하나하나씩 전부 변경해줘야한다. 그런 하드코딩 방식은 지양해야함. 그래서 액션 크리에이터, 액션밸류가 나옴 변수 형태로 관리하면 어때? 위에서 액션 밸류 만들어주자(11*)
      return { number: state.number - 1 };
    case PLUS_N:
      return { number: state.number + action.payload };
    case MINUS_N:
      return { number: state.number - action.payload };
    default:
      return state; // 아무것도 없을 땐 최초 스테이트를 리턴해주면 된다는 소리
  }
};
// 만들었으면 내보내주자 어디로? configstore로 (3*)
export default counter;
