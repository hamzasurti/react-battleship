import expect from 'expect'
import boardElements from '../../src/reducers/boardElements'

describe('boardElements reducer', () => {
  it('should handle initial state', () => {
    expect(
      boardElements(undefined, {})
    ).toEqual({})
  })

  it('should handle HIT_SPOT', () => {
    expect(
      boardElements({}, {
      type: 'HIT_SPOT',
      id: 'A1',
      ship: false,
    })
    ).toEqual({
      'A1':{
        id: 'A1',
        ship: false,
        attacked: true,
      },
    });
  });
});
