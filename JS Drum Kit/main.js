window.addEventListener("keydown", function(dupa) {
    const audio = document.querySelector(`audio[data-key="${dupa.keyCode}"]`);
    const keyColor = document.querySelector(`.key[data-key="${dupa.keyCode}"]`);
    
    if (!audio || !keyColor) return;
  
    keyColor.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  
    audio.onended = function(){
      keyColor.classList.remove('playing');
    }
  });