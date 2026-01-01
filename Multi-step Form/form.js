let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');

let next1 = document.getElementById('next1');
let back1 = document.getElementById('back1');
let next2 = document.getElementById('next2');
let back2 = document.getElementById('back2');

let progress = document.getElementById('progress-bar')

next1.onclick = ()=>{
    form1.style.left = "-450px";
    form2.style.left = "30px";
    progress.style.width = "240px"
}

back1.onclick = ()=>{
    form1.style.left = "30px";
    form2.style.left = "450px";
    progress.style.width = "120px"
}

next2.onclick = ()=>{
    form2.style.left = "-450px";
    form3.style.left = "30px";
    progress.style.width = "360px"
}

back2.onclick = ()=>{
    form2.style.left = "30px";
    form3.style.left = "450px";
    progress.style.width = "240px"
}