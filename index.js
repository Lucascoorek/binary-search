function binarySearch(arr,key){
    var midIndex = Math.floor(arr.length/2)
    midIndex
    var midElement = arr[midIndex]
    midElement;

    if(key === midElement)return true;
    else if(key < midElement && arr.length >1){
        return binarySearch(arr.splice(0, midIndex), key)
    }
    else if(key > midElement && arr.length >1){
        return binarySearch(arr.splice(midIndex), key)
    }else{return false}
}
console.log(binarySearch([5,7,12,16,36,39,42,56,71], 71));
