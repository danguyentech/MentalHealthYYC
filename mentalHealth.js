function nextQuestion(current, next){
    document.getElementById(current).style.animation= 'fade-out-bottom 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both';  
    setTimeout(flex, 100)
    function flex(){
        document.getElementById(current).className -=" d-flex";
        document.getElementById(current).className +=" d-none";
        document.getElementById(next).className +=" d-flex"; 
    }
}