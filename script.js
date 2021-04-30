let option ={
    animation : true,
    delay :3000,
};

let toastShow=()=>{
    let toast=document.querySelector("#toast");
    let toastElement=new bootstrap.Toast( toast, option );
    toastElement.show();
};
let toastError=()=>{
    let toast=document.querySelector("#toastError");
    let toastElement=new bootstrap.Toast( toast, option );
    toastElement.show();
};

//Add new task todo list 
function getTask(){
    let task = document.querySelector("#task").value
        if(task){
        let ulDom=document.querySelector("#list")
        let li=document.createElement("li")
        li.innerHTML= `${task} <span class="close">X</span>`
        ulDom.append(li)
        toastShow()
        localStorage.setItem(`${task}`,JSON.stringify(`${task}`))
        document.querySelector("#task").value="";
       }else{
           toastError();
       }
}

// Function for delete item from list 
let deleteItem=()=>{
    let remove=document.querySelectorAll("ul span");
        for(let i=0;i<remove.length;i++){
        remove[i].addEventListener("click",()=>{
            remove[i].parentElement.style.display ="none";
        })
    }
}
//Call the function to delete existing items 
deleteItem()

//Remove task from todo list
let button=document.querySelector("#submit")   
    button.addEventListener("click",()=>{
        deleteItem()
        })

//Function to add "checked" class to items
let checked=()=>{
    let items=document.querySelectorAll("ul li");
    for(let i=0;i<items.length;i++){
        items[i].addEventListener("click",()=>{
            items[i].classList.add("checked");
        })
    }
} 
//Call the function to mark existing items 
checked();

//Mark items when clicked
button.addEventListener("click",()=>{
       checked()
        })