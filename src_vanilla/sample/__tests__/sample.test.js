import Sample from './../sample';

describe('Sample ', () => {
  it('should call native function to select element with app id', () => {
    global.document.getElementById = jest.fn(() => {
      return {
        innerHTML: ''
      }
    }),
    Sample();
    expect(global.document.getElementById.mock.calls[0][0]).toBe('app');
  });
});
