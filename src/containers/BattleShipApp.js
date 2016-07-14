import { hitSpot } from '../actions';
import { connect } from 'react-redux'
import Battleship from '../components/BattleshipBoard';


const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (e) => {
      dispatch(hitSpot(e));
      // console.log('hello',e);
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cells: state.hits,
  };
};

const BattleshipApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Battleship);

export default BattleshipApp;
