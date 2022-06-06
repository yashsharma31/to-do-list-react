import React, { Component } from 'react';
import "./style.css"
import Todo from './todo';
import AddTodo from './addtodo.js';
import drop1 from "../assets/drop1.png"
import drop2 from "../assets/drop2.png"

class Todos extends Component {
    constructor(props){  
        super(props);   
        this.state = {
            addTodoValue: "",
            todos: [
            ],
            filtered: [
            ],
            filteredactive:[
            ],

            countactive:0
        }
        this.lenleftitems = this.lenleftitems.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
        this.setUpdate = this.setUpdate.bind(this);  
        this.checkall = this.checkall.bind(this); 
        this.uncheckall = this.uncheckall.bind(this); 
        this.filteractive = this.filteractive.bind(this);
        this.filternotactive = this.filternotactive.bind(this);
        this.filterall = this.filterall.bind(this);
        this.checkforactiv = this.checkforactiv.bind(this);
    } 

    //Local helper method to get date
    getTime() {
        let d = new Date();
        var n = d.getTime();
        return n;
    }

    //method called from Todo component
    handleDelete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            return t.id !== todo
        });

        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        this.setState({ todos: newList});
        this.setState({ filtered: newList});
        this.setState({filteredactive:activelist })
    }

    clearcomplete = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            return !t.isDone
        });

        this.setState({ todos: newList});
        this.setState({ filtered: newList});
        this.setState({ filteredactive:newList })
    }

    filteractive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            if(t.isDone==true){
                return t.id 
            }
            
        });
        this.setState({ filtered: newList });
    }
    filternotactive = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList = this.state.todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        this.setState({ filtered: newList });
    }
    filterall = () => {
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList =  this.state.todos.filter((t) => {
                return t.id 
            
        });
        this.setState({ filtered: newList });
    }


    handleDone = todo => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        currentTodos = [...this.state.todos];
        newList = currentTodos.map((t) => {
            if (t.id === todo.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });

        this.setState({filtered:newList});
        this.setState({filteredactive:activelist })
    }

    //method called from AddTodo component
    addNewTodo = value => {
        let currentTodos = [];
        let newList = [];
        let activelist = [];
        if (value) {
            currentTodos = [...this.state.todos];
            currentTodos.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            newList =  currentTodos.filter((t) => {
                return t.id 
        });
        activelist = newList.filter((t) => {
            return !t.isDone 
        });
            this.setState({ addTodoValue: "", filtered:newList })
            this.setState({ addTodoValue: "", todos:newList })
            this.setState({ addTodoValue: "", filteredactive:activelist })
        } else {
            console.log("Please Add Todo Text");
        }
    }

    setUpdate= (text,key) => {{
        let currentTodos = [];
        currentTodos = this.state.todos;
        currentTodos.map(t =>{
            if(t.id==key){
                t.value=text;
            }
        });
        this.setState({
            todos:currentTodos
        });
        this.setState({
            filtered:currentTodos
        });
    }}

    checkall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=true;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        this.setState({
            filtered:currentTodos
        });
        this.setState({
            todos:currentTodos
        });
        this.setState({filteredactive:activelist })
    }}

    uncheckall=()=>{{
        let currentTodos = [];
        let activelist = [];
        currentTodos = this.state.todos;
        for (const i of currentTodos) {
            i.isDone=false;
          }
        activelist = currentTodos.filter((t) => {
            return !t.isDone 
        });
        this.setState({
            filtered:currentTodos
        });
        this.setState({
            todos:currentTodos
        });
        this.setState({filteredactive:activelist })
    }}

    lenleftitems(){
        let currentTodos = [];
        let newList = [];
        currentTodos = this.state.todos;
        newList =  this.state.todos.filter((t) => {
            if(t.isDone==false){
                return t.id 
            }
            
        });
        this.setState({ countactive: newList.length });
        
    }

    clearcompi(){
        let activetodo = [];
        let total_todos= [];
        activetodo = this.state.filteredactive;
        total_todos = this.state.todos;
        if ((total_todos.length-activetodo.length)>=1){
            return <label  onClick={() => this.clearcomplete()}>Clear completed</label>
        }
    }

    checkforactiv(){
        let activetodo = [];
        activetodo = this.state.filteredactive;
        if (activetodo.length==0){
                return true
        }
        else{
                return false
        }
    }
    


    renderfooter(){
        let total_todos= [];
        total_todos = this.state.todos;
        if(total_todos.length>=1){
            return(<div className='whole-footer'>
            <div className='decor-outer'>
            <div className='footer'>
                <div className='left_footer'>
                <label >{this.state.filteredactive.length} items left </label>
                </div>
                <div className='middle_footer'>
                <label className='allbtn' onClick={() => {this.filterall()}}>All </label>
                <label className='actvbtn' onClick={() => this.filternotactive()}>Active </label>
                <label className='cmpbtn' onClick={() => this.filteractive()}>Completed</label>
                </div>
                <div className='right_footer'>
                    {
                        this.clearcompi()
                    }
                
                </div>
                
            </div>
            </div>
            
                    <div className='decor1'></div>
                    <div className='decor2'></div>
            </div>
        )}
    }



    render() {
        return (
            
            <div className='table_style'>
            <div className="table">
            
                
                    <div className='todos_table'>
                        <div className="txt1table">
                            <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} checkall={this.checkall} uncheckall={this.uncheckall} chkforactv={this.checkforactiv}/>
                        </div>
                        

                    </div>

                        
                    <div className='footerandtable'>
                        {this.state.filtered.map((todo, index) => (
                        <div className='todos_table_down' key={todo.id}>
                            <Todo index={index+1} todo={todo} 
                            fooDelete={this.handleDelete} 
                            fooDoneDone={this.handleDone} 
                            setUpdate={this.setUpdate} 
                             />
                        </div>
                        
                    ))}
            </div>
            {
                this.renderfooter()
            }
            </div>
                
                
            </div>
            
        );
    }
    
}

export default Todos;