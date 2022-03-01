var input =  document.querySelector('.textInput');
var addBtn = document.querySelector('.btn-primary');
var parentDiv = document.getElementById('mainContent');
window.addEventListener('load', () =>  {
   

   function start() {
       
       const inputValue = input.value
       if (inputValue.length < 1 ) {
           alert('input must filledalert out')
       }

else {
    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer')

    parentDiv.appendChild(listContainer)

    const content = document.createElement('div')
    content.classList.add('content')
    listContainer.appendChild(content)


    const inputVal = document.createElement('input')

    inputVal.classList.add('newInput')
    inputVal.type = 'text'
    inputVal.value = inputValue;
    inputVal.setAttribute('readOnly', 'readOnly')

    content.appendChild(inputVal)


    const removeBtn = document.createElement('button')
    removeBtn.classList.add('btn-danger')
    removeBtn.innerText = 'Remove'

    const editBtn = document.createElement('button')
    editBtn.classList.add('btn-info')
    editBtn.innerText = 'Edit'

    const checkBox = document.createElement('input')
    checkBox.type = 'checkbox'

    checkBox.addEventListener('click', () => {
        if (checkBox.checked == true) {
            inputVal.classList.add('checkControler')
            editBtn.disabled = true
            editBtn.innerHTML = 'Edit'
            removeBtn.innerHTML = 'Remove'

        } else {
            inputVal.classList.remove('checkControler')
            editBtn.disabled = false

        }
    })
    

    content.appendChild(checkBox)
    content.appendChild(removeBtn)
    content.appendChild(editBtn)


    var arr = []

    arr.push(inputValue)
    var data = [...arr, inputValue]

    console.log(data)


    
    removeBtn.addEventListener('click', (e) => {
    if (removeBtn.innerText == 'Remove') {
        parentDiv.removeChild(listContainer)
       
    } else if (removeBtn.innerText == 'Cancel') {
        editBtn.innerText = 'Edit'
        removeBtn.innerText = 'Remove'
        inputVal.value = inputValue
    }
})
    editBtn.addEventListener('click', () => {
        if(editBtn.innerHTML == 'Edit') {
            editBtn.innerText = 'Save'
            removeBtn.innerText = 'Cancel'
            inputVal.removeAttribute('readOnly')
            inputVal.focus()
        }
        else {
            editBtn.innerText = 'Edit'
            removeBtn.innerText = 'Remove'
            inputVal.setAttribute('readOnly', 'readOnly')
        } 
    })}
   }

   addBtn.addEventListener('click', (e) => {
       e.preventDefault()
       start()
       input.value = ''
       input.focus()
   })
    
    input.addEventListener('keyup', (e) => {
        if(e.keyCode == 13) {
            start()
            input.value = ''
        }      
    },
    )
 }
)

