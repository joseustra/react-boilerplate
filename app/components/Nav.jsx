var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Boilerplate App</li>
          <li><IndexLink to="/" activeClassName="active-link">Index link</IndexLink></li>
          <li><Link to="/" activeClassName="active-link">Link2</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><Link to="/" activeClassName="active-link">Link3</Link></li>
          </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
