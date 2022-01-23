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

let answer1 = prompt("do you love chocolate ?" ,"yes / no ");

let answer2 = prompt("do you love cats ?" ,"yes / no ");

let answer3 = prompt("do you hate dogs ?" ,"yes / no ");

if(answer1 != "yes" ){
    if(answer1 != "no" ){
        answer1 ="invalid"
    }}

if(answer2 != "yes" ){
    if(answer2 != "no" ){
        answer2 ="invalid"
    }}
if(answer3 != "yes" ){
    if(answer3 != "no" ){
        answer3 ="invalid"
    }}

const answers =[answer1,answer2,answer3];

console.log(answers);

let text = "";

for(const x of answers ){
    text += x + "\n"  ;
}
console.log(text);

//or we can use the below method 
// for(var i=0; i< answers.length; i++){ 
//     console.log(answers[i] +"\n" );
    
//     }




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
// console.log(nameu,gender,age);




