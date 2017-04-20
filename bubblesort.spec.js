describe('Bubble Sort', function(){
  
  it('handles an empty array', function(){
    spyOn(window, 'swap').and.callThrough();
    expect( bubbleSort([]) ).toEqual( [] );
    expect(swap.calls.count()).toEqual(0);
  });

  it('handles an array of one item', function() {
      spyOn(window, 'swap').and.callThrough();
      expect( bubbleSort([2]) ).toEqual( [2] );
      expect(swap.calls.count()).toEqual(0);
  })

  it('handles an array of multiple unsorted items', function() {
      spyOn(window, 'swap').and.callThrough();
      expect( bubbleSort([7, 5, 3]) ).toEqual( [3, 5, 7] );
      expect(swap.calls.count()).toEqual(3);
  })

  it('handles an array of multiple already-sorted items', function() {
      spyOn(window, 'swap').and.callThrough();
      expect( bubbleSort([1, 2, 3, 5, 7, 9]) ).toEqual( [1, 2, 3, 5, 7, 9] );
      expect(swap.calls.count()).toEqual(0);
  })

  it('handles an array with matching items', function() {
      spyOn(window, 'swap').and.callThrough();
      expect( bubbleSort([2, 2, 2]) ).toEqual( [2, 2, 2] );
      expect(swap.calls.count()).toEqual(0);
  })
});