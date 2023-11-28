var area="square";
var PI=3.142,l=5,b=4,r=3;
if(area=="circle"){
    console.log("area of circle is:"+PI*r**2 );
}else if (area=="triangle"){
    console.log("area of triangle:"+(l*b)/2);
}else if (area=="rectangle"){
    console.log("area of rectangle:"+(l*b));
}else{
    console.log("please enter valid data");
}
