
/*Exercise 1: Summation
Create a JavaScript function ‘summation’ that takes 2 parameters, 
‘num1’ and ‘num2’.  The function should return the sum of all
whole numbers between num1 and num2 inclusive.
Example:
summation(4, 10); // returns ‘49’
summation(10, 4); // returns ‘0’
*/

/******************************************************************************************************************/
var simulation=function(x,y){
    //simulation(1, 4)=10; simulation(4, 4)=0;  simulation(4, 1)=0; simulation(4, 10)=49  
    ssum=x<=y?x+simulation(x+1,y):0;// lambda expression to simplify the syntax of if condition
  return ssum;
  }
  /******************************************************************************************************************/


/******************************************************************************************************************/
/******************************************************************************************************************/

/*Exercise 2: Object Key Value Properties
Create a function ‘printKeyValues’ that takes in a single parameter.
The function should log all the key value pairs in the passed in object to the console in the format shown in the example.
Example:
var myObj = {
“key1”: “value1”,
“key2”: “value2”,
“key three”: “value3”
};
printKeyValues(myObj);  // prints the text below to the console

key1: value1
key2: value2
key three: value3 

*/

var printKeyValues= function(myObject){
	for (var[key, value] of Object.entries(myObject)){
		console.log(key+": "+value);
	}
}
/******************************************************************************************************************/
/*Exercise 3: Pythagorean Theorem
Use the Pythagorean Theorem to create a function ‘getHypotenuseLength’ that uses parameters ‘a’ and ‘b’ to calculate
the length of the hypotenuse of a right triangle. If a or b is less or equal to 0, then return 0. 
Example:
getHypotenuseLength(3,4); // returns 5  */

var getHypotenuseLength=function(a,b){
	h=Mat.pow((Mat.pow(a,2)+Mat.pow(b, 2)),0.5);
	hypothenus=a<=0||b<=0?0:h;
return hypothenus;

/******************************************************************************************************************/

/******************************************************************************************************************/

/** Exercise 6 */

var capitalizefirstChar =function(word){
    if(word.length==0){
        return "";
    }
    return word.charAt(0).toUpperCase()+word.substr(1, word.length);
}

var capitalize=function(text){ // This should work but  return  too much recursion!!! How can I reduce this
   var textarray=text.split(" ");
   if(textarray.length==0){
   return "";
   }else{
    return capitalizefirstChar(textarray.reverse().pop())+" "+ capitalize(textarray.reverse());  
  }
}
}

/* Exercise 7: Fizz Buzz Exercise
Create a JavaScript function ‘fizzBuzz’ that takes 1 parameter, ‘n’.  
The function should return a string that contains the following for each number between 1 and n.
• If n <= 0
o Return an empty string
• If n > 0
o Print the number
o If the number is divisible by 3 write ‘fizz’
o If the number is divisible by 5 write ‘buzz’
o If the number is divisible by 3 and 5 write ‘fizzbuzz’
Example:
fizzBuzz(0);    // returns ‘’
fizzBuzz(15);  // returns  ‘1, 2, 3fizz, 4, 5buzz, 6fizz, 7, 8, 9fizz, 10buzz, 11, 12fizz, 13, 14, 15fizzbuzz’ */
var fizzBuzz=function(n){ // i use the recursion the result is reversed
    if(n<=0){
      //return "";
      return console.log("''");
    }else{
      if(n==1){
        return console.log(1);
      }else{
        if(n==2){
          return console.log(2) +fizzBuzz(1);
        }else{  
      
              b=(n%5==0 && n%3==0)?n+"fizzbuzz":(n%5==0?n+"buzz":(n%3==0?n+"fizz":n)); //operation ternair to reduce the if syntax
      
              return console.log(b)+fizzBuzz(n-1); 
        }
      }
    }
  }
  
  var fizBuz=function(n){// This one is does not use recursion but return the normal result as specified in the exercises 
    if(n<=0){
      console.log("");
    }else{
      for(var i=1; i<=n;i++){
        if(i%3==0 && i%5==0){
          console.log(i+"fizzbuzz");
        }else{
            if(i%5==0){
              console.log(i+"buzz");
            }else{
            if(i%3==0){
              console.log(i+"fizz");
            }else{
              console.log(i);
            }
            }
          }
      }
    } 
    }
  
  
  
  /**
   * Exercise 8: Sum nested array
  Create a function ‘sumNested’ that sums up all the numbers in an array and nested arrays.
  Example:
  sumNested([1, 1, 1, [3, 4, [8]], [5]]); // returns 23 (1 + 1 + 1 + 3 + 4 + 8 + 5 = 23
  sumNested([]); // returns 0
   */
  var sum_array=function(givenArray){
    
    if(givenArray.length==0){
      return 0;
    } 
    else{
        return givenArray.reverse().pop()+sum_array(givenArray);     
  }
  }
  var sumNested=function(givenArray){
    /* 
    we check here if the element i of the given array is an array nested part.
    so we try to check the length of the element i by first reversing the array 
    and then pop it   ===array.reverse().pop().length==1 no nested
    the element i here is the first element of each resulting arrary because 
    the array is after each pop() method is reduced i.e  |array.length - 1|
    if the element to be added is nested ===> perform the adition interally in 
    this element and continue:sum_array(arrray):sum_array(array.reverse().pop()) + sumNested(array) 
    the *array* here in the added sumNested(*array*) is the new array after pop of the nested element i
     */
    var checkingArray=givenArray
    return checkingArray.reverse().pop().length==1?sum_array(givenArray):sum_array(givenArray.reverse().pop())+sumNested(givenArray);
  }
  
  
  /*
  Exercise 9: Anagram Tester
  Create a function ‘areTheseAnagrams’ that checks 
  if the two strings passed to it are anagrams of each other.
  Example:
  areTheseAnagrams(“abc”, “bca”); // returns true
  areTheseAnagrams(“abc”, “cde”); // returns false 
  */
  
  var joinsortedArray=function(array){
  
  /* joinsortedArray([])    //   ""
  joinsortedArray(["a", "b", "c", "e"])  // "abce"
  joinsortedArray(["a", "b", "c", "e", "m"]) //  "abcem"
    */
    if(array.length==0){
      return "";
    }else{
      return array.reverse().pop()+joinsortedArray(array);
    }
    }
    
  var areTheseAnagrams=function(a,b){
    // How do i want to slve this?
    // 1-split a and b    ---2: sort a and b ---3 : return the comparison  a == b
    var ars=a.split("").sort();
    var brs=b.split("").sort();
  
    if(a.lengh!=b.length){
      return false;
    }else{
      var res=joinsortedArray(ars).localeCompare(joinsortedArray(brs));
      return res-1==0;
    //return a.split("").sort()==b.split("").sort(); // This return **false** every time even if a and b are anagrams.  WHY?
  }
} 