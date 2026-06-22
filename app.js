let data;
let active = "daily";

fetch("data.json")
.then(response => response.json())
.then(json => {
    console.log(json);
    data = json;
    update();
})

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

dailyBtn.addEventListener("click", function(){
    active = "daily";
    update();
})

weeklyBtn.addEventListener("click", function(){
    active = "weekly";
    update();
})

monthlyBtn.addEventListener("click", function(){
    active = "monthly";
    update();
})

const workHours = document.getElementById("work_hours");
const workLast = document.getElementById("work_last-week");
const playHours = document.getElementById("play_hours");
const playLast = document.getElementById("play_last-week");
const studyHours = document.getElementById("study_hours");
const studyLast = document.getElementById("study_last-week");
const exerciseHours = document.getElementById("exercise_hours");
const exerciseLast = document.getElementById("exercise_last-week");
const socialHours = document.getElementById("social_hours");
const socialLast = document.getElementById("social_last-week");
const selfcaresHours = document.getElementById("selfcares_hours");
const selfcaresLast = document.getElementById("selfcares_last-week");

function update(){
    let timeText = "hrs";
    workHours.textContent = data[0].timeframes[active].current;
    workLast.textContent = data[0].timeframes[active].previous;
    playHours.textContent = data[1].timeframes[active].current;
    playLast.textContent = data[1].timeframes[active].previous;
    studyHours.textContent = data[2].timeframes[active].current;
    studyLast.textContent = data[2].timeframes[active].previous;
    exerciseHours.textContent = data[3].timeframes[active].current;
    exerciseLast.textContent = data[3].timeframes[active].previous;
    socialHours.textContent = data[4].timeframes[active].current;
    socialLast.textContent = data[4].timeframes[active].previous;
    selfcaresHours.textContent = data[5].timeframes[active].current;
    selfcaresLast.textContent = data[5].timeframes[active].previous;

    switch(active){
        case "daily" :
            dailyBtn.classList.add("active");
            weeklyBtn.classList.remove("active");
            monthlyBtn.classList.remove("active");
            break;
        case "weekly":
            dailyBtn.classList.remove("active");
            weeklyBtn.classList.add("active");
            monthlyBtn.classList.remove("active");
            break;
        case "monthly":
            dailyBtn.classList.remove("active");
            weeklyBtn.classList.remove("active");
            monthlyBtn.classList.add("active");
            break;   
    }
}