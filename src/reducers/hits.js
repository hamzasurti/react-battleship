const hits = (state = [], action) => {
  switch (action.type) {
    case 'HIT_SPOT':
      return [
        ...state,
        {
          id: action.id,
          hit: true,
        },
      ];
    default:
      return state;
  }
};

export default hits;
