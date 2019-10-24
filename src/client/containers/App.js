import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import { add, sub, change } from '../actions';

const mapStateToProps = state => {
  return {
    number: state.calc.number,
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add,
      sub,
      change,
    },
    dispatch
  );

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
