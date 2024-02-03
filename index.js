const animationSection = document.getElementById("animation-section");
const fadeHero = document.getElementById("fade-hero");
const glowVerticalLineSection = document.getElementById(
  "glow-vertical-line-section"
);
const glowHorizontalLineSection = document.getElementById(
  "glow-horizontal-line-section"
);

const boxWidth = 80;
const boxHeight = 90;
const sectionWidth = animationSection.clientWidth;
const sectionHeight = animationSection.clientHeight;
const verticalLinesNumber = Math.floor(sectionWidth / boxWidth) - 1;
const horizontalLinesNumber = Math.floor(sectionHeight / boxHeight) + 1;

const glowColors = [
  "#52bcd7",
  "#20A2BB",
  "#2BDFBF",
  "#7F3F4E",
  "#CBCBCB",
  "#E5E5E5",
  "#6abd24",
  "#C5B079",
  "#C5B079",
];

const createBoxes = () => {
  for (let i = 0; i < 300; i++) {
    const innerBox = document.createElement("div");
    const fadeBox = document.createElement("div");

    innerBox.style.width = boxWidth + "px";
    innerBox.style.height = boxHeight + "px";
    innerBox.style.background = "#1A1A1A";
    innerBox.style.borderRadius = "6px";

    fadeBox.className = "animation-box";
    fadeBox.style.width = boxWidth + "px";
    fadeBox.style.height = boxHeight + "px";

    animationSection.appendChild(innerBox);

    fadeHero.appendChild(fadeBox);
  }
};

const createVerticalLines = () => {
  for (let i = 0; i <= verticalLinesNumber; i++) {
    const box = document.createElement("div");
    const line = document.createElement("div");
    const miniLine = document.createElement("div");

    const randomColor = glowColors[Math.floor(Math.random() * (glowColors.length - 1))]

    miniLine.setAttribute("id", `v-line-${i}`);
    
    // Styles
    miniLine.style.boxShadow = `0px 0px 20px 40px ${randomColor}`;
    miniLine.style.background = "#" + randomColor;
    miniLine.style.animationDelay = Math.floor(Math.random() * 5) + "s";

    // append class
    miniLine.className = "mini-line-vertical";
    line.className = "line-vertical";

    box.style.width = boxWidth + "px";
    box.style.height = "100%";

    line.appendChild(miniLine);
    glowVerticalLineSection.appendChild(box);
    glowVerticalLineSection.appendChild(line);
  }
};

const createHorizontalLines = () => {
  for (let i = 0; i <= horizontalLinesNumber; i++) {
    const box = document.createElement("div");
    const line = document.createElement("div");
    const miniLine = document.createElement("div");

    miniLine.setAttribute("id", `h-line-${i}`);

    // Styles
    const randomColor = glowColors[Math.floor(Math.random() * (glowColors.length - 1))]
    miniLine.style.background = randomColor;
    miniLine.style.boxShadow = `0px 0px 20px 40px ${randomColor}`;

    // append class
    line.className = "line-horizontal";
    miniLine.className = "mini-line-horizontal";
    miniLine.style.animationDelay = Math.floor(Math.random() * 5) + "s";

    // Styles
    box.style.height = boxHeight + "px";
    box.style.width = "100%";

    //append child
    line.appendChild(miniLine);
    glowHorizontalLineSection.appendChild(box);
    glowHorizontalLineSection.appendChild(line);
  }
};

const showRandomlyMiniLine = () => {
  const position = Math.random() > 0.5 ? "v" : "h";


  const lineNumber = position === "v" ? verticalLinesNumber : horizontalLinesNumber
  const randomHorizontalLineId =
    position + "-line-" + Math.floor(Math.random() *  lineNumber);

  const line = document.getElementById(randomHorizontalLineId);
  line.style.opacity = "1";

  const glowTime = Math.ceil(Math.random() * 3);
  setTimeout(() => {
    line.style.opacity = "0";
  }, glowTime * 1000);
};

const createAnimationSection = () => {
  createBoxes();
  createVerticalLines();
  createHorizontalLines();
};

createAnimationSection();

for (let i = 0; i < 5; i++) {
  const randomTime = Math.ceil(Math.random() * 15);

  showRandomlyMiniLine();
  setInterval(() => {
    showRandomlyMiniLine();
  }, randomTime * 1000);
}
