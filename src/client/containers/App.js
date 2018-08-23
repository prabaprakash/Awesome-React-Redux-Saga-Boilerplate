import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import { add } from '../actions';

const mapStateToProps = state => ({
  number: state.add.number,
  recipes: state.recipe.recipes,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      add,
    },
    dispatch
  );

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
