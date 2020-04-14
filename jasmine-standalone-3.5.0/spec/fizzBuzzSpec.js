describe('Fizzbuzz', function() {
  var fizzbuzz;
  describe('know when a number is', function(){
    it('divisible by 3', function() {
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});


