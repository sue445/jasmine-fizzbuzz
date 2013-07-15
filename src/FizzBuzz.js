/**
 * Created with JetBrains WebStorm.
 * User: sue445
 * Date: 2013/07/15
 * Time: 13:44
 * To change this template use File | Settings | File Templates.
 */
var fizzBuzz = {
    show : function(num){
        if(num % 3 == 0){
            return "Fizz";
        }

        if(num % 5 == 0){
            return "Buzz";
        }

        return num;
    }
}