const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
inputEl.addEventListener("input", switcher);
function switcher(event){
    
    if(event.currentTarget.value.trim()){
        outputEl.textContent = event.currentTarget.value.trim();
       
    } else{
        outputEl.textContent ="Anonymous";
    }
    
};


