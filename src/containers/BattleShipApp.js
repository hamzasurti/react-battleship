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
  console.log('state',state.cells);

  return {
    cells: state.cells,
  };
};

const BattleshipApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Battleship);

export default BattleshipApp;
