// Slideshow

let white = true;

let secondIndex = null;

let textSize = 50;

let newRatio = 2

if (window.innerWidth < 1150) {
  textSize = 35;
}

if (window.innerWidth < 916) {
  textSize = 32;
}
if (window.innerWidth < 726) {
  textSize = 30;
}

if (window.innerWidth < 690) {
  textSize = 25;
}
if (window.innerWidth < 576) {
  textSize = 20;
  newRatio = 4;
}
if (window.innerWidth < 480) {
  textSize = 18;
}
if (window.innerWidth < 450) {
  textSize = 15;
}
if (window.innerWidth < 350) {
  textSize = 13;
}

let propertiesCC = {
  family: "'Arial', sans-serif",
  size: textSize,
  fill: "#101010",
  weight: "700",

};
let propertiesE = {
  family: "'Arial', sans-serif",
  size: textSize,
  fill: "white",
  weight: "700",

};

// Council Complaints
let cc = new Blotter.Text("COUNCIL COMPLAINTS", propertiesCC);
let events = new Blotter.Text("EVENTS & PROMOTION", propertiesE);
let se = new Blotter.Text("IN THE SOUTHEAST", propertiesE);

var material = new Blotter.RollingDistortMaterial();
material.uniforms.uSineDistortSpread.value = 0.8;
material.uniforms.uSineDistortCycleCount.value = 0;
material.uniforms.uSineDistortAmplitude.value = 0;
material.uniforms.uNoiseDistortVolatility.value = 21;
material.uniforms.uNoiseDistortAmplitude.value = 0.026;
material.uniforms.uDistortPosition.value = [0, 0];
material.uniforms.uRotation.value = 64;

var blotter = new Blotter(material, {
  texts: [cc, events, se],
  ratio:newRatio
});

console.log(blotter)

var elem = document.getElementById("cc-text");
var scope = blotter.forText(cc);
var scope2 = blotter.forText(events);
var scope3 = blotter.forText(se);
scope.appendTo(elem);
scope2.appendTo(elem);
scope3.appendTo(elem);

let councilComplaints = true;

var preloadPictures = function (pictureUrls, callback) {
  var i,
    j,
    loaded = 0;

  for (i = 0, j = pictureUrls.length; i < j; i++) {
    (function (img, src) {
      img.onload = function () {
        if (++loaded == pictureUrls.length && callback) {
          callback();
        }
      };

      // Use the following callback methods to debug
      // in case of an unexpected behavior.
      img.onerror = function () {};
      img.onabort = function () {};

      img.src = src;
    })(new Image(), pictureUrls[i]);
  }
};

let timer;

preloadPictures(
  [
    "./slideshow/0.jpg",
    "./slideshow/1.jpg",
    "./slideshow/2.jpg",
    "./slideshow/3.jpg",
    "./slideshow/4.jpg",
    "./slideshow/5.jpg",
    "./slideshow/6.jpg",
    "./slideshow/7.jpg",
    "./slideshow/8.jpg",
    "./slideshow/9.jpg",
    "./slideshow/10.jpg",
    "./slideshow/11.jpg",
    "./slideshow/12.jpg",
    "./slideshow/13.jpg",
    "./slideshow/14.jpg",
    "./slideshow/15.jpg",
    "./slideshow/16.jpg",
    "./slideshow/17.jpg",
    "./slideshow/18.jpg",
    "./slideshow/19.jpg",
    "./slideshow/20.jpg",
    "./slideshow/21.jpg",
  ],
  function () {
    timer = setInterval(() => {
      slideShow();
    }, 4000);
  }
);

document.getElementById("cc-text").childNodes[1].style.display = "none";
document.getElementById("cc-text").childNodes[2].style.display = "none";

let prevImg = [];

let imgDim = 150;
let rot = 0;

if (window.innerWidth < 726) {
  imgDim = 100;
}

let createImage = false;

function randomImages() {
  let firstIndex = Math.floor(Math.random() * 22);

  if (prevImg.length === 22) {
    prevImg.shift();
    randomImages();
  } else {
    if (prevImg.find((o) => o.id === firstIndex)) {
      randomImages();
    } else {
      let imgTop = Math.round(
        Math.random() * (document.body.scrollHeight - imgDim)
      );
      let imgLeft = Math.round(
        Math.random() * (document.body.scrollWidth - imgDim)
      );
      let rot = Math.ceil(Math.random()) * (Math.round(Math.random()) ? 1 : -1);

      prevImg.push({
        style: {
          top: `${imgTop}px`,
          left: `${imgLeft}px`,
          transform: `rotate(${rot}deg)`,
        },
        src: firstIndex,
        id: firstIndex,
      });

      const img = document.createElement("img");
      img.src = `./slideshow/${firstIndex}.jpg`;
      let obj = prevImg.find((o) => o.id === firstIndex);
      img.style.top = obj.style.top;
      img.style.left = obj.style.left;
      img.style.height = imgDim + "px";
      img.style.width = imgDim + "px";
      img.style.transform = obj.style.transform;
      img.classList.add("collage");
      document.body.appendChild(img);
    }
  }
}

// Slide Show
function slideShow() {
  clearInterval(timer);

  randomImages();

  // change background

  white = !white;

  if (white) {
    document.body.style.background = "#FBFBFB";
    document.getElementById("logo").style.filter = "invert(0)";
    document.getElementById("icon").style.filter = "invert(0)";
  } else {
    document.body.style.background = "#060606";
    document.getElementById("logo").style.filter = "invert(100%)";
    document.getElementById("icon").style.filter = "invert(100%)";
  }

  councilComplaints = !councilComplaints;

  if (councilComplaints) {
    document.getElementById("cc-text").childNodes[0].style.display = "block";
    document.getElementById("cc-text").childNodes[1].style.display = "none";
    document.getElementById("cc-text").childNodes[2].style.display = "none";
  } else {
    document.getElementById("cc-text").childNodes[0].style.display = "none";
    document.getElementById("cc-text").childNodes[1].style.display = "block";
    document.getElementById("cc-text").childNodes[2].style.display = "block";
  }

  timer = setInterval(() => {
    slideShow();
  }, 4000);
}

document.getElementById("app").addEventListener("click", () => {
  slideShow();
});

document.getElementById("icon").addEventListener("click", () => {
  showInfo();
});

document.getElementById("info").addEventListener("click", (e) => {
  if (e.target.id === "info") {
    showInfo();
  } else return;
});

let hideInfo = true;

function showInfo() {
  hideInfo = !hideInfo;

  if (hideInfo) {
    timer = setInterval(() => {
      slideShow();
    }, 4000);
    window.setTimeout(function () {
      document.getElementById("info").style.transform = "scale(0)";
    }, 300);

    document.getElementById("info").style.opacity = "0";
    document.getElementById("info-container").style.transform =
      "translateY(100vh)";
  } else {
    clearInterval(timer);
    document.getElementById("info").style.transform = "scale(1)";
    document.getElementById("info").style.opacity = "1";
    document.getElementById("info-container").style.transform = "translateY(0)";
  }
}
