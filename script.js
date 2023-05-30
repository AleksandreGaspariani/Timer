$(document).ready(function() {

    $('.start').click(function() {
        if (!$('.start').hasClass('activeStart')) {
            $('.start').addClass('activeStart'); 
        }else {
            $('.start').removeClass('activeStart');
            $('.start').addClass('pausedStart');
        }
    });    
});

const timer = {
    startTime: null,
    elapsedTime: 0,
    timerId: null,
    running: false,
  
    start() {
      if (!this.running) {
        this.startTime = Date.now() - this.elapsedTime;
        this.timerId = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
          const formattedTime = formatTime(this.elapsedTime);
          $('.seconds').html(formattedTime);
        }, 1000);
        this.running = true;
      }
    },
  
    pause() {
      if (this.running) {
        clearInterval(this.timerId);
        this.running = false;
      }
    },
  
    reset() {
      clearInterval(this.timerId);
      this.elapsedTime = 0;
      this.running = false;
    }
  };
  
  function formatTime(time) {
    const pad = (num) => String(num).padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / 1000 / 60 / 60);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
  
  // Start/Pause button click event handler
  $('.start').on('click', () => {
    if (timer.running) {
      timer.pause();
    } else {
      timer.start();
    }
  });
  
