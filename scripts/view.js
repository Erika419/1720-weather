const gridButton= document.querySelector('#btn-grid')
const listButton= document.querySelector('#btn-list')
const layout = document.querySelector('#showFlags')

//Asign grid class
gridButton.addEventListener('click', () => {
    gridButton.className = 'show'
    listButton.className = ''
    layout.className= 'grid'
});

//Asign list class
listButton.addEventListener('click', () => {
    listButton.className = 'show'
    gridButton.className = ''
    layout.className= 'list'
});