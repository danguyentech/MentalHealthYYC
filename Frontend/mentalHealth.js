let overallStress= 0
let questions=[
    'I am worried that I can’t keep my family safe from the virus',
    'I am worried that our health-care system won’t be able to protect my loved ones',
    'I am worried our health-care system is unable to keep me safe from the virus',
    'I am worried that basic hygiene (e.g., handwashing) is not enough to keep me safe from the virus',
    'I am worried that social distancing is not enough to keep me safe from the virus',
    'I am worried about grocery stores running out of food',
    'I am worried that grocery stores will close down',
    'I am worried about grocery stores running out of cleaning or disinfectant supplies',
    'I am worried about grocery stores running out of cold or flu remedies',
    'I am worried about grocery stores running out of water',
    'I am worried about pharmacies running out of prescription medicines',
    'I am worried that foreigners are spreading the virus in my country',
    'If I went to a restaurant that specialized in foreign foods, I’d be worried about catching the virus',
    'I am worried about coming into contact with foreigners because they might have the virus',
    'If I met a person from a foreign country, I’d be worried that they might have the virus',
    'If I was in an elevator with a group of foreigners, I’d be worried that they’re infected with the virus',
    'I am worried that foreigners are spreading the virus because they’re not as clean as we are',
    'I am worried that if I touched something in a public space (e.g., handrail, door handle), I would catch the virus',
    'I am worried that if someone coughed or sneezed near me, I would catch the virus',
    'I am worried that people around me will infect me with the virus',
    'I am worried about taking change in cash transactions',
    'I am worried that I might catch the virus from handling money or using a debit machine',
    'I am worried that my mail has been contaminated by mail handler'
]
let questionValue=0

function nextQuestion(answerValue){
    let question= document.getElementById('question')
    overallStress += answerValue;
    questionValue++;
    question.style.animation= 'fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';  
    setTimeout(next, 100)
    function next(){
        document.getElementById('questionText').textContent= questions[questionValue-1];
        question.style.animation= 'fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both'
    }
}
