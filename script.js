const container = document.querySelector('.container');

function drawGrid(squareNumber){

    let squareSize = 400/squareNumber;
    for (let i=0; i<(squareNumber*squareNumber); i++){
        let newDiv = document.createElement('div');
        newDiv.className = 'square';
        newDiv.style.height = squareSize.toString() + 'px';
        newDiv.style.width = squareSize.toString() + 'px';
        container.appendChild(newDiv);
    } 

const square = document.querySelectorAll('.square');

    for(let i=0; i<square.length; i++){
        square[i].addEventListener('mouseenter',function(e){
            e.target.style.background = 'black';
        })
    }
};

function redrawGrid(){
    let squareNumber = parseInt(prompt("Enter number of squares per side. Must be 100 or less.", 16));
    if(squareNumber != NaN && squareNumber<=100){
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
        drawGrid(squareNumber);
    }else alert("Improper input, try again!")
}
drawGrid(16);

