function total() {
var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var item4=document.getElementById("item4");
var item5=document.getElementById("item5");
var item6=document.getElementById("item6");
var total=item1.value*200+item2.value*300+item3.value*250+item4.value*175+item5.value*150+item6.value*220;
document.getElementById("tot").innerHTML=total;
}

function dis() {
var item1=document.getElementById("item1");
var item2=document.getElementById("item2");
var item3=document.getElementById("item3");
var item4=document.getElementById("item4");
var item5=document.getElementById("item5");
var item6=document.getElementById("item6");	
if(item1.value==0 && item2.value==0 && item3.value==0 && item4.value==0 && item5.value==0 && item6.value==0){
	alert("You have not Ordered Anything");
	return false;
}
else{
	if(item1.value!=0 || item2.value!=0 || item3.value!=0 || item4.value!=0 || item5.value!=0 || item6.value!=0){
		x=document.getElementById("main");
	    x.className="closed";
	    y=document.getElementById("sub");
	    y.className="open";
	    if(item1.value!=0)
	    	document.getElementById("one").innerHTML=("TORTILLAS: Rs."+item1.value*200+"("+item1.value+")"+"<br>");
	    if(item2.value!=0)
	    	document.getElementById("two").innerHTML=("CHURROS: Rs."+item2.value*300+"("+item2.value+")"+"<br>");
	    if(item3.value!=0)
	    	document.getElementById("three").innerHTML=("TACO SHELLS: Rs."+item3.value*250+"("+item3.value+")"+"<br>");
	    if(item4.value!=0)
	    	document.getElementById("four").innerHTML=("PAN DULCES: Rs."+item4.value*175+"("+item4.value+")"+"<br>");
	    if(item5.value!=0)
	    	document.getElementById("five").innerHTML=("CONCHOS: Rs."+item5.value*150+"("+item5.value+")"+"<br>");
	    if(item6.value!=0)
	    	document.getElementById("six").innerHTML=("CORN BREAD: Rs."+item6.value*220+"("+item6.value+")"+"<br>");
    }
}
}