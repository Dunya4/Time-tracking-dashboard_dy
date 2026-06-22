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
    workHours.textContent = data[0].timeframes[active].current + "hrs";
    workLast.textContent = "Last week" + " - " + data[0].timeframes[active].previous + "hrs";
    playHours.textContent =  data[1].timeframes[active].current +"hrs";
    playLast.textContent = "Last week" + " - "+ data[1].timeframes[active].previous +"hrs";
    studyHours.textContent = data[2].timeframes[active].current +"hrs";
    studyLast.textContent = "Last week" + " - " + data[2].timeframes[active].previous+"hrs";
    exerciseHours.textContent = data[3].timeframes[active].current +"hrs";
    exerciseLast.textContent = "Last week" + " - " + data[3].timeframes[active].previous +"hrs";
    socialHours.textContent = data[4].timeframes[active].current +"hrs";
    socialLast.textContent = "Last week" + " - " + data[4].timeframes[active].previous +"hrs";
    selfcaresHours.textContent = data[5].timeframes[active].current +"hrs";
    selfcaresLast.textContent = "Last week" + " - " + data[5].timeframes[active].previous +"hrs";

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