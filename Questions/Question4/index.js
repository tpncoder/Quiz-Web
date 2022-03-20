var next = document.getElementById("next")
var question = document.getElementById("question")
var option_1 = document.getElementById("option1")
var option_2 = document.getElementById("option2")
var option_3 = document.getElementById("option3")
var option_4 = document.getElementById("option4")

option_1.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "green"
  option_3.style.backgroundColor = "red"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
}

option_2.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "green"
  option_3.style.backgroundColor = "red"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
}

option_3.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "green"
  option_3.style.backgroundColor = "red"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
}

option_4.onclick = function(){
  option_1.style.backgroundColor = "red"
  option_2.style.backgroundColor = "green"
  option_3.style.backgroundColor = "red"
  option_4.style.backgroundColor = "red"
  document.getElementById("next").style.display = "inline-block"
  document.getElementById("centerquiz").style.display = "inline-block"
}
