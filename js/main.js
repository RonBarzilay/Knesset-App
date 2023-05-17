// בדיקה שכלל השדות בטופס מולאו, אחרת נקפיץ הודעת שגיאה
function isChecked() {
  // במקום לחפש
  // document.getElementById("firstName").value
  let firstName = $("#firstName");
  // במקום לחפש
  // document.getElementById("accept").checked
  let terms = $("#accept").is(":checked");
  // במקום לחפש
  // document.getElementById("lastName").value
  let lastName = $("#lastName");
  let email = $("#email");
  let gender = $("#gender");

  // שדות ריקים
  if (
    firstName.val() == "" ||
    lastName.val() == "" ||
    email.val() == "" ||
    gender.find(":selected").val() == "none"
  ) {
    alert("אנא מלא את כלל השדות");
    // ימנע את המצב הדיפולטיבי של שליחת הטופס (סבמיט) וכך לא יפתח חלון מייל
    event.preventDefault();
  } else if (terms == false) {
    alert("אנא אשר תקנון שימוש");
    // ימנע את המצב הדיפולטיבי של שליחת הטופס (סבמיט) וכך לא יפתח חלון מייל
    event.preventDefault();
  } else {
    alert("נשלח בהצלחה !");
  }
}

function checkUser() {
  // document.getElementById("email").value
  let email = $("#email").val();
  // document.getElementById("password").value
  let password = $("#password").val();

  if (email == "a@a.com" && password == "123") {
    alert("Welcome, Manager");
  } else if (email == "a@a.com" && password == "456") {
    alert("Welcome, User");
  } else {
    alert("Not a user, Try Again");
  }
}
