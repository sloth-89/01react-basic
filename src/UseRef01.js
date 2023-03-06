import React, { useRef, useState } from "react";

function UseRef01(){
    const [inputs, setInputs] = useState({ // useState(초기값) 형태에 초기값을 객체 형태로 넣음
        name: "",
        nickname: "",
    })

    // 1.
    const nameInput = useRef();

    const {name, nickname} = inputs; // 비구조화 할당 방식

    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs, // ... 이걸 적으면 해당 객체를 복사한다는 말이다.
            [name]: value
        })
    }

    const onReset = (e) => {
        setInputs({
            name: "",
            nickname: ""
        })
        // 3.
        nameInput.current.focus();
    }

    return(
        <div>
            {/* 2. ref={nameInput}을 원하는 dom element에 넣어준다 */}
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
            {/* ref의 경우 돔 엘레멘트(html dom element)를 선택, 
                포커스를 맞출 태그를 지정하는 것
                이 경우 적혀진 input값을 초기화 할 시에 앞쪽 input창에 포커스가 맞춰진다. */}
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
        </div>
    )

};

export default UseRef01;