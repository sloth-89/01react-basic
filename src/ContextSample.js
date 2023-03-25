// 방법1. contextAPI를 사용하지 않을 때
// 문제점 : 여러 중간 컴포넌트를 통해 props를 반복해서 작성하여 마지막 하위 컴포넌트로 전달하는 번거로움

// import React from "react";

// function ContextSample(){
//     return(
//         <GrandParent text1="(1) props에 담은 문장"/>
//     )
// }

// function GrandParent({text1}){
//     return(
//         <Parent text2={text1}/>
//     )
// }

// function Parent({text2}){
//     return(
//         <Child text3={text2}/>
//     )
// }

// function Child({text3}){
//     return(
//             <p>{text3}</p>
//     )
// }

// export default ContextSample;

// 방법2. contextAPI를 사용할 때
// 편리함 : 여러 불필요한 중간 컴포넌트들을 거치지 않고 마지막 목적지 하위 컴포넌트에 props 데이터를 바로 던져줄 수 있다.

// import React, { createContext, useContext } from "react";

// const MyContext = createContext('defaultValue')

// function ContextSample(){
//     return(
//         <MyContext.Provider value="(2) props에 담은 문장">
//             <GrandParent/>
//         </MyContext.Provider>
//     )
// }

// function GrandParent(){
//     return(
//         <Parent/>
//     )
// }

// function Parent(){
//     return(
//         <Child/>
//     )
// }

// function Child(){
//     const text = useContext(MyContext)
//     return(
//             <div>{text}</div>
//     )
// }

// export default ContextSample;

// 방법3. contextAPI를 사용하고 useState를 통해 초기값, 업데이트값 상태관리까지 해보기

import React, { createContext, useContext, useState } from "react";

const MyContext = createContext('defaultValue');

function ContextSample(){
    const [data, setData] = useState(true)
    // 1. useState에서 value데이터를 관리하는데, 초기값이 true여서 삼항연산자에서 초기값은 true를 반환
    return(
        <MyContext.Provider value={data ? "(3) true일 때 props에 넣을 문장" : "(3) false일 때 props에 넣을 문장"}>
            <GrandParent/>
        {/* 2. 버튼클릭 시 setValue 업데이트 함수로 value 값이 true, false 반전이 되도록한다. */}
        <button onClick={() => setData(!data)}>true / false 버튼</button>
        </MyContext.Provider>
        
    )
}

function GrandParent(){
    return(
        <Parent/>
    )
}

function Parent(){
    return(
        <Child/>
    )
}

function Child(){
    const text = useContext(MyContext)
    return(
        <div>{text}</div>
    )
}

export default ContextSample;