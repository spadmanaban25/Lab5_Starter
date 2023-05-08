//explore.js

window.addEventListener('DOMContentLoaded', init);

const synth = window.speechSynthesis;

function init() {
  // on page load, initialize all available speech voices
  var select = document.getElementById('voice-select');
  window.addEventListener('load', function() {
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name;
      select.appendChild(option);
    }
  });

  
  var playSpeechButton = document.querySelector('button');
  playSpeechButton.addEventListener('click', function() {
    var inputTxt = document.querySelector('textarea');
    var selectedVoice = select.value;
    const speak = new SpeechSynthesisUtterance(inputTxt.value);
    let voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name == selectedVoice) {
        speak.voice = voices[i];
      }
    }

    synth.speak(speak);
    
    var synthImg = document.querySelector('img');

    speak.onstart = function() {
      synthImg.src = 'assets/images/smiling-open.png';
    }

    speak.onend = function() {
      synthImg.src = 'assets/images/smiling.png';
    }
  });
}