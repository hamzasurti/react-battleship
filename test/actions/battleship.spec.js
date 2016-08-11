import expect from 'expect'
import * as actions from '../../src/actions'

describe('addship actions', () => {
  it('addship', () => {
    expect(actions.addNextShip('ship')).toEqual({
      type: 'ADD_SHIP',
      text:'ship',
    })
  })

  // it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
  //   expect(actions.setVisibilityFilter('active')).toEqual({
  //     type: 'SET_VISIBILITY_FILTER',
  //     filter: 'active'
  //   })
  // })

  // it('toggleTodo should create TOGGLE_TODO action', () => {
  //   expect(actions.toggleTodo(1)).toEqual({
  //     type: 'TOGGLE_TODO',
  //     id: 1
  //   })
  // })
})