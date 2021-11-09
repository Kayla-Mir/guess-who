console.log('Here are all the available people:', people);

$(document).ready(onReady);

let randomPerson;

function onReady(){
    renderPictures(people);
    renderPersonsName(people);
    $('img').on('click', alertUser);
}

function renderPictures(arrayPeople) {
    for (let person of arrayPeople){
        $('body').append(`
        <div class="appended-img"> 
            <img data-id="${person.githubUsername}" src="https://github.com/${person.githubUsername}.png?size=140">
        </div>
        `);
    }
    
}

function alertUser() {
    if (randomPerson === $(this).data().id) {
        alert('Good Job!');
        location.reload();
    } else if (randomPerson != $(this).data().id) {
        alert('Try Again!');
    } else {
        console.log('what'); 
    }
}

function randomNumber(min, max) {
    min = 0;
    max = people.length - 1;
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function renderPersonsName(arrayPeople) {
    const randomIndex = randomNumber();
    $('#random-person').append(`${arrayPeople[randomIndex].name}`);
    randomPerson = arrayPeople[randomIndex].githubUsername;
}