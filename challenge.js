let minutesLabel = document.getElementById("minutes");
let secondsLabel = document.getElementById("seconds");
let likesLabel = document.getElementById("<3");
let totalSeconds = 0;
let totalLikes = 0 ;

const pad = (val) => {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

const setTime = () => {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

const incrementTime = () => {
  totalSeconds++
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

const decrementTime = () => {
  totalSeconds--
  secondsLabel.innerHTML = pad(totalSeconds % 60);
}

let minus = document.getElementById("-").addEventListener('click', decrementTime)
let add = document.getElementById("+").addEventListener('click', incrementTime)

const pauseTime = () => {
  let buttonTitle = document.getElementById("pause")
  secondsLabel.innerHTML = totalSeconds
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  if (buttonTitle.innerHTML === "pause") {
    buttonTitle.innerHTML = "resume"
    clearInterval(intervalID)
  } else if (buttonTitle.innerHTML === "resume") {
    intervalID = setInterval(setTime, 1000)
    buttonTitle.innerHTML = "pause"
  }

}

let pause = document.getElementById("pause").addEventListener('click', pauseTime)
let intervalID = setInterval(setTime, 1000);

const likeCounter = () => {
  let buttonTitle = document.getElementById("<3")
  likesLabel.innerHTML = totalLikes
  totalLikes++
}
let like = document.getElementById("likes").addEventListener('click', likeCounter)
