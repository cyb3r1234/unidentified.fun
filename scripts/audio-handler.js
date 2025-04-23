document.addEventListener('DOMContentLoaded', () => {
  const bgAudio_1 = document.getElementById('bg-music');
  const bgAudio_2 = document.getElementById('bg-music-2');
  const bgAudio_3 = document.getElementById('bg-music-3');

  if (bgAudio_1) {
    bgAudio_1.loop = true;
    bgAudio_1.volume = 0.1; // Set the volume to 10%
    bgAudio_1.muted = false; // Make sure the audio is not muted
  }

  if (bgAudio_2) {
    bgAudio_2.loop = true;
    bgAudio_2.volume = 0.1; // Set the volume to 10%
    bgAudio_2.muted = false; // Make sure the audio is not muted
  }

  if (bgAudio_3) {
    bgAudio_3.loop = true;
    bgAudio_3.volume = 0.1; // Set the volume to 10%
    bgAudio_3.muted = false; // Make sure the audio is not muted
  }
  // Wait for the user to interact with the page before playing the audio
  document.addEventListener('click', () => {
    if (bgAudio_1) {
      bgAudio_1.play().catch(error => console.error('Error playing bgAudio_1:', error));
    }
    if (bgAudio_2) {
      bgAudio_2.play().catch(error => console.error('Error playing bgAudio_2:', error));
    }
    if (bgAudio_3) {
      bgAudio_3.play().catch(error => console.error('Error playing bgAudio_3:', error));
    }
  });
});

