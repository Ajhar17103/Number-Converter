let input=document.getElementById('input');
let result=document.getElementById('result');
let binary=document.getElementById('binary');
let octal=document.getElementById('octal');
let hex=document.getElementById('hex');


binary.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value==''){
        alert('put Your Valid Number');
        
    }
   else if(input.value<0){
      alert('Put Your Positive Number');
    }
    else{
        getValue=Number(input.value).toString(2);
        result.value=getValue + '~'+'B';
    }
    
})

octal.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value==''){
        alert('put Your Valid Number');
        
    }
   else if(input.value<0){
      alert('Put Your Positive Number');
    }
    else{
        getValue=Number(input.value).toString(8);
        result.value=getValue + '~'+'O';
    }
    
});
hex.addEventListener('click', function(e){
    e.preventDefault();
    if(input.value==''){
        alert('put Your Valid Number');
        
    }
   else if(input.value<0){
      alert('Put Your Positive Number');
    }
    else{
        getValue=Number(input.value).toString(16);
        result.value=getValue + ' ~' +'H';
    }
    
})