let input_field=document.getElementById("inputField")
let btn=document.getElementById("submit_btn")
btn.addEventListener("click",function(){
    let tasks=[];
    if(input_field.value.trim()==""){
        alert("Please enter a task");
        return;
    }
    else {
        tasks = [...tasks,input_field.value]
    
        var items=document.createElement('h2');
        items.id="newText";
        var deleteBtn= document.createElement('button');
        deleteBtn.id="delete-btn";
        deleteBtn.textContent="Delete";
    
        items.textContent=tasks;
        document.getElementById("parent-div").append(items,deleteBtn);
    
        input_field.value = "";
        
        deleteBtn.addEventListener("click",function(){
            items.remove();
            deleteBtn.remove();
        })
    }
    
})