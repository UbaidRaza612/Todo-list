let btn = document.querySelector(".btn");
btn.addEventListener("click" , ()=>{

    const todoItems = document.getElementById('todoItems');
    const todoList = document.getElementById('todoList');
    
    if (todoItems.value !== '') {
        const li = document.createElement('li');
 
        
        li.textContent = todoItems.value;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px';
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };
    
        li.appendChild(deleteButton);
        
        todoList.appendChild(li);
        todoItems.value = '';
    }else{
        alert("please field the input ")
    }
})

