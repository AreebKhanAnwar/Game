var forward = 0;
function abc() {
    console.log(event.keyCode);

    var character = document.getElementById("character");
    if (event.keyCode === 13) {
        character.src = "superman-sprite-fly.gif"
        character.style.width = "100px";
    }
    if (event.keyCode === 39){
        forward = forward + 10;
        character.style.left = forward + "px";
        character.style.transform = "rotateZ(0deg)";
        character.style.width = "200px";
        character.style.height = "100px";
        character.src = "superman-fly2.gif";
    }
    if(event.keyCode === 37){
        forward = forward - 10;
        character.style.left = forward + "px";
        image.style.transform = "rotateXscaleX(-1)";
        character.src = "superman-sprite.gif";
    }
    if(event.keyCode === 38){
        forward = forward + 10;
        character.style.bottom = forward + "px";
        character.style.width = "100px";
        character.style.height = "200px";
        character.src = "superman-sprite-fly.gif";
    }
    if(event.keyCode === 40){
        forward = forward - 10;
        character.style.bottom = forward + "px";
        character.style.width = "100px";
        character.style.height = "200px";
        character.src = "superman-sprite-fly.gif";
    }
}
window.onkeydown = abc;