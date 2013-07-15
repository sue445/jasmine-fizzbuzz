/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 2013/07/15
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */
describe("FizzBuzz", function(){
    describe("#show", function(){
        it("3の時はFizzが返ってくる", function(){
            var actual = fizzBuzz.show(3);
            expect(actual).toEqual("Fizz");
        });

        it("5の時はBuzzが返ってくる", function(){
            var actual = fizzBuzz.show(5);
            expect(actual).toEqual("Buzz");
        });
    });
});