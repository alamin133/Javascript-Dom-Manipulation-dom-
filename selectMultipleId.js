{
  /* <h1 class="first2">First example</h1>
<h1 class="first2">First example</h1>
<h1 class="first2">First example</h1> */
}

{
  /* <button id="btn">click me</button> */
}


//select multiple class name and change one property
const btn =document.getElementById('btn')
        
        btn.addEventListener('click', function first(){
            var first =document.getElementsByClassName("first2");
            first[2].innerHTML = 'i need a job';
        })


