var str = ["Apple","Banana","Grapes","Pomograntes","Orange","Apple"];
for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] > str[j]) {
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
      }
    }
  }
  console.log(str);
  
