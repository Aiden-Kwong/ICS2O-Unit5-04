// The following 5 lines are event listeners which detect when their respective buttons are clicked and trigger their respective functions.
document.getElementById('image').addEventListener('click', changeImage)
document.getElementById('text').addEventListener('click', changeText)
document.getElementById('background').addEventListener('click', changeBackground)
document.getElementById('show').addEventListener('click', showText)
document.getElementById('hide').addEventListener('click', hideText)

// This function replaces the image with id 'picture' with test-image2.
function changeImage () {
  document.getElementById('picture').src = 'images/test-image2.jpg'
}

// This function changes the existing text with id 'paragraph' to this passage of lorem ipsum.
function changeText () {
  document.getElementById('paragraph').innerHTML = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

// This changes the body background color to a light grey.
function changeBackground () {
  document.body.style.backgroundColor = '#d3d3d3'
}

// This makes the text appear, displayed in block format.
function showText () {
  document.getElementById('paragraph').style.display = 'block'
}

// This hides the text by changing the display format to 'none'.
function hideText () {
  document.getElementById('paragraph').style.display = 'none'
}
