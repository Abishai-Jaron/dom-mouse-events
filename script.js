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

const profileEvents = {
  enter: ["mouseenter", "focus"],
  leave: ["mouseleave", "blur"]
};

profileEvents.enter.forEach((eventName) => {
  profileBox.addEventListener(eventName, onProfileOver);
});

profileEvents.leave.forEach((eventName) => {
  profileBox.addEventListener(eventName, onProfileOut);
});
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

const paragraphEvents = {
  enter: ["mouseenter", "focus"],
  leave: ["mouseleave", "blur"]
};

paragraphEvents.enter.forEach((eventName) => {
  hoverParagraph.addEventListener(eventName, onParaOver);
});

paragraphEvents.leave.forEach((eventName) => {
  hoverParagraph.addEventListener(eventName, onParaOut);
});
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

const resetButton = document.getElementById("resetButton");

function resetDemonstrations() {
  profileBox.classList.remove("hovered");
  profileText.textContent = defaultProfileText;

  hoverParagraph.classList.remove("active");
  hoverParagraph.textContent = defaultParaText;

  tipText.classList.remove("show");
}

resetButton.addEventListener("click", resetDemonstrations);