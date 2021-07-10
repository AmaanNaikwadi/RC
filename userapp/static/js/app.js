let countTime = parseInt(document.getElementById("countTime").value);
let special = document.getElementById("special");
let score = parseInt(document.getElementById("user_score").value);
let extra_time = parseInt(document.getElementById("extra_time_offered").value);

const startTimer = (duration, special) => {
  let element = special;
  let timer = duration;
  let minutes = 0;
  let seconds = 0;
  let handle = setInterval(() => {
    timer--;
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    if (timer <= 0) {
        if (score >= 12) {
            if (extra_time == 0) {
                document.getElementById('openModal').click();
                clearInterval(handle);
            }
            else {
                window.location.href = "/logout";
            }
        } else {
          window.location.href = "/logout";
        }
    } else {
      element.innerHTML = `${minutes} : ${seconds}`;
    }
  }, 1000);
}


startTimer(countTime, special);

var qContainer = document.getElementById('question-container');

var alertHot = document.getElementById('alert1');
function displayAlert() {
  alertHot.classList.remove('d-none');
  alertHot.classList.add('mt-5');
  qContainer.classList.remove('mt-5');
  // setTimeout(function () {
  //     alertHot.classList.toggle('d-none');
  //     alertHot.classList.toggle('mt-5');
  //     qContainer.classList.toggle('mt-5');
  // }, 3000);
}

var alertVision = document.getElementById('alert2');
function displayAlert2() {
  alertVision.classList.remove('d-none');
  alertVision.classList.add('mt-5');
  qContainer.classList.remove('mt-5');
  // setTimeout(function () {
  //     alertVision.classList.toggle('d-none');
  //     alertVision.classList.toggle('mt-5');
  //     qContainer.classList.toggle('mt-5');
  // }, 3000);
}



// enable attempt2 on submit