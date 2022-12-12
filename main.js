function completeAndRedirect() {
    var form = document.forms['myform'];
    text.innerHTML = "Веденні вами дані: <br> Which country's cuisine do you like? " + form.elements.change.value + "" +
        "<br>First Name : " + form.elements.login.value + "<br>  Last Name : " + form.elements.login2.value + "" +
        "<br> Male : " + form.elements.Gender.value + "<br>" +
        "<br> Email : " + form.elements.email.value + "" +
        "<br> Date of Birth : " + form.elements.DoB.value + "" +
        "<br> Adress : " + form.elements.messenger.value;
}

