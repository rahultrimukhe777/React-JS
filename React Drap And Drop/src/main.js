import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

export default class ToDoDragDropDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
              {id: "1", taskName:"Read book",type:"inProgress", backgroundColor: "red"},
              {id: "2", taskName:"Pay bills", type:"inProgress", backgroundColor:"green"},
              {id: "3", taskName:"Go to the gym", type:"Done", backgroundColor:"blue"},
              {id: "4", taskName:"Play baseball", type:"Done", backgroundColor:"green"}
			],
			startIndex: -1
		}
    }
	onDragStart = (index, e) => {
		console.log('Drag Start ', index);
		this.setState({ startIndex: index });
	}
	onDragOver = (index,e) => {
		console.log("Dragged Over", index);
		e.preventDefault();
	}

	onDrop = (index,e) => {
		console.log("Dropped on : ", index);
		this.state.tasks[this.state.startIndex] = this.state.tasks.splice(index, 1, this.state.tasks[this.state.startIndex])[0];
		this.setState({tasks : this.state.tasks});
	}
	render() {
	    return (
		  	<div className="jumbotron">
			  	<div className="row">
				{
					this.state.tasks.map((x,index)=> {
						return (
							<div className="col-6 Box">
								<div
									onDragOver={this.onDragOver.bind(this, index)}
									onDrop={this.onDrop.bind(this, index)}
									onDragStart = {this.onDragStart.bind(this, index)}
									draggable
									className="BoxItem"
								>
									{x.taskName}
								</div>
							</div>
						);
					})
				}
				</div>
			</div>
	    );
  	}
}
    
ReactDOM.render(<ToDoDragDropDemo />, document.getElementById('root'));