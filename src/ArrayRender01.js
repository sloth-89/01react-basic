import React from "react";

function ArrayRender01(){
    const users = [
        {
            id : 1,
            username : "user1",
            email : "user1@gmail.com"
        },
        {
            id : 2,
            username : "user2",
            email : "user2@gmail.com"
        },
        {
            id : 3,
            username : "user3",
            email : "user3@gmail.com"
        }
    ]

        return(
            <div>
                <div>
                    <b>{users[0].username}</b>
                    <span>({users[0].email})</span>
                </div>
                <div>
                    <b>{users[1].username}</b>
                    <span>({users[1].email})</span>
                </div>
                <div>
                    <b>{users[2].username}</b>
                    <span>({users[2].email})</span>
                </div>
            </div>
        )
}

export default ArrayRender01;

// funtion Component(){
//     if(){}
//     return(jsx문법)
// }
// return문에는 jsx문법을 활용해야함
// jsx에서 if, switch 문은 제한이 존재,
// 연산자나 삼항연산자를 주로 사용