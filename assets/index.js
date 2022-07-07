import { MediaPlayer } from "./MediaPlayer.js";
import { AutoPlay } from "./plugins/AutoPlay.js"

const video = document.querySelector("video");
const playButton = document.getElementById("playButton");
const muteButton = document.getElementById("muteButton");
const player = new MediaPlayer({
  el: video,
  // plugins: [new AutoPlay()]
});

playButton.onclick = () => video.paused ? player.play() : player.pause();
muteButton.onclick = () => video.muted ? player.unmute() : player.mute();
