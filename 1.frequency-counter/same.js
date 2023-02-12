// 첫 번째 풀이
function same (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    const obj1 = {};
    const obj2 = {};
    
    for(const item of arr1){
        if(obj1[item] === undefined){
            obj1[item] = 1;
        } else {
            obj1[item] += 1;
        }
    }

    for(const item of arr2){
        if(obj2[item] === undefined){
            obj2[item] = 1;
        } else {
            obj2[item] += 1;
        }
    }

    
    for(const item of Object.keys(obj1)){
        if(obj2[item ** 2] !==  obj1[item]){
            return false;
        };
    }

    return true;
}

// 두 번째 풀이
function same (arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
       const itemIdx = arr2.indexOf(arr1[i] ** 2);

       if(itemIdx === -1){
            return false;
        };
        arr2.splice(itemIdx, 1);
    }    
    return true;
};

// refactor
function same (arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    const obj1 = {}; 
    const obj2 = {}; 
    
    for(const val of arr1){
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for(const val of arr2){
        obj2[val] = (obj2[val] || 0) + 1;
    }

    for(const key in obj1){
        if(!(key ** 2 in obj2)){
            return false;
        }
        if(obj2[key ** 2] !== obj1[key]) {
            return false;
        }
    }
    return true;
}


// console.log(same([1,2,3,4,5], [1,4,9,16,25]));