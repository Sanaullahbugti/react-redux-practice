import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';
import TodoAction from './store/Actions/todoActions';
class App extends Component {
  componentDidMount(){
    console.log(this.props);
    this.props.getTodo()
    
  }
  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps:",nextProps);
  }
  render() {
    return (
      <div className="App">
        hello world of redux
      </div>
    );
  }
}
function mapStateToProps(state){
  return({
    Todo:state.Todo.text
  })
}
function mapDispatchToProps(dispatch) {
  return{
    getTodo :(data)=>dispatch(TodoAction.getTodo(data)) 
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (App);
