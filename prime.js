function checkPrime(number){
	let factor=0;
	for(let i=i;i<=number;i++){
		if(number%i==0){
			factor++;
		}
		if(factor==2){
			return true;
		}
		return false;
}
let answer=checkPrime(13);
if(answer==true){
	console.log("Prime Number");
}else{
	console.log("Not a prime Number");
}