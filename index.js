// console.log('hello,world')

function addMovie(event){
  event.preventDefault()

  let inputField = document.querySelector('input')
  let movie = document.createElement('li')
  let movieTitle = document.createElement('span')
  

  movie.textContent = inputField.value
  movie.appendChild(movieTitle)
  
  let deleteBtn = document.createElement('button')
  movie.appendChild(deleteBtn)
  deleteBtn.textContent = 'x'
  deleteBtn.addEventListener('click', deleteMovie) 
  document.querySelector('ul').appendChild(movie)
  inputField.value = ''
}


document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
  event.target.parentNode.remove()
}

