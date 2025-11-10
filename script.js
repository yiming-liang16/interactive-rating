const buttons = document.querySelectorAll(".ratingBtn");
const submitBtn = document.getElementById("submitBtn");
const ratingContainer = document.getElementById("step1");
const thankyouContainer = document.getElementById("step2");
let selectedRating = null;
const resultText = document.getElementById("resultText");

buttons.forEach(btn => {
    btn.addEventListener('click',() => {
    buttons.forEach(b => {
    b.classList.remove('active');
    b.style.backgroundColor="";
    b.style.color="";
    });
    btn.classList.add('active');
    btn.style.backgroundColor = "orange";
    btn.style.color = "hsl(213, 19%, 18%)";
    selectedRating = btn.textContent;
    });
});


submitBtn.addEventListener('click',() => {
    if(selectedRating===null) {
        alert("Please select a rating");
        return;
    }
    ratingContainer.style.display="none";
    thankyouContainer.style.display="flex";
    resultText.textContent = `You selected ${selectedRating} out of 5`;
});