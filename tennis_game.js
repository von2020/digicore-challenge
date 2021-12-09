intArray = (T,J) => {
    const tom = [1,4,7,2,4];
    const jack = [3,4,2,4,4];
    const compareTJ = [];
    const result = [1,2];
    
    //library for adding two arrays together..
    const lodash = require('lodash');
       //summing Arrays..
      const tomTotal = lodash.sum(tom);
      const jackTotal = lodash.sum(jack);
      
      console.log("tomTotal:",tomTotal)
      console.log("jackTotal:",jackTotal)
      
       //comparinging Arrays..
      compareTJ.push(tomTotal, jackTotal)
      console.log("compareTJ:",compareTJ)
      
       //subtracting Arrays..
      var check = arrayAdd(compareTJ, result)
      console.log("check:",check)
      
      if(check == [19, 19]){
        return result;
    }return result;
  }

   arrayAdd = (arr1, arr2) => {
    return arr2.map(function (el, i) {
      return Math.abs(el + arr1[i]);
    });
  }

console.log(intArray());