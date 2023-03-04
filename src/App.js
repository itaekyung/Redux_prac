import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { plusOne, minusOne } from "./redux/modules/counter";

function App() {
  //여기에서 스토어에 접근하여, counter 의 값을 읽어오고 싶다! (6*)
  // 그때 사용하는 리덕스의 훅이 useSelector
  // 매개변수로 콜백함수가 들어가요
  // 콜백함수의 매개변수로는 state가 들어가요 이때 state는 중앙 저장소에 있는 스테이트
  // 현재는 counter 스테이트 하나가 들어옴
  // 스테이트는 객체임 state = {counter : {number : 0 }}
  const counter = useSelector((state) => {
    return state.counter;
  });

  //디스패치를 가져와보자. (9*)
  const dispatch = useDispatch();

  console.log(counter.number); // counter : {number : 0}
  return (
    <>
      <div>현재카운트 : {counter.number}</div>
      <button
        onClick={() => {
          //+1을 해주는 로직을 써주면 된다.
          //dispatch({type : PLUS_ONE,})
          // counter.js로 넘어가기 (7*)
          dispatch(plusOne()); //인자로 액션 객체를 넣어줘야 한다 키,밸류 타입과 payload
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
