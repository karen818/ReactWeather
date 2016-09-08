var React = require('react');


var WeatherMessage = ({temp, location}) => { //was (props) now destructured to ({temp, locationgit})
  // var {temp, location}=props;
  // var location = this.props.location;
  // var temp = this.props.temp;
    return (
      <h3>It's {temp} Fahrenheit in {location}</h3>
    )
};

module.exports = WeatherMessage;
