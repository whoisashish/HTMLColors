var css = document.querySelector(".htmlcolor");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bg = document.getElementById("secondpicker");

function changeColor(){
  bg.style.background = "linear-gradient(to right, "
                        + color1.value
                        + ","
                        + color2.value
                        + ")";
css.textContent = bg.style.background + ";";
}

color1.addEventListener("input",changeColor);

color2.addEventListener("input",changeColor);

document.getElementById('normal').addEventListener('click',function(){
    document.getElementById('firstone').style.display = 'block';
    document.getElementById('secondpicker').style.display = 'none';
});

document.getElementById('gradient').addEventListener('click',function(){
    document.getElementById('firstone').style.display = 'none';
    document.getElementById('secondpicker').style.display = 'block';
});