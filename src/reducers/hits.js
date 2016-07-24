const hits = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'HIT_SPOT':
      return {
        ...state,
        [action.id]:
        {
          id: action.id,
          hit: action.ship,
        },
      };
    default:
      return state;
  }
};

export default hits;
