// 중앙 데이터 관리소(store)를 설정하는 부분
// 두 가지의 api가 필요
import { createStore } from "redux"; // 스토어를 만들어 주는 api
import { combineReducers } from "redux"; // 리듀서들을 하나로 묶는 역할

const rootReducer = combineReducers({});
const store = createStore(rootReducer);

export default store;

//여기까지 하고 index.js로 넘어가기
