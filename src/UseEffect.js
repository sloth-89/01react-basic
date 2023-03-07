import React, { useEffect, useState } from "react";

function UseEffect(){
    const [name, setName] = useState("변경 전 닉네임");

    // useEffect( (function)=>{} [deps])
    // 1. deps 부분을 생략하면 컴포넌트가 랜더링 시 마다 실행
    // 2. deps에 빈 배열을 넣으면 컴포넌트 랜더링 시 한번 실행
    // 3. deps에 특정 조건이 들어가면 조건 때 마다 실행

    useEffect(() => {
        console.log("컴포넌트 나타남");
        console.log(name);

        return () => {
            console.log("컴포넌트 사라짐")
        }
    })

    const handleClick = () => {
        setName("변경 후 닉네임")
    }

    return (
        <div>
            {name} <button onClick={handleClick}>변경</button>
        </div>
    )
}

export default UseEffect;