import React from "react";

function User({user}){
    return(
        <div>
            <b>{user.username}</b>
            <span>({user.email})</span>
        </div>
    )
}

function UserList01({users}){ // App에서 전달 받을 값을 파라미터에 넣어준다.
    
    return(
        <div>
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    )

};

export default UserList01;