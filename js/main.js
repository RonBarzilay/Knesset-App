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
  } else if (terms == false) {
    alert("אנא אשר תקנון שימוש");
  } else {
    alert("");
  }
}
