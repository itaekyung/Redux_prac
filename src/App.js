import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

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
  console.log(counter.number); // counter : {number : 0}
  return <div>Redux!</div>;
}

export default App;
