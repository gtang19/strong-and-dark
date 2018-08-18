const strong1 = document.querySelector(".strong1")
const strong2 = document.querySelector(".strong2")
const strong3 = document.querySelector(".strong3")
const stronganddark = document.querySelector(".stronganddark")

function toggle(obj) {
  if (obj.style.display === "none") {
    obj.style.display = "block";
  } else {
    obj.style.display = "none";

  }
}

function show(obj) {
  obj.style.display = "block";
}
function hide(obj) {
  obj.style.display = "none";
}

strong1.addEventListener('change', function(){
  show(strong2);
});

strong2.addEventListener('change', function(){
  show(strong3);
});

strong3.addEventListener('change', function(){
  setTimeout(function(){
    hide(strong1);
    hide(strong2);
    hide(strong3);
    setTimeout(function(){
      show(stronganddark);
    },3200);
  }, 1000);
});


stronganddark.addEventListener('change', function(){
  setInterval(function(){
    var para = document.createElement("h2");
    var text = document.createTextNode("Strong and Dark");
    para.appendChild(text);
    document.body.appendChild(para);

  },800);
});


hide(stronganddark);
hide(strong2);
hide(strong3);
