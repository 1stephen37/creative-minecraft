function pages1(value){
    var s1 = document.getElementById("s1-1");
    var s2 = document.getElementById("s1-2");
    var s3 = document.getElementById("s1-3");
    console.log(s1);
    console.log(s2);
    console.log(s3);


    if(value==1){
        s1.style.display="block";
        s2.style.display="none";
        s3.style.display="none";
    }
    else if(value==2){
        s1.style.display="none";
        s2.style.display="block";
        s3.style.display="none";
        console.log("Hello");
    }
    else if(value==3){
        s1.style.display="none";
        s2.style.display="none";
        s3.style.display="block";
    }
    
}

function loadmacdinh(){
    var s1 = document.getElementById("s1-1");
    var s2 = document.getElementById("s1-2");
    var s3 = document.getElementById("s1-3");
    console.log(s1);
    console.log(s2);
    console.log(s3);


        s1.style.display="block";
        s2.style.display="none";
        s3.style.display="none";
    
}

