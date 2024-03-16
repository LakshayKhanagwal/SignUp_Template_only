var a = 1
document.getElementById("pass_eye").src = "images/hide.png"

function eye() {
    if (a == 1) {
        document.getElementById("pass_eye").src = "images/view.png"
        document.getElementById("password").type = "text"

        document.getElementById("conf_password").type = "text"

        a = 0
    } else {
        document.getElementById("pass_eye").src = "images/hide.png"
        document.getElementById("password").type = "password"

        document.getElementById("conf_password").type = "password"

        a = 1
    }
}

function signup() {
    alert("Under Process")
}

function head_signup(){
    alert("working on it")
}