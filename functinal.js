/***
 *Function as a variable
***/
var add=function(a,b){
	return a+b;
}
var result = add(20,80);
console.log("Function as a variable: the result of adding a and b is => : "+result); 

/***
 *Function passed as a argument
***/
var myMath=function(func, a, b){
	return func(a,b);
}
result=myMath(add,20,80);
console.log("Function as a argument: the result of adding a and b is => : "+result); 

/***
 *Function passed as a in-line argument
***/
result=myMath(function(a,b){
	return a-b;
},20,80);
console.log("Function as a in-line argument: the result of substracting b from a is => : "+result); 

/***
 *Function returning another function
***/
var getMathFunction=function(name){
	if(name==='Add' || name==='add'){
		return function(a,b){
			return a+b;
		}
	}
	if(name==='Sub' || name==='sub'){
		return function(a,b){
			return a-b;
		}
	}
}

var addFunction=getMathFunction('add');
result = addFunction(20,80);
console.log("Function returning another function: the result of adding a and b is => : "+result); 

var subFunction=getMathFunction('sub');
result = subFunction(20,80);
console.log("Function returning another function: the result of substracting b from a is => : "+result); 
/***
 *Function chaining
***/
result=getMathFunction('add')(20,80);
console.log("Function Chaining: the result of adding a and b is => : "+result); 

/***
 *Closure
 ***/
 var counter=function(name){
 	var currentValue=0;
 	return function(){
 		currentValue++;
 		console.log("The value of the counter "+name+" is : "+currentValue);
 	}
 }

 var c1=counter("C1");
 var c2=counter("C2");
 var c3=counter("C3");
 c1();
 c2();
 c1();
 c3();
 c2();

 /****
  *Accesing argument array
  ***********/
  var addNew=function(){
  	var sum=0;
  	for(var i=0;i<arguments.length;i++){
  		sum += arguments[i];
  	}
  	return sum;
  }
  result=addNew(1);
  console.log("Calling function with one argument: the result of adding all the arguments => : "+result); 
  result=addNew(1,2);
  console.log("Calling function with two argument: the result of adding all the arguments => : "+result); 

