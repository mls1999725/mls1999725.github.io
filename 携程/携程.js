move();	
var timer=null,i=0;			
function move()
{	
	var turn=document.getElementsByClassName("turn");
	clearInterval(timer);
	timer=setInterval(function(){
	turn[i].style.display="none";
	i=(i+1)%turn.length;
	<!--ÇÐ»»³É¿É²¥·Å-->
	turn[i].style.display="block";
	},1500);
}	
function turn()
{
	var main=document.getElementById("main");
	var search=document.getElementById("search");		
	if(main.style.display=="none")
	{
		main.style.display="block";
		search.style.display="none";
	}
	else
	{
		main.style.display="none";
		search.style.display="block";
	}
}