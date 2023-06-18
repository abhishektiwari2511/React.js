import {legacy_createStore}from "redux"

const ram=()=>{
    console.log(legacy_createStore)
    return 1000
}

const Store=legacy_createStore(ram)
export default Store 