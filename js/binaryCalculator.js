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
    var operators=val.match(re)
    var values=val.split(operators[0]);
    console.log(values);
}
function conbin(num){
return result;
}
function condec(num){
return result;
}