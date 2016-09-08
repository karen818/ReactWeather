var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return {
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({isLoading: false});
        alert(errorMessage);
    });

  },
  render: function(){
    // var location = this.state.location;
    // var temp = this.state.temp;
    var{isLoading, temp, location} = this.state; //ES6 destructuring

    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
      return (
        <div>
          <h2>Get Weather</h2>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      )
  }
});

module.exports = Weather;