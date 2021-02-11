//RANDOM IMAGE
let num;
num = Math.floor(Math.random()* 16 + 1);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("canvas").style.backgroundImage = "url('img/"+ num +".jpg')";

    if(num == 1 ) {
        document.getElementById("caption").innerHTML = 'CC Halloween Show. Photograph: Will Clark'; };
    if(num == 2 ) {
        document.getElementById("caption").innerHTML = 'Kespos Arts Gathering. Photograph: Danielle and Lexi Goodland'; };
    if(num == 3 ) {
        document.getElementById("caption").innerHTML = 'Kespos Arts Gathering. Photograph: Danielle and Lexi Goodland'; };
    if(num == 4 ) {
        document.getElementById("caption").innerHTML = 'Label Launch. Photograph: Jack Joseph'; };
    if(num == 5 ) {
        document.getElementById("caption").innerHTML = 'CC Halloween Show. Photograph: Will Clark'; };
    if(num == 6 ) {
        document.getElementById("caption").innerHTML = 'Kespos Opening Night. Photograph: Lexi Goodland'; };
    if(num == 7 ) {
        document.getElementById("caption").innerHTML = 'Kespos Arts Gathering. Photograph: Danielle and Lexi Goodland'; };
    if(num == 8 ) {
        document.getElementById("caption").innerHTML = 'Label Launch. Photograph: Jack Joseph'; };
    if(num == 9 ) {
        document.getElementById("caption").innerHTML = 'Label Launch. Photograph: Jack Joseph'; };
    if(num == 10 ) {
        document.getElementById("caption").innerHTML = 'Kespos Arts Gathering. Photograph: Danielle and Lexi Goodland'; };
    if(num == 11 ) {
        document.getElementById("caption").innerHTML = 'Jacobs Ladder. Photograph: Will Clark'; };
    if(num == 12 ) {
        document.getElementById("caption").innerHTML = 'CC Halloween Show. Photograph: Will Clark'; };
    if(num == 13 ) {
        document.getElementById("caption").innerHTML = 'Jacobs Ladder. Photograph: Will Clark'; };
    if(num == 14 ) {
        document.getElementById("caption").innerHTML = 'CC Halloween Show. Photograph: Will Clark'; };
    if(num == 15 ) {
        document.getElementById("caption").innerHTML = 'CC Halloween Show. Photograph: Will Clark'; };
    if(num == 16 ) {
        document.getElementById("caption").innerHTML = 'Jacobs Ladder. Photograph: Will Clark'; };
    
});

//CAPTION


//DRAW
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }

    function draw(e){

        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = 'white';

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }

    function touchstart(event) { drawstart(event.touches[0]) }
  function touchmove(event) { drawmove(event.touches[0]); event.preventDefault(); }
  function touchend(event) { drawend(event.changedTouches[0]) }

    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("touchend", finishedPosition);
    canvas.addEventListener("touchmove", draw);
});


//Resize on stretch
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

