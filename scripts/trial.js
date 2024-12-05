let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
let dailyBtnMob = document.getElementById("dailyBtnMob");
let weeklyBtnMob = document.getElementById("weeklyBtnMob");
let monthlyBtnMob = document.getElementById("monthlyBtnMob");
let exportData = [];

async function getAllData() {
  const promise = await fetch("../data.json");
  const data = await promise.json();
  exportData = data
  console.log(exportData)
  dailyBtn.className = "text-white";
  weeklyBtn.className = "";
  monthlyBtn.className = "";
  dailyBtnMob.className = "text-white";
  weeklyBtnMob.className = "";
  monthlyBtnMob.className = "";
  currentWorkhrs.innerText = exportData[0].timeframes.daily.current;
  previousWorkhrs.innerText = exportData[0].timeframes.daily.previous;
  currentPlayhrs.innerText = exportData[1].timeframes.daily.current;
  previousPlayhrs.innerText = exportData[1].timeframes.daily.previous;
  currentStudyhrs.innerText = exportData[2].timeframes.daily.current;
  previousStudyhrs.innerText = exportData[2].timeframes.daily.previous;
  currentExerhrs.innerText = exportData[3].timeframes.daily.current;
  previousExerhrs.innerText = exportData[3].timeframes.daily.previous;
  currentSocialhrs.innerText = exportData[4].timeframes.daily.current;
  previousSocialhrs.innerText = exportData[4].timeframes.daily.previous;
  currentCarehrs.innerText = exportData[5].timeframes.daily.current;
  previousCarehrs.innerText = exportData[5].timeframes.daily.previous;
}

getAllData();

function dailyClick() {
 
  currentWorkhrs.innerText = exportData[0].timeframes.daily.current;
  previousWorkhrs.innerText = exportData[0].timeframes.daily.previous;
  currentPlayhrs.innerText = exportData[1].timeframes.daily.current;
  previousPlayhrs.innerText = exportData[1].timeframes.daily.previous;
  currentStudyhrs.innerText = exportData[2].timeframes.daily.current;
  previousStudyhrs.innerText = exportData[2].timeframes.daily.previous;
  currentExerhrs.innerText = exportData[3].timeframes.daily.current;
  previousExerhrs.innerText = exportData[3].timeframes.daily.previous;
  currentSocialhrs.innerText = exportData[4].timeframes.daily.current;
  previousSocialhrs.innerText = exportData[4].timeframes.daily.previous;
  currentCarehrs.innerText = exportData[5].timeframes.daily.current;
  previousCarehrs.innerText = exportData[5].timeframes.daily.previous;
}

function monthlyClick(){
  
  currentWorkhrs.innerText = exportData[0].timeframes.monthly.current;
  previousWorkhrs.innerText = exportData[0].timeframes.monthly.previous;
  currentPlayhrs.innerText = exportData[1].timeframes.monthly.current;
  previousPlayhrs.innerText = exportData[1].timeframes.monthly.previous;
  currentStudyhrs.innerText = exportData[2].timeframes.monthly.current;
  previousStudyhrs.innerText = exportData[2].timeframes.monthly.previous;
  currentExerhrs.innerText = exportData[3].timeframes.monthly.current;
  previousExerhrs.innerText = exportData[3].timeframes.monthly.previous;
  currentSocialhrs.innerText = exportData[4].timeframes.monthly.current;
  previousSocialhrs.innerText = exportData[4].timeframes.monthly.previous;
  currentCarehrs.innerText = exportData[5].timeframes.monthly.current;
  previousCarehrs.innerText = exportData[5].timeframes.monthly.previous;
}

function weeklyClick(){
 
  currentWorkhrs.innerText = exportData[0].timeframes.weekly.current;
  previousWorkhrs.innerText = exportData[0].timeframes.weekly.previous;
  currentPlayhrs.innerText = exportData[1].timeframes.weekly.current;
  previousPlayhrs.innerText = exportData[1].timeframes.weekly.previous;
  currentStudyhrs.innerText = exportData[2].timeframes.weekly.current;
  previousStudyhrs.innerText = exportData[2].timeframes.weekly.previous;
  currentExerhrs.innerText = exportData[3].timeframes.weekly.current;
  previousExerhrs.innerText = exportData[3].timeframes.weekly.previous;
  currentSocialhrs.innerText = exportData[4].timeframes.weekly.current;
  previousSocialhrs.innerText = exportData[4].timeframes.weekly.previous;
  currentCarehrs.innerText = exportData[5].timeframes.weekly.current;
  previousCarehrs.innerText = exportData[5].timeframes.weekly.previous;
}

dailyBtn.addEventListener('click', function(){
 dailyBtn.className = "text-white";
  weeklyBtn.className = "";
  monthlyBtn.className = "";
    dailyClick();
})

monthlyBtn.addEventListener('click', function(){
dailyBtn.className = "";
  weeklyBtn.className = "";
  monthlyBtn.className = "text-white";
    monthlyClick();
})

weeklyBtn.addEventListener('click', function(){
 dailyBtn.className = "";
  weeklyBtn.className = "text-white";
  monthlyBtn.className = "";
    weeklyClick();
})
dailyBtnMob.addEventListener('click', function(){
  dailyBtnMob.className = "text-white";
  weeklyBtnMob.className = "";
  monthlyBtnMob.className = "";
    dailyClick();
})

monthlyBtnMob.addEventListener('click', function(){
  dailyBtnMob.className = "";
  weeklyBtnMob.className = "";
  monthlyBtnMob.className = "text-white";
    monthlyClick();
})

weeklyBtnMob.addEventListener('click', function(){
  dailyBtnMob.className = "";
  weeklyBtnMob.className = "text-white";
  monthlyBtnMob.className = "";
    weeklyClick();
})