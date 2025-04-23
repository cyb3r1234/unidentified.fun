
const preloader = document.querySelector('.preloader');
const background = document.querySelector('.background');

  function checkIfLoaded() {
    if (document.readyState === 'complete') {
        preloader.classList.add('fade-out');
        background.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
            background.style.display = 'none';
        }, 1000); // Match the duration of the fade-out animation
    } else {
      setTimeout(checkIfLoaded, 100);
    }
  }

  checkIfLoaded();
