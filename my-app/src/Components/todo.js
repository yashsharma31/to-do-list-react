import React, { Component } from 'react';
import "./style.css"
import check1 from "../assets/check.png"
import uncheck1 from "../assets/uncheck.png"
import clossee from "../assets/close.png"
class Todo extends Component {

    state={
        val: this.props.todo.value,
        isInEditMode: false

    }

    render() {
        return (
            <>
            <div className='tableitself'>
                <div  className="tab1">
                    {
                        this.renderchkbox()
                    }
                </div>
                <div className='tab2'>
                    {
                        
                        this.renderTodo()
                    }
                    
                </div>
                <div  className="tab3">
                    {
                    this.renderdeletebtn()
                }
                    
                </div>
                </div>
                
            </>
            
        );
    }
    renderdeletebtn(){
        
        return <img src= {clossee} width={12} onClick={() => this.props.fooDelete(this.props.todo.id)}></img>

    }

    renderchkbox(){
        if(this.props.todo.isDone){
        return <img src= {check1} width={30} onClick={() => this.props.fooDoneDone(this.props.todo)}></img>;
        }
        else{
        return <img src= {uncheck1} width={30} onClick={() => this.props.fooDoneDone(this.props.todo)}></img>;
        }
    }

    changeEditMode=()=>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    handleChange = (e) => {
        //Updating local component state
        this.setState({
            val: e.target.value
        });
    }

    renderEditView = (id) =>{
        return <div>
            <input
            type="text"
            defaultValue={this.state.val}
            onChange={this.handleChange}
            onKeyPress={event => event.key === 'Enter' && this.updateComponentValue(id)}
            />
        </div>
    }

    renderDefaultView= () =>{
        return <div onDoubleClick={this.changeEditMode}>
                    {this.props.todo.value}
                </div>
    }


    renderTodo(){
        if(this.props.todo.isDone)
        return <s className='linecutted'>{this.state.isInEditMode ? 
        this.renderEditView(this.props.todo.id):
        this.renderDefaultView()
        }</s>;

        else
        return this.state.isInEditMode ? 
        this.renderEditView(this.props.todo.id):
        this.renderDefaultView()
        }
    
        updateComponentValue = (id) =>{
            this.setState({
                isInEditMode: false,
            })
            this.props.setUpdate(this.state.val,id)
        }


}


export default Todo;