import expect from 'expect'
import * as actions from '../../src/actions'

describe('actions', () => {
  it('addship should send a addships action', () => {
    expect(actions.addNextShip('ship')).toEqual({
      type: 'ADD_SHIP',
      text:'ship',
    })
  })

  it('hitSpot should send a hitspot action', () => {
    expect(actions.hitSpot('A1')).toEqual({
      type: 'HIT_SPOT',
      id:'A1',
      ship: true,
    })
  })
})