let overallStress = 0;
let questionValue = 0;
let width = 0;


let questions = [
    'Have you eaten in the last three hours?',
    'Have you showered in the past day?',
    'Have you stretched your legs in the past day?',
    'Have you said something nice to someone in the past day?',
    'Have you moved your body to music in the past day?',
    'Have you cuddled a living being in the past two days?',
    'Have you seen a therapist in the past few days?',
    'Have you changed any of your medications in the past couple of weeks, including skipped doses or a change in generic prescription brand?',
    'If daytime, are you dressed?',
    'If nighttime: are you sleepy and fatigued but resisting going to sleep?',
    'Do you feel ineffective?',
    'Do you feel unattractive?',
    'Do you feel paralyzed by indecision?',
    'Have you over-exerted yourself lately- physically, emotionally, socially, or intellectually?',
    'Have you waited a week?'
];


function nextQuestion(answerValue) {
    let questionText = document.getElementById('questionText');
    let question = document.getElementById('question');
    let progress = document.getElementById('progressFill');

    overallStress += answerValue;
    questionValue++;
    width += 7;
    progress.style.width = width + '%';
    question.classList.add('fade-out-bottom');
    setTimeout(next, 100)
    function next() {
        if (questionValue >= questions.length) {
            results();
        }
        else {
            questionText.textContent = questions[questionValue - 1];
            question.classList.remove('fade-out-bottom')
        }
    }
}

function results() {
    let input = document.getElementsByTagName('input');
    let color = document.getElementById('colorText');
    let progress = document.getElementById('progressFill');

    progress.textContent = 'Done!';
    questionText.textContent = 'Your Stress Score is' + ' ' + overallStress;
    progress.style.width = '100%';
    for (y = 0; y < input.length; y++) {
        input[y].classList.add('d-none');
    }
    question.classList.remove('fade-out-bottom')
    document.getElementById('stressBar').classList.remove('d-none')
    document.getElementById('recommendDiv').classList.remove('d-none');
    switch (overallStress) {
        case 0:
        case 0.5:
        case 1:
        case 1.5:
        case 2:
            color.textContent = 'Violet';
            color.style.color = 'violet';
            break;
        case 2.5:
        case 3:
        case 3.5:
            color.textContent = 'Indigo';
            color.style.color = 'indigo';
            break;
        case 4:
        case 4.5:
        case 5:
        case 5.5:
        case 6:
            color.textContent = 'Blue';
            color.style.color = 'blue';
            break;
        case 6.5:
        case 7:
        case 7.5:
        case 8:
        case 8.5:
        case 9:
            color.textContent = 'Green';
            color.style.color = 'green';
            break;
        case 9.5:
        case 10:
        case 10.5:
        case 11:
            color.textContent = 'Yellow';
            color.style.color = 'yellow';
            break;
        case 11.5:
        case 12:
        case 12.5:
        case 13:
        case 13.5:
            color.textContent = 'Orange';
            color.style.color = 'orange';
            break;
        case 14:
        case 14.5:
        case 15:
            color.textContent = 'Red';
            color.style.color = 'red';
            break;
    }
    overallStress /= 15
    overallStress *= 100
    document.getElementById('indicator').style.width = overallStress + '%'
}
function suggestResource(resourceChoice){
    document.getElementById('resource1').innerText=resourceChoice;
}

fetch('http://localhost:8081/resources')
    .then(function (response) {
       return (response.text())
    })
    .then(function(resourceChoice){
        suggestResource(resourceChoice)
    })
