var area="circle";
var PI=3.142,l=5,b=4,r=3;
switch(area){
    case "circle":
        console.log("the area of circle is :"+PI*r**2);
    case "triangle":
        console.log("the area of triangle is :"+(l*b)/2);
    case "rectangle":
        console.log("the area of rectangle is :"+(l*b));
    default:
        console.log("please enter valid data");
}
