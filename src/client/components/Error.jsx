import React from 'react';
import '../styles/App.scss';
export default class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="container">
        404 - Page not Found
    </div>
    );
  }
}

Error.propTypes = {
};
