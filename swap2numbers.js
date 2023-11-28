//  USING 3rd VARIABLE:

var a =30;
var b=40;
c=b;
c=40;
b=a;
a=c;
console.log(a);
console.log(b)



// WITHOUT USING 3rd VARIABLE

var a=5;
var b=10;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);