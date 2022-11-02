let string="naman"
function reverse(string){
	let b="";
	for(let i=string.length-1;i>=0;i--){
		b+=string[i];
	}return b;
}
let reversed=reverse(string);
if(string==reversed){
	console.log("Pallidrom");
}else{
	console.log("NA");
}
	