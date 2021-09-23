//select tagname and change by clickng

{/* <h1>i am first h1</h1>
<h1>second h1</h1>
<button id="btn">pls mouse over</button> */}

const btn =document.getElementById('btn');

btn.addEventListener('mouseover', function mouse(){
    var mouse=document.getElementsByTagName('h1');
    var again=mouse[1].innerHTML='i am changed';
    console.log(again)//i am changed

})

