const body = document.body;
const img = body.appendChild(document.createElement("img"));
const hold = body.appendChild(document.createElement("div"));
const par = hold.appendChild(document.createElement("p"));

const vidDiv = body.appendChild(document.createElement("div"));
const vid = vidDiv.appendChild(document.createElement("video"));

const divBtn = body.appendChild(document.createElement("div"));
const btn = divBtn.appendChild(document.createElement("button"));

const str = "21 21 42 61 64 45 6e 64 69 6e 67 21 21 20 59 6f 75 20 68 61 76 65 20 62 65 65 6e 20 62 61 69 74 65 64 21 20 2d 31 30 30 30 20 53 6f 63 69 61 6c 20 43 72 65 64 69 74 73 21 20 47 6f 20 62 61 63 6b 20 74 6f 20 74 68 65 20 43 68 65 63 6b 70 6f 69 6e 74 21 20 21 21 42 61 64 45 6e 64 69 6e 67 21 21 20 "

body.style.overflow = 'hidden';
body.style.margin = '0';
body.style.padding = '0';
body.style.backgroundColor = 'black'
body.style.textAlign = 'center';

img.src = './bal.png';
img.style.width = 'auto';
img.style.height = '100%';
img.style.position = 'static'
img.style.opacity = '0.7';

hold.style.position = 'absolute';
hold.style.margin = '0';
hold.style.padding = '0';
hold.style.color = 'whitesmoke';
hold.style.fontFamily = 'Arial';
hold.style.fontWeight = 'bold';
hold.style.top = '50%';
hold.style.left = '50%';
hold.style.mixBlendMode = 'overlay';
hold.style.transform = 'translate(-50%, -50%)';

for (let i = 0; i < str.length/2; i++){
    par.textContent += str;
}

par.style.textAlign = 'justify';
par.style.opacity = '1'
par.style.margin = '0';
par.style.top = '0';

vidDiv.style.position = 'absolute';
vidDiv.style.width = `${innerWidth/10}px`;
vidDiv.style.height = `${innerWidth/10}px`;
vidDiv.style.top = '0';
vidDiv.style.left = '0';
vidDiv.style.borderRadius = '50%';
vidDiv.style.overflow = 'hidden';

vid.style.width = '100%';
vid.style.height = '100%';
vid.src = './super_idol.mp4';
vid.controls = false;
vid.volume = 0.7;
vid.loop = true;
vid.load();

divBtn.style.position = 'absolute';
divBtn.style.top = '0';
divBtn.style.width = '100%';
divBtn.style.height = '100%';
divBtn.style.margin = '0';
divBtn.style.padding = '0';
divBtn.style.backgroundColor = 'black';
divBtn.style.alignItems = 'center';
divBtn.style.display = 'flex';
divBtn.style.justifyContent = 'center';
divBtn.style.textAlign = 'center';

btn.textContent = "CLICK ME"
btn.style.backgroundColor = "transparent";
btn.style.color = 'whitesmoke';
btn.style.border = 0;
btn.style.fontWeight = 'bolder';
btn.style.fontSize = '64px';

btn.onclick = function(){
    divBtn.style.display = 'none';
    vid.play();
    anim();
}

img.onload = function(){
    hold.style.width = `${img.width}px`
}

var posY = 0;
var posX = 0;

var sY = Math.random()*4 + 2;
var sX = Math.random()*3+ 2;

function anim(){
    requestAnimationFrame(anim);

    var rect = vidDiv.getBoundingClientRect();

    if (rect.x + rect.width + 2 >= innerWidth || rect.x + 2 <= 0){
        sX = -sX;
    }

    if (rect.y + rect.width + 2 >= innerHeight || rect.y + 2  <= 0){
        sY = -sY;
    }

    console.log(innerHeight + " " + rect.y + rect.height)

    posY += sY;
    posX += sX;

    vidDiv.style.top = posY + 'px';
    vidDiv.style.left = posX + 'px';

}
