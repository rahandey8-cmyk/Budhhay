function show(id){
  document.querySelectorAll(".screen").forEach(s=>{
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

function openLetter(){
  show("letter");
}

function goPhotos(){
  show("photos");
}

function goCoupons(){
  show("coupons");
}

function goFlowers(){
  show("flowers");
}
