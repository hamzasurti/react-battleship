export const hitSpot = (id) => {
  return {
    type: 'HIT_SPOT',
    id,
    ship: true,
  };
};

export const addNextShip = (text) => {
  return {
    type: 'ADD_SHIP',
    text,
  }
}
