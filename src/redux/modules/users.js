// 초기 상태값 (state)
// const [nubmer, setNubmer] = useState(0) 이 부분을 아래로 쓰는거임 그냥
const initialState = {
  userId: 123,
};

//리듀서 : "state에 변화를 일으키는 "함수
// (1) state를 action의 type에 따라 변경하는 함수다.

//인자로는 state와 action 두 가지를 받는다
// state = initialState 로 적어줌
// action이 인자로 들어올 때 action은 객체 형태로 되어있고 객체는 액션의 타입과 밸류를 가지고 있다.
// 액션 = 스테이트를 어떻게 수정할건지 액션에 대해 표현하는 액션객체
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state; // 아무것도 없을 땐 최초 스테이트를 리턴해주면 된다는 소리
  }
};
// 만들었으면 내보내주자 어디로? configstore로 (3*)
export default users;
