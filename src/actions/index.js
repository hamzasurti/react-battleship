
let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const hitSpot = (id) => {
  console.log(id._targetInst._nativeNode.id);
  const theId = id._targetInst._nativeNode.id;
  return {
    type: 'HIT_SPOT',
    id: theId,
    ship: true,
  };
};

export const addNextShip = (text) => {
  return {
    type: 'ADD_SHIP',
    text,
  }
}
