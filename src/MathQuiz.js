import React, { useRef, useState } from "react";

function MathQuiz(){

    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [third, setThird] = useState(Math.ceil(Math.random() * 9));
    const [fourth, setFourth] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");
    const [value2, setValue2] = useState("");
    const [result2, setResult2] = useState("");

    const input1 = useRef();
    const input2 = useRef();

    const multiplySubmitForm = (e) => {
        e.preventDefault(); // submit 태그의 고유 동작을 중단시킨다. (result 값이 바뀔 때까지 사라지지 않는다)
        if(parseInt(value) === first*second){ // parseInt : 문자를 숫자값으로 바꿔준다.
            setResult("정답!")
            setFirst(Math.ceil(Math.random()*9))
            setSecond(Math.ceil(Math.random()*9))
            setValue("")
            input2.current.focus();
        } else {
            setResult("땡!")
            setValue("")
            input1.current.focus();
        }
    }

    const addSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value2) === third+fourth){
            setResult2("정답!")
            setThird(Math.ceil(Math.random()*9))
            setFourth(Math.ceil(Math.random()*9))
            setValue2("")
            input1.current.focus();
        } else {
            setResult2("떙!")
            setValue2("")
            input2.current.focus();
        }
    }

    return(
       <>
         <div className="App-header">
             <h4 style={{color: "lightgreen"}}>Quiz 1</h4>
             <div>{first} x {second} = ?</div>
             <form onSubmit={multiplySubmitForm}>
                <input type="number" 
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       ref={input1}/>
                <button>입력!</button>
             </form>
             <h6 style={{color: "red"}}>{result}</h6>

             <h4 style={{color: "lightgreen"}}>Quiz 2</h4>
             <div>{third} + {fourth} = ?</div>
             <form onSubmit={addSubmitForm}>
                <input type="number"
                       value={value2}
                       onChange={(e) => setValue2(e.target.value)}
                       ref={input2}/>
                <button>입력!</button>
             </form>
             <h6 style={{color: "red"}}>{result2}</h6>
         </div>
       </>
    )
}

export default MathQuiz;