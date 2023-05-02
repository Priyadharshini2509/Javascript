var arr = [1,2,3,4,5,5,6,1,2,3,4];
var array=[];
arr.forEach((element) => {
    if(!array.includes(element)){
        array.push(element);
    }
});
// var array = arr.filter((c,i) => arr.indexOf(c) === i);
// var array = new Set(arr);        //set //Set(6) {1,2,3,4,5,6}
console.log(array);