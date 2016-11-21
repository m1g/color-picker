let hue = 128
let sat = 100
let light = 50
let alpha = 1

// hsla(128, 100%, 50%, 1)
const getHSL = () => {
  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`
}

const main = () => {
  const gradientBox = document.querySelector('div.gradient-box')
  const currentHue = document.querySelector('input[name=hue]')
  currentHue.addEventListener('input', () => {
    hue = currentHue.value
    gradientBox.style.backgroundColor = getHSL()
    document.querySelector('h3.colors').textContent = getHSL()
    console.log(getHSL())
  })

  const currentSat = document.querySelector('input[name=sat]')
  currentSat.addEventListener('input', () => {
    sat = currentSat.value
    gradientBox.style.backgroundColor = getHSL()
    document.querySelector('h3.colors').textContent = getHSL()
    console.log(getHSL())
  })

  const currentLight = document.querySelector('input[name=light]')
  currentLight.addEventListener('input', () => {
    light = currentLight.value
    gradientBox.style.backgroundColor = getHSL()
    document.querySelector('h3.colors').textContent = getHSL()
    console.log(getHSL())
  })

  const currentAlpha = document.querySelector('input[name=alpha]')
  currentAlpha.addEventListener('input', () => {
    alpha = currentAlpha.value
    gradientBox.style.backgroundColor = getHSL()
    document.querySelector('h3.colors').textContent = getHSL()
    console.log(getHSL())
  })
}

document.addEventListener('DOMContentLoaded', main)
