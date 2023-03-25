
// 리액트 hooks 함수들 - 중요
// useState
// useEffect
// useRef
// useReducer
// useMemo

// node_modules - react폴더 - cjs폴더 - development.js
// => 자체적으로 이미 준비된 함수 : function useState(){}
// => 그래서 리액트 개발자들은 useState() 호출해서 바로 사용

//자바스크립트 함수 사용식
// function 함수이름(파라미터){} - 함수 생성 후
// 함수이름(파라미터 값) - 으로 불러온다

// 1. custom hooks (커스텀 훅스)
//      직접 로직, 함수를 짜서 조작하고 활용하는 것.
// 2. contextAPI
//      

//

import React from "react";
import ContextSample from "./ContextSample";

function App(){

  return(
      <ContextSample/>
  )

}

export default App;

// [useCallback 예제 - 스마트홈]

// import React from "react";
// import SmartHome from "./SmartHome";
// import "./App.css"

// function App(){
//   return(
//     <div className="App-header">
//       <h3>My Smart Home Light</h3>
//       <SmartHome/>
//     </div>
//   )
// }

// export default App;

// [Custom Hooks] 활용 예제

// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';
// import useInputs from './useInputs';



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개를 inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   // inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:
// function reducer(state, action) {
//   switch (action.type) {
//       // case 'CHANGE_INPUT':
//       //   return { ...state,
//       //             inputs: { ...state.inputs, 
//       //                       [action.name]: action.value
//       //                     }
//       //   };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState); 

//   const [form, handleInputChange, reset] = useInputs({
//     username: "",
//     email: ""
//   })
//   const {username, email} = form

//   // const { username, email } = state.inputs;
//   const { users } = state;

//   const nextId = useRef(4);

//   console.log(state);

//   // const handleInputChange  = useCallback(e => {
//   //   const { name, value } = e.target;
//   //   dispatch({
//   //     type: 'CHANGE_INPUT', 
//   //     name, 
//   //     value
//   //   });
//   // }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     reset();
//     nextId.current += 1;
//   }, [username, email, reset]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <UserList
//         propUsers={users}
//         toggleClick={handleToggleClick }
//         deleteClick={handleDeleteClick }
//       />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;

// [UserList, CreateUser 구현 - 2. useReducer 함수로 구현]

// import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import UserList from './UserList';
// import ArrayAdd from './ArrayAdd';



// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }


// // 2. useReducer() 의 두번째 파라미터 initialState : 기존코드 useState(초기값정의) 함수를 사용한 배열2개를 inputs 배열과 users배열의 초기값을 initialState 변수에 넣어둠 
// const initialState = {
//   inputs:{ username: '', email: ''},
//   users: [ { id: 1, username: 'user1',email: 'user1@gmail.com', active: true },
//            { id: 2, username: 'user2', email: 'user2@gmail.com', active: false },
//            { id: 3, username: 'user3', email: 'user3@gmail.com' , active: false }
//          ]
// };

// // 3. useReducer() 의 첫번째 파라미터 reducer:
// function reducer(state, action) {
//   switch (action.type) {
//       case 'CHANGE_INPUT':
//         return { ...state,
//                   inputs: { ...state.inputs, 
//                             [action.name]: action.value
//                           }
//         };
//       case 'CREATE_USER':
//         return { inputs: initialState.inputs,
//                  users: state.users.concat(action.user)
//         };
//       case 'TOGGLE_USER':
//         return { ...state,
//                  users: state.users.map(user =>
//                       user.id === action.id ? { ...user, active: !user.active } : user
//                       )
//         };
//     case 'REMOVE_USER':
//       return {  ...state,
//                 users: state.users.filter(user => user.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

// function App() {

//   const [state, dispatch] = useReducer(reducer, initialState); 
//   const nextId = useRef(4);

//   const { users } = state;
//   const { username, email } = state.inputs;
//   console.log(state);

//   const handleInputChange  = useCallback(e => {
//     const { name, value } = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT', 
//       name, 
//       value
//     });
//   }, []);

//   const handleCreateClick  = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     });
//     nextId.current += 1;
//   }, [username, email]);

//   const handleToggleClick  = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     });
//   }, []);

//   const handleDeleteClick  = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     });
//   }, []);

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <ArrayAdd
//         username={username}
//         email={email}
//         onInputChange={handleInputChange }
//         onCreateClick={handleCreateClick }
//       />
//       <UserList
//         propUsers={users}
//         toggleClick={handleToggleClick }
//         deleteClick={handleDeleteClick }
//       />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
// }

// export default App;


// [UserList, CreateUser 구현 - 1. useState 함수로 구현]
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

// useReducer 연습 2

// import React from "react";
// import Game from "./Game";

// function App(){

//   return(
//     <div>
//       <Game/>
//     </div>
//   )
// }

// export default App;

// useReducer 연습 1

// import React from "react";
// import ReducerCounter from "./ReducerCounter";
// import "./App.css";

// function App(){

//   return(
//     <div>
//       <ReducerCounter/>
//       <ReducerCounter step={1} min={-3} max={5}/>
//       <ReducerCounter step={5} min={-10} max={10}/>
//     </div>
//   )
// }

// export default App;

// [MathQuiz] - useRef, useState 연습

// import React from "react";
// import MathQuiz from "./MathQuiz";
// import "./App.css";

// function App(){

//   return(
//     <>
//       <MathQuiz/>
//     </>
//   )
// }

// export default App;


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
