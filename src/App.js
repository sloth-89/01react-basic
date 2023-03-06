
import React, { useRef, useState } from "react";
import UserList from './UserList';
import ArrayAdd from './ArrayAdd';

// 1. mkdir 새폴더명(workspace)
// 2. open folder - 새폴더명(workspace)
// 3. npx 새프로젝트폴더명

function App(){

  const [inputs, setInputs] = useState(
    {
      username: "",
      email: ""
    });
  const{username, email} = inputs;
  
  const handleChange = (e) => {
    const {name, value} = e.target; 
    // e.target은 onChange 이벤트가 설정된 input 태그를 가리킴
    setInputs({
      ...inputs,
      [name]: value
    })
  };

  const [users, setUsers] = useState([
    {
      id : 1,
      username : "user1",
      email : "user1@gmail.com",
      active : true
    },
    {
      id : 2,
      username : "user2",
      email : "user2@gmail.com",
      active : false
    },
    {
      id : 3,
      username : "user3",
      email : "user3@gmail.com",
      active : false
    }
  ]);

  const nextId = useRef(4)

  const handleCreateClick = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
  
    setUsers(users.concat(user))
    setInputs({
      username: "",
      email: ""
    })

    nextId.current += 1;

  };

  const handleRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  }

  const handleToggleClick = (id) => {
    setUsers(users.map(user => user.id === id?{...user, active: !user.active}:user));
  }

  return(
    <>
      <ArrayAdd
        username={username}
        email={email}
        onChange={handleChange}
        onCreateClick={handleCreateClick}
      />

      <UserList
        propUsers={users}
        onRemove={handleRemove}
        onToggle={handleToggleClick}
      />
    </>
  )
}

export default App;

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
