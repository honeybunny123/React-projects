
function TemperatureCheck(props) {
  if (props.celsius >= 100) {
    return 'water will boil';
  }
  return 'water will not boil';

}

class WaterCheck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      celsius: '',
      farenheit: ''      
    };
    this.handleCelsius = this.handleCelsius.bind(this);
    this.handleFarenheit = this.handleFarenheit.bind(this);
  } 

    handleCelsius(event) {
      // this.setState({celsius: event.target.value});   
      this.setState({farenheit: event.target.value * 9/5 + 32});
      this.temperatureCheck();      
    }
    
     handleFarenheit(event) {
      // this.setState({farenheit: event.target.value}); 
      this.setState({celsius: [event.target.value - 32] * 5/9}); 
      this.temperatureCheck();     
    }
  
  render() {
    return (
      <div>
      <form>
        <div>
          <label> Enter temperature in celsius:</label>
          <input name="celsius" onChange={this.handleCelsius} value={this.state.celsius}/>
        </div>
        <div>
          <label> Enter temperature in farenheit:</label>
          <input name="farenheit" onChange={this.handleFarenheit} value={this.state.farenheit}/>
        </div>
      </form>
      <p><TemperatureCheck celsius={this.state.celsius}/></p>
     </div>
    );
  }
}



ReactDOM.render(<WaterCheck/>, document.getElementById('root'));

