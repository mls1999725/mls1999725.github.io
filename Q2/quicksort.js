 var arr=[3,4,2,1,5,7,22,80];
 function quicksort(arr){
     if(arr.length<=1) return arr;

    var pivotindex=Math.floor(arr.length/2);//取数组的中间值下标（向下取整）；
    var pivot=arr.splice(pivotindex,1)[0];//删去中间值，并且赋值给枢轴.splice方法返回一个含有被删除元素的数组
    var left=[];
    var right=[];

    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }
    //将数组中的元素与枢轴进行比较，较小元素放在left中，较大的放在right中
    return quicksort(left).concat(pivot,quicksort(right));//再对left与right数组进行排序分类，直到数组元素<=1，最终逐步返回进行连接
}
console.log(quicksort(arr));//调用快排方法，进行递归