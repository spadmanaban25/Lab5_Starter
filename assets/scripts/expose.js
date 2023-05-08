// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var canvas = document.createElement('canvas');
  canvas.id = 'confetti';
  canvas.width = 699;
  canvas.height = 937;
  canvas.style.position = "fixed";
  canvas.style.width = "1200px";
  canvas.style.height = "1200px";
  canvas.style.pointerEvents = "none";

  document.body.appendChild(canvas);

  const selectedHorn = document.getElementById('horn-select');
  const hornSound = document.querySelector('audio');
  const hornImg = document.querySelector('img');
  const soundButton = document.querySelector('button');
  const soundVolume = document.getElementById('volume');
  var sound;

  selectedHorn.addEventListener('change', function () {
    if (selectedHorn.value === 'air-horn') {
      hornImg.alt = "Air Horn";
      hornImg.src = "assets/images/air-horn.svg";
      hornSound.src = "assets/audio/air-horn.mp3";

    } else if (selectedHorn.value === 'car-horn') {
      hornImg.alt = "Car Horn";
      hornImg.src = "assets/images/car-horn.svg";
      hornSound.src = "assets/audio/car-horn.mp3";

    } else if (selectedHorn.value == 'Party Horn') {
      hornImg.alt = "Party Horn";
      hornImg.src = "assets/images/party-horn.svg";
      hornSound.src = "assets/audio/party-horn.mp3";

    } else {
      hornImg.alt = 'No image selected';
      hornImg.src = 'assets/images/no-image.png';
    }
  });

  soundVolume.addEventListener('change', function () {
    let audioImg = document.querySelectorAll('img')[1];
    let audio = document.querySelector('audio');

    if (soundVolume.value == 0) {
      audioImg.alt = "Volume Level 0";
      audioImg.src = "assets/icons/volume-level-0.svg";
    } else if (soundVolume.value >= 1 && soundVolume.value < 32) {
      audioImg.alt = "Volume Level 1";
      audioImg.src = "assets/icons/volume-level-1.svg";
    } else if (soundVolume.value >= 33 && soundVolume.value < 67) {
      audioImg.alt = "Volume Level 2";
      audioImg.src = "assets/icons/volume-level-2.svg";
    } else {
      audioImg.alt = "Volume Level 3";
      audioImg.src = "assets/icons/volume-level-3.svg";
    }

    audio.volume = soundVolume.value / 100;
  
  });
  
  soundButton.addEventListener('click', function (e) {
    hornSound.play();
    if (selectedHorn.value === "party-horn") {
      const confetti = new JSConfetti({ canvas });
      confetti.addConfetti();
    }
  });
}