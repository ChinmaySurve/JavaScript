function method1()
{
    console.log("M1");
    let s1 = "true";
    s1 = document.getElementById("str1").value;
    let s2 = "true";
    s2 = document.getElementById("str2").value;
    var a = s1.length;
    var b = s2.length;
    if(a==b){
    var i,f=1;
    for(i=0;i<a;i++){
    if(s1.charAt(i) != s2.charAt(i)){
    f=0;
    }
    }
    if(f==1)
    document.getElementById("display1").innerHTML = "true";
    else
    document.getElementById("display1").innerHTML = "false";
    }
    else document.getElementById("display1").innerHTML = "false";
    }
    function method2(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    console.log(str1);
    console.log(str2);
    let val = (str1 == str2);
    let s =val.toString();
    console.log(s);
    document.getElementById("display2").innerHTML = s;
    }
    function method3(){
    var str1 = document.getElementById("str1").value;
    var str2 = document.getElementById("str2").value;
    let val = str1.localeCompare(str2);
    let s =val.toString();
    console.log(s);
    document.getElementById("display3").innerHTML = s==0?"true":"false";
    
}

    function method4()
    {
        var str1 = document.getElementById("str1").value;
        var str2 = document.getElementById("str2").value;
        let val = str1.toLowerCase() === str2.toLowerCase();
        let s = val.toString();
        document.getElementById("display4").innerHTML = s;
    }