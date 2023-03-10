// 중앙 데이터 관리소(store)를 설정하는 부분
// 두 가지의 api가 필요
import { createStore } from "redux"; // 스토어를 만들어 주는 api
import { combineReducers } from "redux"; // 리듀서들을 하나로 묶는 역할
import counter from "../modules/counter";
import users from "../modules/users"; //경로 신경잘쓰자

const rootReducer = combineReducers({
  counter,
  users: users, //counter 만들었으니 넣어주자 키 밸류가 같아서 생략한 거임 (4*)
}); // app.js가서 이제 써줘야지 (5*)
const store = createStore(rootReducer);

export default store;

//여기까지 하고 index.js로 넘어가기 (1*)
