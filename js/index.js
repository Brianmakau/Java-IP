var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

//create a array denoting the different days of the week
var day = ["0", "1", "2", "3", "4", "5", "6"];

//create a function to extract date, month and year from entered dates of birth
function submitStaff(){
  var date=new Date(form.birthday.value)
  var day=date.getDay()
  var result
  var gender=form.gender.value
  if(gender=="male"){
    result=maleNames[day]
  }
  else if(gender=="female"){
    result=femaleNames[day]
  }
  document.getElementById("result").innerHTML=result
}

