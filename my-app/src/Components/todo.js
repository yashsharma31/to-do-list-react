import React, { Component } from 'react';
import "./style.css"

class Todo extends Component {

    render() {
        return (
            <>
            <div className='tableitself'>
                <td  className="tab1">
                    <input type="checkbox" defaultChecked={this.props.todo.isDone}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td className='tab2'>
                    {
                        this.renderTodo()
                    }
                </td>
                <td  className="tab3">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
                </div>
            </>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }

}

export default Todo;