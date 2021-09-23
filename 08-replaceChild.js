{/* <div id="main">
<div id="main1">lol</div>
<p id="main2">hello, there</p>
<h1>hello, world</h1>
<p>do this thing</p>
</div> */}

//ineserting element before another element

const createEl=document.createElement('div');
const main=document.getElementById('main')

const main2=document.getElementById('main2')

const innertext=createEl.innerHTML='inserting before'
 main.replaceChild(createEl,main2);

 console.log(main)