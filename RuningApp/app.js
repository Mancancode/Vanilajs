const goal = 100 ;
let entries = [];
const entriesWrapper = document.querySelector('#entries');
document.querySelector('#target').innerText = goal;

function addNewEntry(newEntry){
    entriesWrapper.removeChild(entriesWrapper.firstElementChild);
    const listItem = document.createElement('li');
    const listValue = document.createTextNode(newEntry.toFixed(1));
    listItem.appendChild(listValue);  

    entriesWrapper.appendChild(listItem);

}

function reducer(total, currentValue){
    return total + currentValue;

} 


function calcTotal(){
   const totalValue = entries.reduce(reducer).toFixed(1);
   document.getElementById('total').innerText = totalValue;
   document.getElementById('progressTotal').innerText = totalValue;
   
}

function calcAverage(){
    const average = (entries.reduce(reducer) /  entries.length).toFixed(1);
    document.getElementById('average').innerText = average;
    
 }

 function weeklyScore(){
    const score = Math.max(...entries); //spread oprator 
    document.getElementById('score').innerText = score;
 }

 function calcGoal(){
     const totalValue = entries.reduce(reducer).toFixed(1);
     const completedPersent = totalValue / (goal / 100);
     const progressCircle = document.querySelector('#progressCircle');
     if (completedPersent > 100) completedPersent === 100;
     progressCircle.style.background = `conic-gradient(#70db70 ${completedPersent}%, #f07237 ${completedPersent}% 100%)`;

 }

function handleSubmit(event) {
    //preventDefaul helps detect is no number was added
    event.preventDefault();
    const entry = Number(document.querySelector('#entry').value);
    if(!entry) return;
    document.querySelector('form').reset();
    //push methos help us push values to the end
    entries.push(entry);
    addNewEntry(entry);
    calcTotal();
    calcAverage();
    weeklyScore();
    calcGoal();
}
const form = document.querySelector('form')
.addEventListener('submit', handleSubmit);