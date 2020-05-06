var inBlock = document.getElementById("inBlock");
var addBut = document.querySelector(".addBut");
var delBut = document.querySelector(".delBut");
var output = document.querySelector(".output__container");

    var i = 0;

    addBut.onclick = function(){

    console.log(inBlock.value);

    var newDiv = document.createElement("div");
    newDiv.innerHTML = `№ ${++i} ${inBlock.value}`;
    output.appendChild(newDiv);
    inBlock.value = "";     
   };
   
   delBut.onclick = function(){
    output.innerHTML = null;
    }

  
