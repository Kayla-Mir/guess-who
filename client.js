console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    renderPictures(people);
    renderPersonsName();
    $('.test').on('click', alertUser);
}

function renderPictures(arrayPeople) {
    for (let person of arrayPeople){
        $('body').append(`
        <div class="test"> 
            <img data-id="${person.name}" src="https://github.com/${person.githubUsername}.png?size=140">
        </div>
        `);
    }
    
}

function alertUser() {
    alert('nice');
}

function randomNumber(min, max) {
    min = 0;
    max = people.length - 1;
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function renderPersonsName() {
    $('#random-person').append(`${people[randomNumber()].name}`)
}