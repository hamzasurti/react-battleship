const boardElements = (state = {}, action) => {
  switch (action.type) {
    case 'HIT_SPOT':
      return {
        ...state,
        ...checkShip(state,action)
      };
    case 'ADD_SHIP':
      return {
        ...state,
        ...addNextShip(action.text)
      }
    default:
      return state;
  }
};

let hits = 0;

const checkShip = (state, action) => {

  if (action.id in state && state[action.id].ship === true) {
    hits++
    if (hits === 16) alert('you win')
    return {
      [action.id]:
      {
        id: action.id,
        ship: true,
        attacked: true,
        // hits,
      },
    }
  } else if (action.id in state && state[action.id].ship === false) {
    return
  } else {
      return {
        [action.id]:
        {
          id: action.id,
          ship: false,
          attacked: true,
          // hits,
        },
      }
  }

}

const addNextShip = (text) => {
  return {
    'A5': {
      id: 'A5',
      ship: true,
      attacked: false,
    },
    'A6': {
      id: 'A6',
      ship: true,
      attacked: false,
    },
    'A7': {
      id: 'A7',
      ship: true,
      attacked: false,
    },
    'A8': {
      id: 'A8',
      ship: true,
      attacked: false,
    },
    'E8': {
      id: 'E8',
      ship: true,
      attacked: false,
    },
    'F8': {
      id: 'F8',
      ship: true,
      attacked: false,
    },
    'G8': {
      id: 'G8',
      ship: true,
      attacked: false,
    },
    'H8': {
      id: 'H8',
      ship: true,
      attacked: false,
    },
    'I8': {
      id: 'I8',
      ship: true,
      attacked: false,
    },
    'A1': {
      id: 'A1',
      ship: true,
      attacked: false,
    },
    'B1': {
      id: 'B1',
      ship: true,
      attacked: false,
    },
    'J6': {
      id: 'J6',
      ship: true,
      attacked: false,
    },
    'J7': {
      id: 'J7',
      ship: true,
      attacked: false,
    },
    'J5': {
      id: 'J5',
      ship: true,
      attacked: false,
    },
    'E3': {
      id: 'E3',
      ship: true,
      attacked: false,
    },
    'F3': {
      id: 'F3',
      ship: true,
      attacked: false,
    },
  }
}

export default boardElements;
