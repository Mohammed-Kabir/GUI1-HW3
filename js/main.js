/*

NAME: Mohammed Kabir.
File Description: This file perform the calculation for the table based on the user
input. It checked for the valid input as well.
*/



/* 
This function checks for the valid user input
*/
function InputValidator() {

    validatorOfForm("horizontal_start");
    validatorOfForm("horizontal_end");
    validatorOfForm("vertical_start");
    validatorOfForm("vertical_end");

    if (validatorOfForm("horizontal_start") && validatorOfForm("horizontal_end") && validatorOfForm("vertical_start") && validatorOfForm("vertical_end")) {
        document.getElementById("submitValidation").innerText = "";
        return tableDisplayer();
    } else {
        document.getElementById("submitValidation").innerText = "enter a valid number";
    }
}

(function() {
  "use strict";
  window.addEventListener(
      "load",
      function() {
          let pageFrm = document.getElementsByClassName("needs-validation");
          let valid = Array.prototype.filter.call(pageFrm, function(form) {
              form.addEventListener(
                  "submit",
                  function(event) {
                      if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                      }
                      form.classList.add("was-validated");
                  },
                  false
              );
          });
      },
      false
  );
})();


/*this function check for the form formats and validate it*/
function validatorOfForm(e) {
    let x = document.getElementById(e);
    let val = x.value;

   if(val.length < 1 || val.indexOf(" ") > -1){
       x.classList.remove("is-valid");
       x.classList.add("is-invalid");
       return false;
   }

  if (isNaN(val) || val > 50 || val < -50) {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      return false;
  } else if (val !== " ") {

    console.log(val);
    x.classList.add("is-valid");
    x.classList.remove("is-invalid");
    return true;
    }
}

/*This function do the calculation for the webpage table based on the user input*/
function tableDisplayer() {
    let horizontal_start = document.getElementById("horizontal_start").value;
    let horizontal_end = document.getElementById("horizontal_end").value;
    
    let vertical_start = document.getElementById("vertical_start").value;
    let vertical_end = document.getElementById("vertical_end").value;

    let largest_horiz = Math.max(horizontal_start, horizontal_end);
    let smallest_horiz = Math.min(horizontal_start, horizontal_end);

    let largest_vrtcl = Math.max(vertical_start, vertical_end);
    let smallestVrtcl = Math.min(vertical_start, vertical_end);

    if( largest_horiz > 20 || largest_vrtcl > 20){
        document.getElementById("tooMany").innerText = "scroll left and right"
  }

    let horizArray = [];
    let vartclArray = [];

    let clear = document.getElementsByTagName("tr");
    for (let i = 0; i < clear.length; i++) {
        clear[i].innerHTML = "";
  }

  let tableHeader = document.getElementById("topRow");
  let x = tableHeader.insertCell();

  for (let i = smallest_horiz; i <= largest_horiz; i++) {
      horizArray.push(i);
      x = tableHeader.insertCell();
      x.innerHTML = i;
  }

  let row = document.getElementById("row");

  for (let i = smallestVrtcl; i <= largest_vrtcl; i++) {
    vartclArray.push(i);
  }

  for (let i = 0; i < vartclArray.length; i++) {
      let firstRow = row.insertRow();
      let elemnt = firstRow.insertCell();
      elemnt.innerHTML = vartclArray[i];

for (let j = 0; j < horizArray.length; j++) {
    let value = vartclArray[i] * horizArray[j];
    elemnt = firstRow.insertCell();
    elemnt.innerHTML = value;
    }
  }
}
