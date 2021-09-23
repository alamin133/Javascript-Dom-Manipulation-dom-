//  <div id="main">
// <div id="main1"></div>
//     <p id="main2">hello, there</p>
//     <h1>hello, world</h1>
//     <p>do this thing</p>

// </div>

// selecting last element of main div
const main=document.getElementById('main').lastElementChild
console.log(main)

//selecting children 2

const main =document.getElementById('main').children[2]
console.log(main)

//selecting main1 id


//finding parentNode
const main2 = document.getElementById('main2')
console.log(main2.parentNode)
//nextSibling
console.log(main2.nextElementSibling)

//previousSibling
console.log(main2.previousElementSibling)