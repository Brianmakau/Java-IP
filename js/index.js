var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
//create a array denoting the different days of the week
var day = ["0", "1", "2", "3", "4", "5", "6"];
//create a function to extract date, month and year from entered dates of birth week
function newDate = new Date(dob){
  var month = newDate.getMonth()+1
  var date = newDate.getdate()
  var year = newDate.getFullYear()
  console.log(month+"-"+date+"-"+year)
}
//calculate day of the week using formula
  //We first need to adjust the months to fit working using Zeller's Algorithhm
  if (month===1||month===2)
