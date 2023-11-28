a=2021;
if(a%4==0){
    if (a%100==0){
        if(a%400==0){
            console.log("leap year");
        }else{
            console.log("not a leap year")
        }
    }else{
        console.log("leap year")
    }
}else{
    console.log("not a leap year")
}