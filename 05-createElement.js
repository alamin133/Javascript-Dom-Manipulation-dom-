//create new element
{/* <div id="main">
      <div id="main1">lol</div>
      <p id="main2">hello, there</p>
      <h1>hello, world</h1>
      <p>do this thing</p>
    </div> */}
const createEl = document.createElement('div')
 console.log(createEl) //<div></div>

//set innerHTML

const innerhtml = createEl.innerHTML = 'i am a frontend developer'
console.log(createEl) 
