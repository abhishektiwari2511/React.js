import {configureStore} from '@reduxjs/toolkit'
// import {legacy_createStore} from "redux"
import rootRedeucr from "../Reducer/RootRadeucr"
import createSagaMiddleware from "redux-saga"
import projectSaga from "../ProjectSaga"

const sagaMiddleware = createSagaMiddleware()
 const store = configureStore(
    
     { reducer:rootRedeucr,
      middleware:()=>[sagaMiddleware]}
    
    );
    sagaMiddleware.run(projectSaga)
 export default store