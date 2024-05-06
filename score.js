


//let score = 5;
//let i = 0;
//while(i < score){
	//console.log(i)
	//i++;

//}


//let score = 5;
//let i = 0;

//do{
	//console.log(i);
	//i++;
//}while(i < score);


//const arr = [6,4,5,6,8];
//for(let i = 0; i < arr.length;i++){ 
	//console.log(arr[i]);
	
//}


//const arr = [6,4,5,6,8];
//for(let num in arr){
	//console.log(num); this print the total number
	
//}

//const arr = [6,4,5,6,8];
//for(let num in arr){
	//console.log(arr[num]);
//}


//const arr = [6,4,5,6,8];
//let user = {
	//name: "janet",
	//age: 3,
	//cohort: 100,
	//sex: "both"
//};
//for(let detail in user){  //in accsess the key in the index
	//console.log(user[detail]);
//}


//const arr = [6,4,5,6,8];
//let user = {
	//name: "janet",
	//age: 3,
	//cohort: 100,
	//sex: "both"
//};
//for(let num of arr){  //for of going to one object is callsed iterable
	//console.log(num);
//}



//function declaration and function expresson
//user();
//function user(name,age){
//return (name + " is " + age + "year");
//}

//console.log(user("chinedu", 88));


//function declaration and function expresson
//user();
//function user(name,age){
//return (`${name}  is ${age} years`);
//}
//console.log(user("chinedu", 88));

//const greet = function(param){
//return(`${param} to function expression`)
//}
//console.log(greet("good morning"));



//let array = [1,2,3,4,5,6];

//function user(numbers){
		//for(let num of numbers){
			//if (num % 2 ==0){;
			//console.log(num);				
			
			//}
		//}
//}
//user(array)

//let numOne = 2;
//let numTwo = 5;

//function user(x,y){		
	//let ans = x + y;
	//console.log(ans);
//}
//user(numOne,numTwo)



let numOne = 2;
let numTwo = 5;

function user(x,y){
	return x + y;
}
	function multiply(x,y){
	return x * y;
}

module.exports = {add,multiply};
//console.log(user(numOne,numTwo))

 



















