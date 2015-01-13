//Write a function called merge. The function should take two sorted arrays of numbers as input and return a merged array. For example, if the input arrays were var arr1 = [3,6,11]; var arr2 = [2,4,5,8,9];, the returned array would be: [2,3,4,5,6,8,9,11].

var arr1 = [3,6,11] ;
arr2 = [2,4,5,8,9] ;

    function merge(arr1, arr2) {
      var newArray = arr1.concat(arr2);
      var sortedArray = newArray.sort()
      console.log(sortedArray);
    }

merge(arr1, arr2)
