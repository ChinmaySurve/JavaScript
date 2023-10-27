function reverseString() {
    var input = document.getElementById("input1").value;
    var reversed = input.split('').reverse().join('');
    document.getElementById("display1").textContent = reversed;
}

function isPalindrome() {
let s="";
let res = "";
var str = document.getElementById("input2").value;
for (let i = str.length - 1; i >= 0; i--) { 
s += str[i];
}
if(s==str){
res = "String is a Palindrome!";
}
else{
res = "String is not a Palindrome!";
}
document.getElementById("display2").innerHTML=res;
}

function replace() {
    var input = document.getElementById("input3").value;
    var replaceWhat = document.getElementById("input4").value;
    var replaceWith = document.getElementById("input5").value;
    if (input.indexOf(replaceWhat) === -1) 
    {
        var replaced="error" ;
    }
    else
    {
    var replaced = input.replace(replaceWhat,replaceWith);
    }
    document.getElementById("display3").textContent = replaced;
}
