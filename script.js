function validateForm() {
    var name = document.getElementById("studentName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}