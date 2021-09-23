{/* <div id="main">
      <div id="main1">lol</div>
      <p id="main2">hello, there</p>
      <h1>hello, world</h1>
      <p>do this thing</p>
    </div> */}

    const createEl = document.createElement('div')
 console.log(createEl) 

 const innerhtml = createEl.innerHTML = 'appending into parent'
 const main=document.getElementById('main')
main.append(createEl);
console.log(main)