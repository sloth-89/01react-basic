import React, { useEffect, useState } from "react";

const Number = () => {
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("변경 전 닉네임")
    
    useEffect(() => {
        console.log("Hello")
    }) // 랜더링 될때마다 실행
    // useEffect(() => {
    //     console.log("Hello")
    // }, []) // 랜더링 시에 한번만 실행
    // useEffect(() => {
    //     console.log("Hello")
    // }, [name]) // 조건에 맞게 실행

    const counter = () => {
        setNumber(number + 1); 
    }
    const nameChanger = () => {
        setName("변경 후 닉네임")
    }

    return(
        <div>
            <button onClick={counter}>클릭</button>
            <button onClick={nameChanger}>변경</button>
            <div>{number}</div>
            <div>{name}</div>
        </div>
    )
}

export default Number;