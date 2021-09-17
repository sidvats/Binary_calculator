document.getElementById('btnClr').addEventListener('click',function(){
    document.getElementById('res').innerText="";
});

document.getElementById('btn0').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + 0;
    document.getElementById('res').innerHTML=newval;
});
document.getElementById('btn1').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + 1;
    document.getElementById('res').innerHTML=newval;
});
document.getElementById('btnSum').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + '+';
    document.getElementById('res').innerHTML=newval;
});
document.getElementById('btnSub').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + '-';
    document.getElementById('res').innerHTML=newval;
});
document.getElementById('btnMul').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + '*';
    document.getElementById('res').innerHTML=newval;
});
document.getElementById('btnDiv').addEventListener('click',()=>{
    var value=document.getElementById('res').innerText;
    var newval=value + '/';
    document.getElementById('res').innerHTML=newval;
});
function solve(){
    var val=document.getElementById('res').innerHTML;
    let re=/(\+|\-|\*|\/)/g;
    var operators=val.match(re);
    var values=val.split(operators[0]);
    var operand1=condec(values[0]);
    var operand2=condec(values[1]);
    // var temp;
    // operand1 > operand2 ? operand1 : ()=>{
    //     temp=operand1;
    //     operand1=operand2;
    //     operand2=temp;
    // };
    if(operators[0]=='+')
        var resultdec=operand1 + operand2;
    else if(operators[0]=='-')
        var resultdec=operand1 - operand2;    
    else if(operators[0]=='*')
        var resultdec=operand1 * operand2;    
    else
        var resultdec=parse(operand1 / operand2);    
        
    var resultbin=conbin(resultdec);
    var r=document.getElementById('res').innerText;
    document.getElementById('res').innerText=r+'='+resultbin;
}
function conbin(num){
var result=num.toString(2);
return result;
}
// function condec(num){
//     var count=num.toString().split('').length;
//     var n=num.split('');
//     alert(n);
//     var result=0;
//     alert(result);
// return result;
// }
function condec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}