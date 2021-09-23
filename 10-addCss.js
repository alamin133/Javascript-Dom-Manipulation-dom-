{/* <style>
body {
  background-color: rgb(119, 111, 115);
  display: flex;
  align-items: center;
}

.button {
  background-color: blueviolet;
  width: 400px;
  border: none;
  
  cursor: pointer;
}
</style>
</head>
<body>
<button id="first">Click me</button> */}

//adding css

const first =document.getElementById('first')

first.addEventListener('click', function addClick(){
    var addClick=first.classList.add('button')
})
