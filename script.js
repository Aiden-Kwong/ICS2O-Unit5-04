document.getElementById('image').addEventListener('click', changeImage)
document.getElementById('text').addEventListener('click', changeText)
document.getElementById('background').addEventListener('click', changeBackground)
document.getElementById('show').addEventListener('click', showText)
document.getElementById('hide').addEventListener('click', hideText)

function changeImage () {
  document.getElementById('picture').src = 'images/test-image2.jpg'
}

function changeText () {
  document.getElementById('paragraph').innerHTML = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

function changeBackground () {
  document.body.style.backgroundColor = '#d3d3d3'
}

function showText () {
  document.getElementById('paragraph').style.display = 'block'
}

function hideText () {
  document.getElementById('paragraph').style.display = 'none'
}
