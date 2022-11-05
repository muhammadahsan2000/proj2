alert('assign 2');
var question="your species?";
var defaltanswer="human";
var spec =prompt("your species?","human");
console.log(spec);

var numberofcats= +prompt("how many cats");
var toomanycats=numberofcats + 1;
console.log(numberofcats); 
console.log(toomanycats);

var x = prompt("where does the live");
if(x=="vatican"){
    alert("correct");
   
}else{
    alert("incorect"); 
    
}
var ticketnumb=1020;
if(ticketnumb !==4555){
    alert("happy journey");
}else{
    alert("next try");
}
// var correctanswer="vatican";
// if(x== correctanswer){
//     alert("correct");
// }else{
//     alert("incorrect");
// }

var correctanswer="vatican";
if(x=== correctanswer) {
    alert("correct");
} 
   else{
     if(x==="rome"){ 
alert("incorrect but close");
    }
    alert("incorrect");
   }
    var weight =100;
    var time =6;
    var age=70;
    
    if(weight>90 && time<7){
        alert("come to try out");
    } else{
        alert("come to cookout");
    }
    if(weight>90 && time<7 && age==90 ){
        alert("come to try out");
    } else{
        alert("come to cookout");
    }


