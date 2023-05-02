let age,n = 10;
switch (true) {
    case (n>=0 || n<=10):{
        age ="Child"
        break;
    }
    case (n >= 10 || n<=20):{
        age="Teenager"
        break;
    }
    case (n>=20 || n<=30):{
        age="Young"
    }

    default:
        age="Undefined"
        break;
}
console.log(age);