var nama = prompt("Masukkan nama kamu");
document.getElementById("nama").innerText = nama;

function validateForm() {
    var name = document.forms["message-us"]["full-name"].value;
    var birthDate = document.forms["message-us"]["birth-date"].value;
    var gender = document.forms["message-us"]["gender"].value;
    var messages = document.forms["message-us"]["messages"].value;
    document.getElementById("sender-full-name").innerText = name;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = messages;
    setSenderUI(name, birthDate, gender, messages);
    
    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    
}
