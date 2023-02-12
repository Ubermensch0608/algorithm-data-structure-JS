function validAnagram(str1,str2){
    const copyStr1 = str1.toLowerCase();
    const copyStr2 = str2.toLowerCase();

    if(copyStr1.length !== copyStr2.length){
        return false;
    }

    const frequencyObj1 = {};
    const frequencyObj2 = {};

    for(const val of copyStr1){
        frequencyObj1[val] = (frequencyObj1[val] || 0) + 1;
    }
    for(const val of copyStr2){
        frequencyObj2[val] = (frequencyObj2[val] || 0) + 1;
    }
console.log(frequencyObj1);
    for(const key in frequencyObj1) {
        if(frequencyObj1[key] !== frequencyObj2[key]){
            return false;
        }
    }
    return true;
}

console.log(validAnagram('helloworld','HELLOWORLD'));