function biodata(){
    var myFirstName="kishan";
    console.log(myFirstName);
    if (true){
        var myLastName="Anjali";
        console.log("inner"+myLastName);
        console.log("inner"+myFirstName);
    }
    console.log("innerouter"+myLastName);
}
biodata();