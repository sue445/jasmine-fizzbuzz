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

        it("3の倍数でも5の倍数でもない時はそのまま返ってくる", function(){
            var actual = fizzBuzz.show(1);
            expect(actual).toEqual(1);
        });

        it("3の倍数の時はFizzが返ってくる", function(){
            var actual = fizzBuzz.show(9);
            expect(actual).toEqual("Fizz");
        });

        it("5の倍数の時はBuzzが返ってくる", function(){
            var actual = fizzBuzz.show(10);
            expect(actual).toEqual("Buzz");
        });

        it("15の倍数の時はFizzBuzzが返ってくる", function(){
            var actual = fizzBuzz.show(15);
            expect(actual).toEqual("FizzBuzz");
        });
    });
});