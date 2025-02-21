const parentDiv = document.getElementById('parent-div');

parentDiv.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        alert(`You clicked ${event.target.innerText}`);
    }
});