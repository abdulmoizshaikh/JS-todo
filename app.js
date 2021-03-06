var input=document.getElementById("input");
var contentDiv=document.getElementById("contentDiv");
var errorMsg=document.getElementById("errorMsg");
var addTodoBtn=document.getElementById("addBtn");
input.focus();
var editItem;


function add(){
    if(input.value=="" || input.value==" ")
    {
        errorMsg.style.display="block";
        setTimeout(()=>{
            errorMsg.style.display='none'},3000);
        input.focus();
    }
    else{
    var ul=document.createElement("UL");
    ul.setAttribute("class","list-group");
    var li=document.createElement("LI");
    li.setAttribute("class","list-group-item list-group-item-primary");
    var text=document.createTextNode(input.value);

    var deleteBtn=document.createElement("BUTTON");
    deleteBtn.innerHTML="delete";
    deleteBtn.setAttribute("class","btn btn-dark");
    deleteBtn.style.cssFloat="right";
    deleteBtn.setAttribute("onclick","deletefunc(this)");

    var editBtn=document.createElement("BUTTON");
    editBtn.innerHTML="edit";
    editBtn.setAttribute("class","btn btn-light");
    editBtn.style.cssFloat="right";
    editBtn.setAttribute("onclick","editfunc(this)");

    li.appendChild(text);
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    ul.appendChild(li);
    contentDiv.appendChild(ul);

    input.value="";
    input.focus();
    }
}

function deletefunc(e){
    e.parentNode.parentNode.removeChild(e.parentNode);
    input.focus();
}

function editfunc(e){
    editItem=e;
    input.focus();
    addTodoBtn.innerHTML="Save Todo";
    addTodoBtn.setAttribute("class","btn btn-success");
    addTodoBtn.setAttribute("onClick","saveTodo()");
    input.value=e.parentNode.childNodes[0].nodeValue;
}
function saveTodo(){
    var editedTodo=input.value;
    editItem.parentNode.childNodes[0].nodeValue=editedTodo;
    addTodoBtn.innerHTML="ADD TOdo!";
    addTodoBtn.setAttribute("class","btn btn-success");
    addTodoBtn.setAttribute("onClick","add()");
    input.value="";
    editItem=undefined;
    input.focus();
    
}
