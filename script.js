/* =========================================================
   INTERMEDIATE LEVEL — DOM EVENTS USING MOUSE EVENTS
   All handlers attached with addEventListener()
   ========================================================= */

document.getElementById("yearNow").textContent = new Date().getFullYear();

/* ---------- Demo 1: Profile Card ---------- */

const profileBox = document.getElementById("profileBox");
const profileText = document.getElementById("profileText");

const defaultProfileText = "Move the pointer over this box.";
const hoverProfileText = "This card reacts to mouseover and mouseout events.";

function onProfileOver() {
  profileBox.classList.add("hovered");
  profileText.textContent = hoverProfileText;
}

function onProfileOut() {
  profileBox.classList.remove("hovered");
  profileText.textContent = defaultProfileText;
}

profileBox.addEventListener("mouseover", onProfileOver);
profileBox.addEventListener("mouseout", onProfileOut);

/* ---------- Demo 2: Interactive Paragraph ---------- */

const hoverParagraph = document.getElementById("hoverParagraph");

const defaultParaText = "Hover here to change this sentence.";
const activeParaText = "The sentence changed because the mouseover event fired.";

function onParaOver() {
  hoverParagraph.textContent = activeParaText;
  hoverParagraph.classList.add("active");
}

function onParaOut() {
  hoverParagraph.textContent = defaultParaText;
  hoverParagraph.classList.remove("active");
}

hoverParagraph.addEventListener("mouseover", onParaOver);
hoverParagraph.addEventListener("mouseout", onParaOut);

/* ---------- Demo 3: Tooltip Button ---------- */

const tipButton = document.getElementById("tipButton");
const tipText = document.getElementById("tipText");

function onTipOver() {
  tipText.classList.add("show");
}

function onTipOut() {
  tipText.classList.remove("show");
}

tipButton.addEventListener("mouseover", onTipOver);
tipButton.addEventListener("mouseout", onTipOut);
