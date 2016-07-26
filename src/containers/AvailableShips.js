import { addNextShip } from '../actions';
import { connect } from 'react-redux';
import Ships from '../components/Ships';

const mapDispatchToProps = (dispatch) => {
  return {
    onCellClick: () => {
      dispatch(addNextShip());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    cells: state.boardElements,
  };
};

const AvailableShips = connect(
  mapStateToProps,
  mapDispatchToProps
)(Ships);

export default AvailableShips;
