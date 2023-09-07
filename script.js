function fakeFacebookLogin() {
    alert("Simulating Facebook login...");
}

function fakeGoogleLogin() {
    alert("Simulating Google login...");
}

function clearPlaceholder(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.value === inputElement.defaultValue) {
        inputElement.value = "";
    }
}

function restorePlaceholder(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.value === "") {
        inputElement.value = inputElement.defaultValue;
    }
}