//window.alert('hellow viveka')
//document.write(24);
//var a=10;
 //var b=20;
// if(true){
   //var x=100; //global variable it acess both inside and out side
//  }
//if(true)
    //lety=200; // local variable
//document.getElementById('para').innerHTML="hellow";

//document.getElementById('para').innerHTML="hellow viveka";



// var mn=3;
// switch(mn){
//     case 1:
//     document.getElementById('para').innerHTML="january";
//         break;

//      case 2:
//     document.getElementById('para').innerHTML="february";
//      break;
//      case 3:
//         document.getElementById('para').innerHTML="march";
//         break;
// default:
//             document.getElementById('para').innerHTML="april";
//              break;
//  }


// for(let i=1;i<=10;i++){
//     document.getElementById('para').innerHTML+=i+" ";

// }



// function add(a,b){
//     return a+b;
// }
// var a=10;
// var b=20;
// var c=add(a,b);
// document.getElementById('para').innerHTML=c;

while(true){
    var a=parseInt(prompt("enter the first name"));
    var b=parseInt(prompt("enter the second name"));
    var op=prompt("enter operator");
    if(op.prompt=="enter operator");
    var res;
    if(op=='+'){
        res=a+b;
        document.getElementById('output').innerHTML+='output is'+res;
        break;
    }
    else if(op=='-'){
        res=a-b;
        document.getElementById('output').innerHTML+='output is'+res;
        break;
    }
    else if(op=='*'){
    res=a*b;
    document.getElementById('output').innerHTML+='output is'+res;
    break;
    }
    else if (op=='/'){
        res=a/b;
        document.getElementById('output').innerHTML+='output is'+res;
        break;
    }
    else{
        res="invalid opertator";
        break;
    }

    

}