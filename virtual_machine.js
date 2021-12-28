let fs = require('fs');
let arg = process.argv;
let code = fs.readFileSync(arg[2]).toString();

var readlineSync = require('readline-sync');

let RAM = new Array();
RAM = code.split(/\s+/);

let IP = 0;
let t = RAM.length;
while (IP < t - 1){
	switch(RAM[IP]){
		case 'input':
			let n = readlineSync.question();
			RAM[RAM[IP + 1]] = parseFloat(n);
			IP += 2;
			break;
			
		case 'output':
			console.log(RAM[RAM[IP + 1]]);
			IP += 2
			break;
			
		case 'add':
			RAM[RAM[IP + 1]] += RAM[RAM[IP + 2]];
			IP += 3;
			break;
			
		case 'sub':
			RAM[RAM[IP + 1]] -= RAM[RAM[IP + 2]];
			IP += 3;
			break;
			
		case 'mul':
			RAM[RAM[IP + 1]] *= RAM[RAM[IP + 2]];
			IP += 3;
			break;
			
		case 'div':
			RAM[RAM[IP + 1]] /= RAM[RAM[IP + 2]];
			IP += 3;
			break;
			
		case 'set':
			RAM[RAM[IP + 2]] = parseFloat(RAM[IP + 1]);
			IP += 3
			break;
			
		case 'cmp':
			if (parseFloat(RAM[RAM[IP + 1]]) >= parseFloat(RAM[RAM[IP + 2]])){
				IP += 5;
			}else{
				IP += 3;
			}
			break;
			
		case 'jmp':
			IP += parseFloat(RAM[IP + 1]);
			break;
	}
}