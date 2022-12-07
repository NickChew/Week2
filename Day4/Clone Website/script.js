const submitBtn = document.getElementById('submitBtn');

// click event on submit button that runs the addItem function
submitBtn.addEventListener('click', addItem)

// key event on the entire document that runs addItem function when the enter key is pressed
document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        addItem()
    }
})
