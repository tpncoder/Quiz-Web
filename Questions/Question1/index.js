var next = document.getElementById("next")
var option_1 = document.getElementById("option1")
var option_2 = document.getElementById("option2")
var option_3 = document.getElementById("option3")
var option_4 = document.getElementById("option4")
var score = 0;
var explain = document.getElementById("centerquiz")

option_1.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "red"
  option_3.style.backgroundColor = "green"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
  score = 0
  console.log({score})
}

option_2.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "red"
  option_3.style.backgroundColor = "green"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
  score = 0
  console.log({score})
}

option_3.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "red"
  option_3.style.backgroundColor = "green"
  option_4.style.backgroundColor = "red"
  score = score + 10
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
  console.log({score})
}

option_4.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "red"
  option_3.style.backgroundColor = "green"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
  score = 0
  console.log({score})
}

