import React, { Component } from 'react'
import './Todo1.css'
class TaskActive extends Component {

    constructor(props) {
        super(props)
        this.state = {
            click: false
        }
    }

    handleClick = () => {
        this.setState({
            click: !this.state.click
        })
    }

    render() {

        return (
            <div className='card'>


                <div className="round">
                    {
                        (this.state.click==false)?
                        <div className="toggle notClick" onClick={this.handleClick}>
                        </div> : <div  onClick={this.handleClick} className="toggle Click">
                            <img src={"https://www.freeiconspng.com/uploads/black-check-tick-icon-4.png"} alt="tick" />
                        </div>
                    }
                </div>
                <h2 className={(this.state.click==false)?'txt actv':'txt nonactv'} >Active</h2>
            </div>
        )
    }
}

export default TaskActive