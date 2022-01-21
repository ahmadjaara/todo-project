'use strict';
alert("welcom to timey" );
var nameu = prompt("please enter your name?");
var gender = prompt("what is your gender ?" ,"male / female ");
var age = prompt("what is your age ?" ,"age");

if (age<=0 || age==null  ){
    alert("your age is not correct")
    do{
        var age2 = prompt("what is your age ?" ,"age")
        if (age2<=0 || age2==null ){
            age2=false
            alert("your age is not correct")
        }
        else{
            age2=true
        }

    }
    while(age2==false)
}


var skip=confirm("do you wants to skip the welcoming message?")

if (skip){
    if (gender=="male"){
        alert("welcome Mr"+" "+ nameu );  
    }
    else if(gender=="female"){
        alert("welcome Ms"+" "+ nameu ) ;
    }
    else if(gender==null){
        alert("welcom to timey" );
    }
    else{
        alert("welcome"+" "+ nameu )  
    }  
}
else{
    do{
        alert("welcom to timey" );
        alert("Timey is a website to organize your daily tasks");
      
        var skip2=confirm("do you wants to skip the welcoming message?")
    }
    while(skip2==false)
   
   
    if (gender=="male"){
        alert("welcome Mr"+" "+ nameu );  
    }
    else if(gender=="female"){
        alert("welcome Ms"+" "+ nameu ) ;
    }
    else if(gender==null){
        alert("welcom to timey" );
    }
    else{
        alert("welcome"+" "+ nameu )  
    }

}
console.log(nameu,gender,age);




