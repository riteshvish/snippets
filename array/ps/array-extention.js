Array.prototype.findLargestAndSmallest = function () {
    var array = this;
    array = array || [];
    console.log(array);
    if (array.length) {
        var min = array[0];
        var max = array[0];
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            min = min > element ? element : min;
            max = max < element ? element : max;
        }
        return { "max": max, "min": min }
    } else {
        return {};
    }
}

Array.prototype.haveDuplicate = function () {
    var arr=this;
    arr = arr || []
    var localjson = {};
    if (arr.length) {
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (!localjson[element]) {
                localjson[element] = 1;
            } else {
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
}