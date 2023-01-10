const questions = document.getElementsByClassName('question-wrapper'); //get elementS!!! by classname returns an array of all elements with that class
const question = document.getElementsByClassName('question');
const answer = document.getElementsByClassName('answer');
const arrow = document.getElementsByClassName('arrow');

for (let i = 0; i < questions.length; i++){

    questions[i].addEventListener('click', () => {
        //console.log(answer[i].innerHTML); - test
        if(answer[i].className === 'answer collapsed'){
            answer[i].classList.remove('collapsed');
            answer[i].classList.add('expanded');
            arrow[i].classList.add('up');
            question[i].classList.add('active');
            console.log(answer[i].className);
        } else {
            answer[i].classList.remove('expanded');
            answer[i].classList.add('collapsed');
            arrow[i].classList.remove('up');
            question[i].classList.remove('active');
            console.log(answer[i].className);
        }
    })

};
/*
 if (answer.classList = 'answer expanded'){
            answer[i].classList.remove('expanded');
            answer[i].classList.add('collapsed');
    }
 */