// Countdown
// Atur waktu akhir
let countDownDate = new Date("Maret 31, 2022 08:00:00").getTime();

// Update waktu setiap 1 detik
let x = setInterval(function () {
  // dapatkan tanggal dan waktu sekarang
  let now = new Date().getTime();

  // Cari jarak waktu sekarang dengan waktu akhir
  let distance = countDownDate - now;

  // Kalkukalasikan waktu
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days + " Hari";
  document.getElementById("jam").innerHTML = hours + " Jam";
  document.getElementById("menit").innerHTML = minutes + " Menit";
  document.getElementById("detik").innerHTML = seconds + " Detik";
}, 1000);

// Musik
const track = document.getElementById("track");
const button = document.getElementById("play-pause");

function playPause() {
  if (track.paused) {
    track.play();
    button.className = "bi-pause-fill";
  } else {
    track.pause();
    button.className = "bi-play-fill";
  }
}
// Button Music
button.addEventListener("click", playPause);
track.addEventListener("ended", function () {
  button.className = "bi-play-fill";
});

// Gallery glightbox
const lightbox = GLightbox({
  closeOnOutsideClick: false,
  loop: true,
});
