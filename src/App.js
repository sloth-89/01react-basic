
// [MathQuiz] - useRef, useState 연습

import React from "react";
import MathQuiz from "./MathQuiz";
import "./App.css";

function App(){

  return(
    <>
      <MathQuiz/>
    </>
  )
}

export default App;


// 예제 - useRef() & useEffect() 활용

// import React, { useEffect, useRef } from "react";
// import "./App.css";

// function App(){

//   const inputRef = useRef();

//   useEffect(() => {
//     console.log(inputRef);
//     inputRef.current.focus();
//   }, []) // []의 의미 : 웹사이트에 들어오자마자 첫화면에서 랜더링될 때 id 인풋창에 포커스가 되도록 한다.
  
//   const loginAlert = () => {
//     alert("Welcome!")
//     inputRef.current.focus();
//   } // onClick에 대한 기능 설정

//   return(
//     <div className="App">
//       <header className="App-header">
//         <input ref={inputRef} type="text" placeholder="id"/>
//         <input type="password" placeholder="pw"/>
//         <button onClick={loginAlert}>Login</button>
//       </header>
//     </div>
//   )
// }

// export default App;

// useEffect 예제2.

// import React from "react";
// import Number from "./Number";

// function App(){

//   return(
//     <Number/>
//   )
// }

// export default App;

// useEffect 예제1

// import React from "react";
// import UseEffect from "./UseEffect";

// function App(){

//   return(
//     <UseEffect/>
//   )
// }

// export default App;

// 예제 - userList, useMemo, useCallback

// import React, { useCallback, useMemo, useRef, useState } from "react";
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';

// // 1. mkdir 새폴더명(workspace)
// // 2. open folder - 새폴더명(workspace)
// // 3. npx 새프로젝트폴더명

// function App(){

//   function conutActiveUsers(users){
//     console.log("활성상태 유저명수 계산 중...")
//     return users.filter(user => user.active).length;
//   }

//   const [inputs, setInputs] = useState(
//     {
//       username: "",
//       email: ""
//     });
//   const{username, email} = inputs;
  
//   const handleChange = useCallback((e) => {
//     const {name, value} = e.target; 
//     // e.target은 onChange 이벤트가 설정된 input 태그를 가리킴
//     setInputs({
//       ...inputs,
//       [name]: value
//     })
//   }, [inputs]);

//   const [users, setUsers] = useState([
//     {
//       id : 1,
//       username : "user1",
//       email : "user1@gmail.com",
//       active : true
//     },
//     {
//       id : 2,
//       username : "user2",
//       email : "user2@gmail.com",
//       active : false
//     },
//     {
//       id : 3,
//       username : "user3",
//       email : "user3@gmail.com",
//       active : false
//     }
//   ]);

//   const nextId = useRef(4)

//   // useCallback을 사용하지 않으면 컴포넌트가 리랜더링 될때마다, 함수들이 새로 만들어진다.
//   // 그러나 useCallback을 사용하게 되면 한번 만든 함수를 필요할때만 새로 만들고 '재사용이 가능'해진다 (최적화)

//   const handleCreateClick = useCallback(() => {
//     const user = {
//       id: nextId.current,
//       username,
//       email
//     }
  
//     // setUsers([...users, user])
//     setUsers(users => users.concat(user))
    
//     setInputs({
//       username: "",
//       email: ""
//     })

//     nextId.current += 1;

//   }, [username, email]);

//   const handleRemove = useCallback((id) => {
//     setUsers(users.filter(user => user.id !== id));
//   }, [users])

//   const handleToggleClick = useCallback((id) => {
//     setUsers(users.map(user => user.id === id?{...user, active: !user.active}:user));
//   }, [users])

//   const count = useMemo(() => conutActiveUsers(users), [users]);

//   return(
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onChange={handleChange}
//         onCreateClick={handleCreateClick}
//       />

//       <UserList
//         propUsers={users}
//         onRemove={handleRemove}
//         onToggle={handleToggleClick}
//         count={conutActiveUsers}
//       />
//       <div>활성 사용자 수 : {count}</div>
//     </>
//   )
// }

// export default App;

// // import logo from './logo.svg';
// import './App.css';
// import ArrayAdd from './ArrayAdd';

// // 흐름도
// // js파일 => App.js => index.js => index.html

// // 10 - props로 전달
// // function App(){
// //   const users = [
// //     {
// //         id : 1,
// //         username : "user1",
// //         email : "user1@gmail.com"
// //     },
// //     {
// //         id : 2,
// //         username : "user2",
// //         email : "user2@gmail.com"
// //     },
// //     {
// //         id : 3,
// //         username : "user3",
// //         email : "user3@gmail.com"
// //     }
// // ]

// //   return( // users 배열을 UserList01에 props로 전달
// //     <UserList01 users={users}/>
// //   )
// // };
  
// // export default App;

// // 09 - userList
// // function App(){
// //   return(
// //     <UserList01/>
// //   )
// // };

// // export default App;

// // 08 - UseRef - Html DOM Element focus
// // function App(){
// //   return(
// //     <UseRef01/>
// //   )
// // };

// // export default App;

// // 07 - arrayRender - 배열 랜더 방법 2
// // function App(){
// //   return(
// //     <ArrayRender02/> // 뒤에 / 를 하면 열고 닫고 한번에
// //   )
// // };

// // export default App;

// // 06 - arrayRender - 배열 랜더 방법
// // function App(){
// //   return(
// //     <ArrayRender01/> // 뒤에 / 를 하면 열고 닫고 한번에
// //   )
// // };

// // export default App;


// // 05 - useState - input 값 동적 상태변화 반영하기
// // function App(){
// //   return(
// //     <InputState/> // 뒤에 / 를 하면 열고 닫고 한번에
// //   )
// // };

// // export default App;

// // 04 - useState - 버튼 동적구현
// // function App(){
// //   return(
// //     <Counter/>
// //   )
// // }

// // export default App;

// // 03 - props : 두 컴포넌트 사이에 데이터 전송 테스트
// // function App(){
// //   return (<Hello name="react" color="red"/>)
// // }

// // export default App;

// // 02 - 컴포넌트 export, import 연습
// // function App(){
// //   return <MyComponent/>;
// // }

// // export default App;

// // 01 - JSX 테스트
// // function App() {

// //   const text = "JSX & React project !!"
  
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           First react project <br/>
// //           {text}
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
