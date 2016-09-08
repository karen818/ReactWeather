var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>About</h1>
        <div className="media-object">
          <div className="media-object-section">
            <div className="thumbnail">
              <img src= "http://www.fillmurray.com/g/100/100"/>
            </div>
          </div>
          <div className="media-object-section">
            <h4>Dreams feel real while we're in them.</h4>
            <p>I'm going to improvise.</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> -- This is the JavaScript framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> -- This is the API used to look up weather info
          </li>

        </ul>
    </div>
  )
};

module.exports = About;
