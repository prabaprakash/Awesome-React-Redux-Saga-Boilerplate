import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import '../styles/App.scss';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.number == 1 ? (
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          playing
        />
      </div>
    ) : (
      <div className="container">
        {' '}
        Welcome{' '}
        <input
          type="button"
          value="Play Me"
          onClick={() => this.props.add(1)}
        />{' '}
      </div>
    );
  }
}

App.propTypes = {
  number: PropTypes.string,
  add: PropTypes.func,
  recipes: PropTypes.array,
};
