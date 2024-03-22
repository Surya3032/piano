document.addEventListener('DOMContentLoaded', function() {
    const keys = document.querySelectorAll('.key');
  
    keys.forEach(key => {
      key.addEventListener('click', () => {
        const sound = key.getAttribute('data-sound');
        const audio = document.getElementById('audio');
        audio.src = sound;
        audio.play();
        
      });
    });
  });
  