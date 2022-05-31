const prevbButton = document.querySelectorAll('.btn-prev'); 
const nextButton = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

nextButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    })
});

prevbButton.forEach((btn) => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    })
});

function updateFormSteps(){
    formSteps.forEach((formStep) => {
        //removes the prv step
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
}

//activate progress step
function updateProgressbar(){
    progressSteps.forEach((progressSteps, idx) => {
        if(idx < formStepsNum +1) {
            progressSteps.classList.add('progress-step-active')
        } else {
            progressSteps.classList.remove('progress-step-active')
        }
    });

    const progressActive = document.querySelectorAll('.progress-step-active');

    // progress line logic
    progress.style.width = ((progressActive.length -1) / (progressSteps.length -1)) * 100 + '%';
    }
