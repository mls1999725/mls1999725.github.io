function merge(left, right){//两个数组的合并，前提是两个数组均是非递减排序
    var result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] < right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift());
        }
    }
    return result.concat(left).concat(right);
}
function mergesort(arr){
      if(arr.length==1) return arr; 
      var midindex=Math.floor(arr.length/2);
      var left=arr.slice(0,midindex);
      var right=arr.slice(midindex);
      return merge(mergesort(left),mergesort(right));//先分数组为两个数组直到两个数组各一个元素，然后逐步返回，这样合并的两个数组就是按非递减排序
}
var arr=[4,2,1,6,5,4,56,2];
console.log(mergesort(arr));