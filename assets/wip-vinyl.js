(() => {
  const players = document.querySelectorAll('[data-wip-player]');

  players.forEach((player) => {
    const button = player.querySelector('[data-player-button]');
    const buttonIcon = player.querySelector('[data-player-icon]');
    const buttonText = player.querySelector('[data-player-text]');
    const vinyl = player.querySelector('[data-vinyl]');
    const tonearm = player.querySelector('[data-tonearm]');
    const audio = player.querySelector('[data-player-audio]');
    const status = player.querySelector('[data-player-status]');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const armDuration = reducedMotion ? 40 : 1550;
    const playbackVolume = 0.68;
    const vinylRevolutionDuration = 1800;
    let phase = 'idle';
    let armTimer = 0;
    let loopTimer = 0;
    let rotationFrame = 0;
    let rotationStartedAt = 0;
    let audioContext = null;

    const setStatus = (message) => {
      status.textContent = message;
    };

    const setButton = (active) => {
      button.setAttribute('aria-pressed', String(active));
      buttonIcon.textContent = active ? '❚❚' : '▶';
      buttonText.textContent = active ? 'Ferma disco e musica' : 'Avvia disco e musica';
    };

    const ensureAudioContext = async () => {
      if (!audioContext) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) return null;
        audioContext = new AudioContextClass();
      }

      if (audioContext.state === 'suspended') await audioContext.resume();
      return audioContext;
    };

    const playNoise = async (kind) => {
      const context = await ensureAudioContext();
      if (!context) return;

      const isSkip = kind === 'skip';
      const duration = isSkip ? 0.56 : 1.15;
      const frameCount = Math.max(1, Math.floor(context.sampleRate * duration));
      const buffer = context.createBuffer(1, frameCount, context.sampleRate);
      const data = buffer.getChannelData(0);

      for (let index = 0; index < frameCount; index += 1) {
        const time = index / context.sampleRate;
        const noise = Math.random() * 2 - 1;

        if (isSkip) {
          const pulse = [0, 0.18, 0.36].reduce((sum, start) => {
            const offset = time - start;
            if (offset < 0 || offset >= 0.11) return sum;
            const scrape = Math.sin(offset * Math.PI / 0.11);
            return sum + scrape * (1 - offset / 0.11);
          }, 0);
          const grit = Math.sin(2 * Math.PI * (900 - time * 500) * time) * 0.1;
          data[index] = (noise * 0.48 + grit) * pulse;
        } else {
          const fade = 1 - time / duration;
          const pop = Math.random() < 0.0016 ? (Math.random() * 2 - 1) * 0.85 : 0;
          data[index] = (noise * 0.075 + pop) * fade;
        }
      }

      const source = context.createBufferSource();
      const highpass = context.createBiquadFilter();
      const lowpass = context.createBiquadFilter();
      const gain = context.createGain();
      source.buffer = buffer;
      highpass.type = 'highpass';
      highpass.frequency.value = isSkip ? 360 : 260;
      lowpass.type = 'lowpass';
      lowpass.frequency.value = isSkip ? 4600 : 5100;
      gain.gain.value = isSkip ? 0.17 : 0.13;
      source.connect(highpass).connect(lowpass).connect(gain).connect(context.destination);
      source.start();
    };

    const rotateVinyl = (timestamp) => {
      if (phase === 'idle') {
        rotationFrame = 0;
        return;
      }

      if (!rotationStartedAt) rotationStartedAt = timestamp;
      const angle = ((timestamp - rotationStartedAt) / vinylRevolutionDuration * 360) % 360;
      vinyl.style.transform = `rotate(${angle}deg)`;
      rotationFrame = window.requestAnimationFrame(rotateVinyl);
    };

    const startVinylRotation = () => {
      window.cancelAnimationFrame(rotationFrame);
      rotationStartedAt = 0;
      rotationFrame = window.requestAnimationFrame(rotateVinyl);
    };

    const stopVinylRotation = () => {
      window.cancelAnimationFrame(rotationFrame);
      rotationFrame = 0;
      rotationStartedAt = 0;
      vinyl.style.transform = 'rotate(0deg)';
    };

    const resetPlayer = () => {
      window.clearTimeout(armTimer);
      window.clearTimeout(loopTimer);
      phase = 'idle';
      audio.pause();
      audio.currentTime = 0;
      audio.volume = playbackVolume;
      vinyl.classList.remove('is-spinning');
      stopVinylRotation();
      tonearm.classList.remove('is-lowering', 'is-playing');
      setButton(false);
      setStatus('Pronto · premi ▶ per avviare');
    };

    const beginPlayback = async () => {
      if (phase !== 'idle') return;
      phase = 'lowering';
      setButton(true);
      setStatus('Avvio del piatto · la puntina si abbassa');
      vinyl.classList.add('is-spinning');
      startVinylRotation();
      tonearm.classList.add('is-lowering');

      try {
        await ensureAudioContext();
        audio.currentTime = 0;
        audio.volume = 0;
        await audio.play();
      } catch (error) {
        resetPlayer();
        setStatus('Riproduzione non disponibile in questo browser');
        return;
      }

      armTimer = window.setTimeout(() => {
        if (phase !== 'lowering') return;
        tonearm.classList.remove('is-lowering');
        tonearm.classList.add('is-playing');
        audio.currentTime = 0;
        audio.volume = playbackVolume;
        phase = 'playing';
        playNoise('crackle');
        setStatus('In riproduzione · 33⅓ giri/min');
      }, armDuration);
    };

    const beginLoop = () => {
      if (phase !== 'playing') return;
      phase = 'looping';
      audio.volume = 0;
      playNoise('skip');
      setStatus('La puntina salta · scratch e riavvio del lato');

      loopTimer = window.setTimeout(async () => {
        if (phase !== 'looping') return;
        try {
          audio.currentTime = 0;
          audio.volume = playbackVolume;
          await audio.play();
          phase = 'playing';
          playNoise('crackle');
          setStatus('In riproduzione · 33⅓ giri/min');
        } catch (error) {
          resetPlayer();
          setStatus('Riproduzione interrotta dal browser');
        }
      }, 600);
    };

    button.addEventListener('click', () => {
      if (phase === 'idle') beginPlayback();
      else resetPlayer();
    });

    audio.addEventListener('ended', beginLoop);
    audio.addEventListener('error', () => {
      resetPlayer();
      setStatus('Traccia audio non disponibile');
    });

    resetPlayer();
  });
})();
