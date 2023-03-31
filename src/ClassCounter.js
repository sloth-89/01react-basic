import React, { Component } from "react";

class ClassCounter extends Component{
    
    state = {
        counter: 0,
        fixed: 7
    }

    handleIncrease = () => {
        this.setState( // 입력받은 값을 받을 때마다 업데이트를 시켜줘야할 경우 set을 붙여서 호출한다.
            state => ({counter: state.counter + state.fixed}), // day29 화살표 함수 참고, 객체를 return할 경우 ()로 감싸줌.
            () => {console.log(this.state.counter)} // 콘솔에 찍어보려면 이렇게.
        )
    }

    handleDecrease = () => {
        this.setState(
            state => ({counter: state.counter - state.fixed}),
            () => {console.log(this.state.counter)} // 콘솔에 찍어보려면 이렇게.
        )
    }

    handleReset = () => {
        this.setState(
            state => ({counter: state.counter = 0})
        )
    }

    render(){ // class형은 render()로 return을 해야한다.
              // function은 return을 바로 한다.
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+{this.state.fixed}</button> {/* this는  객체 자체를 불러올 때 사용 */}
                <button onClick={this.handleDecrease}>-{this.state.fixed}</button> <nbsp></nbsp>
                <button onClick={this.handleReset}>Reset</button> 
                <p>고정된 값 : {this.state.fixed}</p>
            </div>
        )
    }
}

export default ClassCounter;