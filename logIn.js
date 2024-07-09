let checkPassword = document.getElementById("checkPassword");
let checkPasswordLog = document.getElementById("checkPasswordLog");
let passwordSin = document.getElementById("passwordSin");
let passwordLog = document.getElementById("passwordLog");

checkPasswordLog.onclick = function() {
  if (checkPasswordLog.checked) {
    passwordLog.type = "text";
  } else {
    passwordLog.type = "password";
  }
}

checkPassword.onclick = function() {
  if (checkPassword.checked) {
    passwordSin.type = "text";
  } else {
    passwordSin.type = "password";
  }
}
let sinLog = document.getElementById("sinLog");
let logSin = document.getElementById("logSin");
let log = document.querySelector(".log");
let sin = document.querySelector(".sin");
sinLog.onclick  = function () {
  sin.style = `display:none;`
  log.style = `display:flex;`
}
logSin.onclick  = function () {
  log.style = `display:none;`
  sin.style = `display:flex;`
}

//[sinUpName,sinUpEmail,dateYearSin,dateMontheSin,dateDaySin,passwordSin]

// sin  up 
let sinUpBtn = document.getElementById("sinUpBtn");

let sinUpEmail = document.getElementById("sinUpEmail");
let sinUpName = document.getElementById("sinUpName");
let dateYearSin = document.getElementById("dateYearSin");
let dateMontheSin = document.getElementById("dateMontheSin");
let dateDaySin = document.getElementById("dateDaySin");

let users = JSON.parse(localStorage.getItem("usersv")) || [];
function sinUp() {
  if (
    sinUpName.value.trim() !== "" &&
    sinUpEmail.value.trim() !== "" &&
    dateYearSin.value.trim() !== "" &&
    dateMontheSin.value.trim() !== "" &&
    dateDaySin.value.trim() !== "" &&
    passwordSin.value.trim() !== ""
  )
  {
    // الحصول على التاريخ الحالي
    let dateSinUpAll = new Date();
    let dateYear = dateSinUpAll.getFullYear();
    let dateMonth = dateSinUpAll.getMonth() + 1; // الأشهر تبدأ من 0 لذلك نضيف 1
    let dateDay = dateSinUpAll.getDate();

    // حساب العمر
    let inputYear = parseInt(dateYearSin.value);
    let inputMonth = parseInt(dateMontheSin.value);
    let inputDay = parseInt(dateDaySin.value);

    let age = dateYear - inputYear;
    if (dateMonth < inputMonth || (dateMonth === inputMonth && dateDay < inputDay)) {
      age--;
    }

    // التحقق من العمر
    if (age >= 10 && age <= 500) {
      let foundUser = false;
      for (var i = 0; i < users.length; i++) {
        if (sinUpName.value.trim() === users[i].name  || sinUpEmail.value.trim() === users[i].phone) {
          foundUser = true;
          alertt("Sorry, this user already exists ","red")
        }
      }
      if (foundUser == false) {
              let user = {
        name: sinUpName.value.trim(),
        phone: sinUpEmail.value.trim(),
        password: passwordSin.value.trim(),
      }
      users.push(user);

      console.log(users)
      localStorage.setItem("usersv", JSON.stringify(users));
      nameInput = sinUpName.value.trim();
      clearInluts();
      showApp();
     alertt("An account has been created","#31FF4B")
      }
    } else {
      alertt("sorry "+sinUpName.value.trim() +". You can't enter to fusion. Because you are young. ","red")
    }
  } else {
    alertt("ااملا جميع الحقول","red");  }
}
function clearInluts() {
  sinUpName.value = "" ;
  sinUpEmail.value = "" ;
  dateYearSin.value = "" ;
  dateMontheSin.value = "" ; 
  dateDaySin.value = "" ;
  passwordSin.value = "";
}
function showApp() {
  document.querySelector(".login").style = `display:none `;
  document.querySelector(".navbar").style= `display:flex `;
}
let nameLog = document.getElementById("nameLog")
function login() {
  if (passwordLog.value.trim().toLocaleLowerCase() !== "" && nameLog.value.trim().toLocaleLowerCase() !== "") {
    
  
 let userLogin = false;
 let lantheUser ;
 for (var i = 0; i < users.length; i++) {
   if (passwordLog.value.trim().toLocaleLowerCase() === users[i].password.toLocaleLowerCase()  && nameLog.value.trim().toLocaleLowerCase() === users[i].phone.toLocaleLowerCase()) {
     userLogin = true;
     nameInput = users[i].name;
   }
   else if(passwordLog.value.trim().toLocaleLowerCase() !== users[i].password.toLocaleLowerCase()  && nameLog.value.trim().toLocaleLowerCase() 
   !== users[i].phone.toLocaleLowerCase()){
     alertt("The password and (email or phone number) are incorrect","red")
   }
   else if (nameLog.value.trim().toLocaleLowerCase() !==
  users[i].phone.toLocaleLowerCase()) {
     alertt("Invalid email or phone number","red")
   }
   else if(passwordLog.value.trim().toLocaleLowerCase() !==
  users[i].phone.toLocaleLowerCase()){
    alertt("Password error","red")
   }
 }
 if (userLogin == true) {
   alertt("You are logged in","#31FF4B")
   showApp()
 }
 }
  else if(passwordLog.value.trim().toLocaleLowerCase() === "" && nameLog.value.trim().toLocaleLowerCase() === "") {
   alertt("Fill in the field (email or phone number) and password","red");
 }
 else if (nameLog.value.trim().toLocaleLowerCase() === "") {
  alertt("Fill in the field (email or phone number)", "red");
}
else if (passwordLog.value.trim().toLocaleLowerCase() === "") {
  alertt("Fill in the field password", "red");
}
}