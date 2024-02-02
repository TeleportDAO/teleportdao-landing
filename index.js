const animationSection = document.getElementById("animation-section")
const glowVerticalLineSection = document.getElementById("glow-vertical-line-section")
const glowHorizontalLineSection = document.getElementById("glow-horizontal-line-section")

const boxWidth = 80
const boxHeight = 90
const sectionWidth = animationSection.clientWidth
const sectionHeight = animationSection.clientHeight
const verticalLinesNumber = Math.floor(sectionWidth / boxWidth) - 1
const horizontalLinesNumber = Math.floor(sectionHeight / boxHeight) + 1

const createBoxes = () => {
  for (let i = 0; i < 300; i++) {
    const animationBox = document.createElement('div')
    animationBox.className = 'animation-box'
    animationBox.style.width = boxWidth + "px"
    animationBox.style.height = boxHeight + "px"
    animationSection.appendChild(animationBox)
  }
}

const createVerticalLines = () => {
  for (let i = 0; i <= verticalLinesNumber; i++) {
    const box = document.createElement('div')
    const line = document.createElement('div')
    const miniLine = document.createElement('div')

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    // Styles
    miniLine.setAttribute("id", `v-line-${i}`);
    miniLine.style.background = "#" + randomColor
    miniLine.style.animationDelay = Math.floor(Math.random() * 5) + "s"

    // append class
    miniLine.className = "mini-line-vertical"
    line.className = "line-vertical"

    box.style.width = boxWidth + "px"
    box.style.height = "100%"

    line.appendChild(miniLine)
    glowVerticalLineSection.appendChild(box)
    glowVerticalLineSection.appendChild(line)
  }
}

const createHorizontalLines = () => {
  for (let i = 0; i <= horizontalLinesNumber; i++) {
    const box = document.createElement('div')
    const line = document.createElement('div')
    const miniLine = document.createElement('div')

    miniLine.setAttribute("id", `h-line-${i}`);

    // Styles
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    console.log('randomColor', randomColor)
    miniLine.style.background = randomColor
    miniLine.style.boxShadow = `0px 0px 20px 40px ${randomColor}`

    // append class
    line.className = "line-horizontal"
    miniLine.className = "mini-line-horizontal"
    miniLine.style.animationDelay = Math.floor(Math.random() * 5) + "s"

    // Styles
    box.style.height = boxHeight + "px"
    box.style.width = "100%"

    //append child
    line.appendChild(miniLine)
    glowHorizontalLineSection.appendChild(box)
    glowHorizontalLineSection.appendChild(line)
  }
}

const showRandomlyMiniLine = () => {
  const position = Math.random() > 0.5 ? "v" : "h"

  const randomHorizontalLineId = position + "-line-" + Math.floor(Math.random() * horizontalLinesNumber)

  const line = document.getElementById(randomHorizontalLineId)
  line.style.opacity = "1"

  const glowTime = Math.ceil(Math.random() * 3)
  setTimeout(() => {
    line.style.opacity = "0"
  }, glowTime * 1000)
}

const createAnimationSection = () => {
  createBoxes()
  createVerticalLines()
  createHorizontalLines()
}

createAnimationSection()


for (let i = 0; i < 5; i++) {
  const randomTime = Math.ceil(Math.random() * 15)

  showRandomlyMiniLine()
  setInterval(() => {
    showRandomlyMiniLine()
  }, randomTime * 1000)
}
