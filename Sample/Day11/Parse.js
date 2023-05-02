var string = '{"Name":"Priya","Email":"priya07@gmail.com","Phone":9876543211}';
var str = {Name:"Priya",Email:"priya07@gmail.com",Phone:9876543211};
var obj = JSON.parse(string);
var obj1 = JSON.stringify(str)
console.log(obj);
console.log(obj1);