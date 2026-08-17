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

profileBox.addEventListener("mouseenter", onProfileOver);
profileBox.addEventListener("mouseleave", onProfileOut);
profileBox.addEventListener("focus", onProfileOver);
profileBox.addEventListener("blur", onProfileOut);
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

hoverParagraph.addEventListener("mouseenter", onParaOver);
hoverParagraph.addEventListener("mouseleave", onParaOut);
hoverParagraph.addEventListener("focus", onParaOver);
hoverParagraph.addEventListener("blur", onParaOut);
/* ---------- Demo 3: Tooltip Button ---------- */

const tipButton = document.getElementById("tipButton");
const tipText = document.getElementById("tipText");

function onTipOver() {
  tipText.classList.add("show");
}

function onTipOut() {
  tipText.classList.remove("show");
}

tipButton.addEventListener("mouseenter", onTipOver);
tipButton.addEventListener("mouseleave", onTipOut);
tipButton.addEventListener("focus", onTipOver);
tipButton.addEventListener("blur", onTipOut);