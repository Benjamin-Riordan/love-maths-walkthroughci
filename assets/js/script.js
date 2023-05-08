document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click",function() {
            if(this.getAttribute("data-type" === "submit"){
                alert("you clicked submit!");
            }else{
                let ganeType = this.getAttribute("data-type");
                alert(`you clicked ${gameType}`)
            }

        })
    }
})




function runGame(){

}

function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}

function icrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionAnswer(){
    
}

function displaySubtractAnswer(){
    
}

function displayMultiplyAnswer(){
    
}
