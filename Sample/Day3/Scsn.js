var s = "Hi , Welcome to our Home time is 2:00 PM !!!";
var c=0,c1=0,c2=0,c3=0;
for(var i = 0;i<s.length;i++){
    if(s.charAt(i) >= 'a' && s.charAt(i) <= 'z'){
        c++;
    }
    else if(s.charAt(i) >= 'A' && s.charAt(i) <= 'Z'){
        c1++;
    }
    else if(s.charAt(i) >= '0' && s.charAt(i) <= '9'){
        c2++;
    }
    else{
        c3++;
    }
}
console.log("Small Letters : "+" "+c);
console.log("Capital Letters : "+" "+c1);
console.log("Numbers : "+" "+c2);
console.log("Special Characters : "+" "+c3);