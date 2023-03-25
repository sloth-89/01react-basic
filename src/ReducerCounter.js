import React, { useReducer } from "react";

// 3. useReducer()의 두번째 파라미터 initialState 초기값 준비
const initialState = {count: 0}

// 2. useReducer()의 첫번째 파라미터 reducer()함수 준비
function reducer(state, action){
    switch(action.type){
        case "INCREMENT":
            return state.count<action.max?{count: state.count+action.step}:state;
        case "DECREMENT":
            return state.count>action.min?{count: state.count-action.step}:state;
        case "RANDOM":
            return {count:Math.floor(Math.random()*(action.max - action.min))+action.min};
        default:
            throw new Error("지원하지 않는 action type 입니다:", action.type);
    }
}

function ReducerCounter({step=1, min=0, max=10}){
    // 1. useReducer() 작성 : 상단에 준비시킨 파라미터 사용
    // const [state, dispatch] = useReducer(reducer, initialState, init)
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return(
        <>
            <p>증감숫자범위: {step} <br></br> 최소: {min} 최대: {max}</p>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch({type: "INCREMENT", step, max})}}>증가</button>&nbsp;
            <button onClick={()=>{dispatch({type: "DECREMENT", step, min})}}>감소</button>&nbsp;
            <button onClick={()=>{dispatch({type: "RANDOM", min, max})}}>랜덤</button>&nbsp;
            <button onClick={()=>{dispatch({type: "RESET"})}}>초기화</button>&nbsp;
        </>
    )
}

export default ReducerCounter;

// useReducer는 useState(초기값의 업데이트 되는 데이터 관리)와 비슷한 기능을 한다. useState로 해결이되면 Reducer까지 사용하진 않는다. 복잡한 구조는 Reducer를 사용한다.

// dispatch는 reducer 함수를 실행시킨다.
// switch case로 type을 원하는 대로 임의로 지정할 수 있으며 action에 넣어 class나 id처럼 dispatch에 담아서 적용가능하다.