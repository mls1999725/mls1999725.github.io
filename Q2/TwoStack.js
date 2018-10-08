var inStack = new Array();
var outStack = new Array();

function Stackone(){
    this.push = function(elet){
        inStack.push(elet);
    }
    this.pop = function(){
        inStack.pop();
    }
}
function Stacktwo(){
    this.push = function(elet){
        outStack.push(elet);
    }
    this.pop = function(){
        outStack.pop();
    }
}
function Queue(){
    this.push = function(elet){
        inStack.push(elet);
        console.log("The queue is: ",inStack);
    } 
    this.pop = function(){
        var length1 = inStack.length;
        var data;
        for(var i=0;i<length1-1;i++){
            data = inStack.pop();
            outStack.push(data);
        }
        var popdata = inStack.pop();
        var length2 = outStack.length;
        for(var i=0;i<length2;i++){
            data = outStack.pop();
            inStack.push(data);
        }
        console.log("The queue is: ",inStack);
        return popdata;
    }
}
var myqueue = new Queue();
myqueue.push(1);
myqueue.push(2);
myqueue.push(3);
myqueue.pop();
myqueue.pop();