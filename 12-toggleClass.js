{/* <style>
body {
  background-color: rgb(119, 111, 115);
  
}

.button {
  background-color: blueviolet;
  width: 400px;
  border: none;
  height: 400px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
</head>
<body>
<button id="first">Click me</button> */}

//toggle
const first =document.getElementById('first')

first.addEventListener('click', addClick=()=>{
    var addClick=first.classList.toggle('button');
    console.log(first)

})