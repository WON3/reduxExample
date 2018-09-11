import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import * as Actions from './Redux/Actions';

class Quick extends Component {
    constructor(props){
        super(props)
        this.state = {
            payload:''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this)
    }
    handleClick(){
        debugger
        this.props.myAction(
            {
                type:'uniqueTypeOne'
            }
        )
    }

    handleClickTwo(){
        this.props.myActionTwo(this.state.payload)
    }
    handleChange(e){
        this.setState({
            payload: e.target.value,
        })
    }
  render() {
    return (
      <div className="App">

        <h1>I'm the quick Component</h1>
        <input onChange={this.handleChange} value={this.state.payload} type="text"/>
        <button onClick={this.handleClickTwo}>Click Me Two</button>
        <button onClick={this.handleClick}>Click ME</button>
        
        <p className="App-intro">
          {this.props.myFirstReduxState}
        </p>
      </div>
    );
  }
}

// function mapStateToProps({myFirstReduxState}){
//     return {myFirstReduxState}
// }

// function mapDispatchToProps(dispatch){
// 	return bindActionCreators({myAction, myActionTwo}, dispatch);
// }

export default connect(state => state, Actions)(Quick);
