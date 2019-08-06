import React from 'react';
import ReactDOM from 'react-dom';
import HeadBar from './Components/HeadBar';
import FilterBar from './Components/FilterBar';
import Filters from './Components/Filters';
import './__$main.css'

 class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        image: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        Width: '400',
        Brightness: '1',
        Saturation: '100',
        Contrast: '100'
      };
      this.handleChange = this.handleChange.bind(this);
      this.resetDefaults = this.resetDefaults.bind(this);
      this.monochromeFN = this.monochromeFN.bind(this);
      this.deepfriedFN = this.deepfriedFN.bind(this);
      this.changeImage = this.changeImage.bind(this);
    }
    
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value}, () => console.log(this.state.range))
    }
    
    resetDefaults(e) {
      e.preventDefault();
      this.setState({Width: '400', Brightness: '1', Saturation: '100', Contrast: '100'});
    }
    
    monochromeFN(e) {
      e.preventDefault();
      this.setState({Saturation: '0'});
    }
  
    deepfriedFN(e) {
      e.preventDefault();
      this.setState({Saturation: '200', Contrast: '150'});
    }
    
    changeImage(imageUrl) {
      this.setState({image: imageUrl});
    }
    
    render() {
      const {Width, Brightness, Saturation, Contrast} = this.state;
      
      const imgStyle = {
        width: Width + 'px',
        filter: `brightness(${Brightness}) saturate(${Saturation}%) contrast(${Contrast}%)`
      };
      
      return (
        <div className="App">
          <HeadBar image={this.state.image} changeImage={this.changeImage} />
          <div className="MainView">
            <div className="inputs">
              <div className="presets" style={{display: 'flex', justifyContent: 'space-between'}}>
                <button onClick={this.monochromeFN}>Monochrome Filter</button>
                <button onClick={this.deepfriedFN}>Deep Fried Filter</button>
              </div>
              <Filters Name="Width" Value={this.state.Width} Min={0} Max={600} ChangeRange={this.handleChange} />
              <Filters Name="Brightness" Value={this.state.Brightness} Min={0} Max={3} RangeStep="0.1" NumberStep="0.01" ChangeRange={this.handleChange} />
              <Filters Name="Saturation" Value={this.state.Saturation} Min={0} Max={200} ChangeRange={this.handleChange} />
              <Filters Name="Contrast" Value={this.state.Contrast} Min={50} Max={150} ChangeRange={this.handleChange} />        
              <button onClick={this.resetDefaults} style={{marginLeft: '75%'}}>Reset to Defaults</button>
              <p className="annotation">Image: Rhea cooling down under the shade of a tree.</p>
            </div>
            <img style={imgStyle} src={this.state.image} />
            <FilterBar image={this.state.image} />
          </div>
        </div>
      );
    }
  }


  ReactDOM.render(<App />, document.querySelector('#root'));