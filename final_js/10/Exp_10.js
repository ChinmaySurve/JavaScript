const number=process.argv[2];

if(!number|| isNaN(number) || number<=0){
	console.log("Provide a valid positive number");

}
else{
	console.log(`Multiplication Table for ${number}:\n`);
	for(let i=1;i<=10;i++){
		console.log(`${number} x ${i}=${number*i}`);
	}
}