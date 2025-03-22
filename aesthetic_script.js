/* aesthetic_script.js */
const songs = {
  happy: [
    { title: "Golden Hour - JVKE", link: "https://youtu.be/PEM0Vs8jf1w?si=xVFOGtI46QbLWm1O" }, // Replace with actual YouTube links
    { title: "Walking on a Dream - Empire of the Sun", link: "https://youtu.be/eimgRedLkkU?si=w3Mc0RhVSCiSpGLP" },
    { title: "Sunday Best - Surfaces", link: "https://youtu.be/_83KqwEEGw4?si=Uk3RUWG7X0NLde6z" }
  ],
  sad: [
    { title: "Vienna - Billy Joel", link: "https://youtu.be/3jL4S4X97sQ?si=n92bSpfVrpVVnr8W" },
    { title: "Skinny Love - Bon Iver", link: "https://youtu.be/95FyXUHv8hk?si=-UaBPpT0OOAdtZ4W" },
    { title: "Landslide - Fleetwood Mac", link: "https://youtu.be/WM7-PYtXtJM?si=XiI9H4OMwSerddON" }
  ],
  energetic: [
    { title: "Midnight City - M83", link: "https://youtu.be/dX3k_QDnzHE?si=JNtpHBxa8Ov_0Eks" },
    { title: "Tongue Tied - Grouplove", link: "https://youtu.be/1x1wjGKHjBI?si=_ngG9sSwG-uM-MeS" },
    { title: "Pumped Up Kicks - Foster the People", link: "https://youtu.be/SDTZ7iX4vTQ?si=LeH8vDe9Tb9k7Moa" }
  ],
  calm: [
    { title: "Bloom - The Paper Kites", link: "https://youtu.be/8inJtTG_DuU?si=TsSvtIgN15PGmwif" },
    { title: "Holocene - Bon Iver", link: "https://youtu.be/TWcyIpul8OE?si=kvaGR3Fe2eolDuad" },
    { title: "River Flows In You - Yiruma", link: "https://youtu.be/7maJOI3QMu0?si=3m7_g15rYeF2GKMD" }
  ]
};

const moodSelect = document.getElementById("mood");
const songList = document.getElementById("song-list");
const body = document.body;

const moodColors = {
  happy: "linear-gradient(135deg, #ffecd2, #ff9a9e)",
  sad: "linear-gradient(135deg, #89f7fe, #66a6ff)",
  energetic: "linear-gradient(135deg, #fceabb, #f8b500)",
  calm: "linear-gradient(135deg, #a1c4fd, #c2e9fb)"
};

function displaySongs(mood) {
  songList.innerHTML = "";
  songs[mood].forEach(song => {
    const listItem = document.createElement("li");
    listItem.textContent = song.title;
    listItem.addEventListener("click", () => openYouTubeLink(song.link)); // Open YouTube link
    songList.appendChild(listItem);
  });
  body.style.background = moodColors[mood];
}

function openYouTubeLink(youtubeLink) {
  window.open(youtubeLink, "_blank"); // Open link in a new tab
}

moodSelect.addEventListener("change", () => {
  const selectedMood = moodSelect.value;
  displaySongs(selectedMood);
});

document.addEventListener("DOMContentLoaded", () => {
  displaySongs(moodSelect.value);
});