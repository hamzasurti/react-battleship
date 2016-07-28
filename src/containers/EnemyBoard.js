import { hitSpot } from '../actions';
import { connect } from 'react-redux'
import Battleship from '../components/BattleshipBoard';


const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: (e) => {
      dispatch(hitSpot(e));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cells: state.boardElements,
  };
};

const BattleshipApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Battleship);

export default BattleshipApp;
