import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.dispatch(
            {
                type:'uniqueTypeOne'
            }
        )
    }

    handleClickTwo(){
        this.props.dispatch(
            {
                type:'uniqueTypeTwo',
                payload: this.state.payload
            }
        )
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

export default connect((state) => {return state})(Quick);
