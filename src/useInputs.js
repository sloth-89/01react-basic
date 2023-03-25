
// 컴포넌트를 만들때는 파일명을 대문자
// 커스텀 함수를 만들때는 소문자

// Custom Hooks 커스텀 훅스 - 필요한 함수를 직접 만들어서 구현
// input 창 관련 코드들을 커스텀 훅스인 useInputs를 만들어서 대체해보자
// 방식 2가지 : 1) useState 2) useReducer

import React, { useCallback, useState } from "react";

function useInputs(initaileForm){

    const [form, setForm] = useState(initaileForm)

    const handleInputChange = useCallback((e) => { // e에 ()는 생략가능 (e는 event의 약어)
        const {name, value} = e.target; // 해당 함수가 들어간 이벤트를 넣고 있는 태그를 타겟한다는 말.
        setForm((form) => ({...form, [name]: value}))
    }, [])

    const reset = useCallback((e) => {
        setForm(initaileForm)
    }, [initaileForm]) // useCallback의 경우 초기값을 항상 참조하기때문에 depts에도 추가 조건을 걸어놔야 데이터를 업데이트 시킬때 잘 들어갈 수 있다.

    return [form, handleInputChange, reset];
}

export default useInputs;