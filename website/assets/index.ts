import { MediaPlayer } from "@juanr-yes/platzimediaplayer";
import { AutoPlay } from "@juanr-yes/platzimediaplayer/lib/plugins/AutoPlay"
import { AutoPause } from "@juanr-yes/platzimediaplayer/lib/plugins/AutoPause"
import Ads from '@juanr-yes/platzimediaplayer/lib/plugins/Ads';

const video: HTMLMediaElement = document.querySelector("video")!;
const playButton: HTMLElement = document.getElementById("playButton")!;
const muteButton: HTMLElement = document.getElementById("muteButton")!;
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause(),
    new Ads()
  ]
});

playButton.onclick = () => video.paused ? player.play() : player.pause();
muteButton.onclick = () => video.muted ? player.unmute() : player.mute();

// if("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js").catch(error => {
//     console.log(error.message)
//   });
// }