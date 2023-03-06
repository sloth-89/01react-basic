import React from "react";

function ArrayAdd({username, email, onChange, onCreateClick}){
    return(
        <div>
            <input
                name="username" 
                placeholder="계정명"
                onChange={onChange} 
                value={username}
            />
            
            <input
                name="email" 
                placeholder="이메일" 
                onChange={onChange} 
                value={email}
            />
            
            <button onClick={onCreateClick}>등록</button>
        </div>
    )
}

export default ArrayAdd;


// map 함수 참고
// const arr = [10, 20, 30, 40, 50];

// //일반 함수 형태
// arr.map(function(item, index){
//     console.log(index + "번 값", item);
// });

//화살표 함수 형태
// arr.map((item, index) => {
//     console.log(index + "번 값", item);
// });

// 1
// const object = {a:1, b:2};
// const {a,b} = object;
// console.log(a);
// console.log(b);

// 2
// const object = {a:1, b:2};
// function print ({a,b}){
//     console.log(a);
//     console.log(b);
// };

// 3
// print(object);
// const object = {a:1};
// function print({a, b}){
//     console.log(a);
//     console.log(b);
// }