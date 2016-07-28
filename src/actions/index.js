export const hitSpot = (e) => {
  console.log(e._targetInst._nativeNode.id);
  const id = e._targetInst._nativeNode.id;
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
