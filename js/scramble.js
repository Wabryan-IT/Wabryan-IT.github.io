/**
 * scramble.js — Effet de texte scramble sur le nom du hero
 */

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#&@!';

export function scrambleText(elementId, finalText, delay = 520, frames = 50) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let f = 0;

  function tick() {
    if (f >= frames) {
      el.textContent = finalText;
      return;
    }
    const revealed = Math.floor((f / frames) * finalText.length);
    let output = '';

    for (let i = 0; i < finalText.length; i++) {
      output += i < revealed
        ? finalText[i]
        : CHARS[Math.floor(Math.random() * CHARS.length)];
    }

    el.textContent = output;
    f++;
    requestAnimationFrame(tick);
  }

  setTimeout(tick, delay);
}
