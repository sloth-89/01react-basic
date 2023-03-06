import React from "react";

function User({user, onRemoveClick, onToggleClick}){
    // console.log(user)
    
    // 2. propUser 작성 반복을 피하는 방법 - 비구조(구조분해)
    const {username, email, id, active} = user;

    return(
        <div>
            <b style={{cursor: "pointer", color: active?"red":"black"}} onClick={() => {onToggleClick(id)}}>{username}</b>
            <span>({email})</span>
            <button onClick={() => {onRemoveClick(id)}}>삭제</button>
            {/* 다른 곳에 설정된 로직이 실행되는 걸 표현하기 위해서는 위와 같이 표현한다. */}
        </div>
    )

    // 아래 코드를 윗 코드처럼 바꿀 수 있음
    // 1. propUser 작성을 반복해서 적는 방법
    // return(
    //     <div>
    //         <b style={{cursor: "pointer", color: active?"red":"black"}} onClick={() => {onToggleClick(id)}}>{user.username}</b>
    //         <span>({user.email})</span>
    //         <button onClick={() => {onRemoveClick(user.id)}}>삭제</button>
    //         {/* 다른 곳에 설정된 로직이 실행되는 걸 표현하기 위해서는 위와 같이 표현한다. */}
    //     </div>
    // )
};

function UserList({propUsers, onRemove, onToggle}){
    // console.log(propUsers)
    return(
        <div>
            {/* User라는 하위컴포넌트의 (파라미터)에 user, key, onRemoveClick 라는 props 이름으로 전송 */}
            {/* 화살표 함수의 축약형 */}
            {propUsers.map(u => (<User user={u} key={u.id} onRemoveClick={onRemove} onToggleClick={onToggle}/>))}
            {/* 중괄호와 return키워드 생략시 객체는 ()로 감싸준다. */}
        </div>
    )
};

export default UserList;