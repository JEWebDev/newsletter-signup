const $ = (element) => document.querySelector(element);

const $form = $("#subscribe-form");
const $email = $("#email");
const $subscribeBtn = $("#subscribe-btn");
const $errorMsg = $("#error-msg");
let userEmail = "";

function hideErrorState() {
  $errorMsg.classList.add("hidden");
  $email.classList.remove("error");
}
function showErrorState() {
  $errorMsg.classList.remove("hidden");
  $email.classList.add("error");
}
function disableButton() {
  $subscribeBtn.disabled = true;
}

function enableButton() {
  $subscribeBtn.disabled = false;
}

function validateEmail() {
  const emailRegex = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test($email.value)) {
    hideErrorState();
    enableButton();
    userEmail = $email.value;
    console.log(`user email: ${userEmail}`);
    return true;
  } else {
    showErrorState();
    disableButton();
    console.log("false");
    return false;
  }
}

function showSuccessMessage() {
  const $userEmail = $("#user-email");
  const $subscribeForm = $(".subscribe-article");
  const $wrapper = $(".message-wrapper");
  const $successMessage = $("#subscription-success");

  $subscribeForm.classList.add("hidden");
  $wrapper.classList.remove("hidden");
  $successMessage.classList.remove("hidden");
  $userEmail.textContent = userEmail;
}

function submitForm() {
  if (validateEmail()) {
    showSuccessMessage();
  }
}
$email.addEventListener("input", validateEmail);

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  submitForm();
});
