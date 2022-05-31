import React, { Component } from 'react';
import "./style.css"
class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear existing value in input
        document.getElementById("todoValue").value = "";
        
        //Updating local component state
        this.setState({value:""});
    }

    addTodo = () => {
        //Call method reference in Todos component using props
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <>
            <div className='outercontainer'>
            <div className='heading'><p>todos
                </p></div>
            <div className="todotaskbar">
                <input type="text" className="form-control" id="todoValue" placeholder="What needs to be done?" onChange={this.handleChange} 
                onKeyPress={event => event.key === 'Enter' && this.addTodo()}
                />
            </div>
            </div>
            </>
        );
    }
}

export default AddTodo;