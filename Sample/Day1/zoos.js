let str = "zzzoooooo";
let a = 0;
let b = 0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i) == 'z' || str.charAt(i) == 'Z'){
        a++;
    }
    if(str.charAt(i) == 'o' || str.charAt(i) == 'O'){
        b++;
    }
}
let c = 2*a;
if( b == c && str.length<21){
    console.log("Yes");
}
else{
    console.log("No");
}