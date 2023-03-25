import React, { useState } from "react";

function Counter(){
    // useState(0)는, 0을 기본값으로 넣고 useState() 함수호출
    // 즉, const [현재상태, 추후 숫자를 넘겨받을 setter함수] = useState(파라미터 기본값);
    const [number, setNumber] = useState(0)
    // const onIncrease = () => {setNumber(number+1)};
    // const onDecrease = () => {setNumber(number-1)};

    const onIncrease = () => {setNumber(prevNumber => prevNumber+1)};
    const onDecrease = () => {setNumber(prevNumber => prevNumber-1)};

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
    
};

export default Counter;