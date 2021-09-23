{
  /* <div id="main">
      <div id="main1">lol</div>
      <p id="main2">hello, there</p>
      <h1>hello, world</h1>
      <p>do this thing</p>
    </div> */
}

//remove element

const main = document.getElementById('main')
const main1 = document.getElementById('main1')
main.removeChild(main1)
console.log(main)
