import React from 'react';
export default class HeadBar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        imageUrl: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(e) {
      this.setState({imageUrl: e.target.value});
    }
    
    handleSubmit(e) {
      e.preventDefault();
      this.props.changeImage(this.state.imageUrl);
    }
      
    render() {
      return (
        <header className="HeadBar">
          <h1 className="HeadBar__title">React Image Editor</h1>
          <form onSubmit={this.handleSubmit}>
            <input className="Headbar__input__text" type="text" defaultValue={this.props.image} onChange={this.handleChange} />
            <button>Submit</button>
          </form>
        </header>
      );
    }
}