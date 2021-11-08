console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    renderPictures(people);
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

function renderPersonsName(min, max) {
    let min = 0;
    let max = people.length;
    return Math.floor(Math.random() * (1 + max - min) + min);
}