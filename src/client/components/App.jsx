import React from 'react';
import PropTypes from 'prop-types';

import '../styles/App.scss';

import { Button, FormControl, Row, Container } from 'react-bootstrap';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    parseInt(e.target.value) ? this.props.change(parseInt(e.target.value)): '';
  }
  render() {
    return (<Container>
      <Row>
      <Button onClick={() => this.props.add(this.props.number)}>
          +
      </Button>
      <FormControl
        data-testid="number"
        type="text"
        value={this.props.number}
        onChange={this.handleChange}
      />
      <Button onClick={() => this.props.sub(this.props.number)}>
          -
      </Button>
      </Row>
      </Container>
    );
  }
}

App.propTypes = {
  number: PropTypes.number,
  add: PropTypes.func,
  sub: PropTypes.func,
  change: PropTypes.func,
};
