let currentWorkhrs = document.getElementById("currentWorkhrs");
let previousWorkhrs = document.getElementById("previousWorkhrs");
let dailyBtn = document.getElementById("dailyBtn");
let weeklyBtn = document.getElementById("weeklyBtn");
let monthlyBtn = document.getElementById("monthlyBtn");
let dailyBtnMob = document.getElementById("dailyBtnMob");
let weeklyBtnMob = document.getElementById("weeklyBtnMob");
let monthlyBtnMob = document.getElementById("monthlyBtnMob");
currentHrsD = [];
previousHrsD = [];
currentHrsW = [];
previousHrsW = [];
currentHrsM = [];
previousHrsM = [];

async function getAllData() {
  const promise = await fetch('../data.json');
  const data = await promise.json();
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        currentHrsD.push(data[i].timeframes.daily.current);
        previousHrsD.push(data[i].timeframes.daily.previous);
        currentHrsW.push(data[i].timeframes.weekly.current);
        previousHrsW.push(data[i].timeframes.weekly.previous);
        currentHrsM.push(data[i].timeframes.monthly.current);
        previousHrsM.push(data[i].timeframes.monthly.previous);
      }
      dailyBtn.className = "text-white";
      dailyBtnMob.className = "text-white";
      currentWorkhrs.innerText = currentHrsD[0];
  previousWorkhrs.innerText = previousHrsD[0];
  currentPlayhrs.innerText = currentHrsD[1];
  previousPlayhrs.innerText = previousHrsD[1];
  currentStudyhrs.innerText = currentHrsD[2];
  previousStudyhrs.innerText = previousHrsD[2];
  currentExerhrs.innerText = currentHrsD[3];
  previousExerhrs.innerText = previousHrsD[3];
  currentSocialhrs.innerText = currentHrsD[4];
  previousSocialhrs.innerText = previousHrsD[4];
  currentCarehrs.innerText = currentHrsD[5];
  previousCarehrs.innerText = previousHrsD[5];
    
}

getAllData();

dailyBtn.addEventListener("click", function () {
  dailyBtn.className = "text-white";
  weeklyBtn.className = "";
  monthlyBtn.className = "";
  currentWorkhrs.innerText = currentHrsD[0];
  previousWorkhrs.innerText = previousHrsD[0];
  currentPlayhrs.innerText = currentHrsD[1];
  previousPlayhrs.innerText = previousHrsD[1];
  currentStudyhrs.innerText = currentHrsD[2];
  previousStudyhrs.innerText = previousHrsD[2];
  currentExerhrs.innerText = currentHrsD[3];
  previousExerhrs.innerText = previousHrsD[3];
  currentSocialhrs.innerText = currentHrsD[4];
  previousSocialhrs.innerText = previousHrsD[4];
  currentCarehrs.innerText = currentHrsD[5];
  previousCarehrs.innerText = previousHrsD[5];
});

weeklyBtn.addEventListener("click", function () {
  weeklyBtn.className = "text-white";
  dailyBtn.className = "";
  monthlyBtn.className = "";
  currentWorkhrs.innerText = currentHrsW[0];
  previousWorkhrs.innerText = previousHrsW[0];
  currentPlayhrs.innerText = currentHrsW[1];
  previousPlayhrs.innerText = previousHrsW[1];
  currentStudyhrs.innerText = currentHrsW[2];
  previousStudyhrs.innerText = previousHrsW[2];
  currentExerhrs.innerText = currentHrsW[3];
  previousExerhrs.innerText = previousHrsW[3];
  currentSocialhrs.innerText = currentHrsW[4];
  previousSocialhrs.innerText = previousHrsW[4];
  currentCarehrs.innerText = currentHrsW[5];
  previousCarehrs.innerText = previousHrsW[5];
});

monthlyBtn.addEventListener("click", function () {
  monthlyBtn.className = "text-white";
  dailyBtn.className = "";
  weeklyBtn.className = "";

  currentWorkhrs.innerText = currentHrsM[0];
  previousWorkhrs.innerText = previousHrsM[0];
  currentPlayhrs.innerText = currentHrsM[1];
  previousPlayhrs.innerText = previousHrsM[1];
  currentStudyhrs.innerText = currentHrsM[2];
  previousStudyhrs.innerText = previousHrsM[2];
  currentExerhrs.innerText = currentHrsM[3];
  previousExerhrs.innerText = previousHrsM[3];
  currentSocialhrs.innerText = currentHrsM[4];
  previousSocialhrs.innerText = previousHrsM[4];
  currentCarehrs.innerText = currentHrsM[5];
  previousCarehrs.innerText = previousHrsM[5];
});
//MOBILE BTNS
dailyBtnMob.addEventListener("click", function () {
  dailyBtnMob.className = "text-white";
  weeklyBtnMob.className = "";
  monthlyBtnMob.className = "";
  currentWorkhrs.innerText = currentHrsD[0];
  previousWorkhrs.innerText = previousHrsD[0];
  currentPlayhrs.innerText = currentHrsD[1];
  previousPlayhrs.innerText = previousHrsD[1];
  currentStudyhrs.innerText = currentHrsD[2];
  previousStudyhrs.innerText = previousHrsD[2];
  currentExerhrs.innerText = currentHrsD[3];
  previousExerhrs.innerText = previousHrsD[3];
  currentSocialhrs.innerText = currentHrsD[4];
  previousSocialhrs.innerText = previousHrsD[4];
  currentCarehrs.innerText = currentHrsD[5];
  previousCarehrs.innerText = previousHrsD[5];
});

weeklyBtnMob.addEventListener("click", function () {
  weeklyBtnMob.className = "text-white";
  dailyBtnMob.className = "";
  monthlyBtnMob.className = "";
  currentWorkhrs.innerText = currentHrsW[0];
  previousWorkhrs.innerText = previousHrsW[0];
  currentPlayhrs.innerText = currentHrsW[1];
  previousPlayhrs.innerText = previousHrsW[1];
  currentStudyhrs.innerText = currentHrsW[2];
  previousStudyhrs.innerText = previousHrsW[2];
  currentExerhrs.innerText = currentHrsW[3];
  previousExerhrs.innerText = previousHrsW[3];
  currentSocialhrs.innerText = currentHrsW[4];
  previousSocialhrs.innerText = previousHrsW[4];
  currentCarehrs.innerText = currentHrsW[5];
  previousCarehrs.innerText = previousHrsW[5];
});

monthlyBtnMob.addEventListener("click", function () {
  monthlyBtnMob.className = "text-white";
  dailyBtnMob.className = "";
  weeklyBtnMob.className = "";

  currentWorkhrs.innerText = currentHrsM[0];
  previousWorkhrs.innerText = previousHrsM[0];
  currentPlayhrs.innerText = currentHrsM[1];
  previousPlayhrs.innerText = previousHrsM[1];
  currentStudyhrs.innerText = currentHrsM[2];
  previousStudyhrs.innerText = previousHrsM[2];
  currentExerhrs.innerText = currentHrsM[3];
  previousExerhrs.innerText = previousHrsM[3];
  currentSocialhrs.innerText = currentHrsM[4];
  previousSocialhrs.innerText = previousHrsM[4];
  currentCarehrs.innerText = currentHrsM[5];
  previousCarehrs.innerText = previousHrsM[5];
});


