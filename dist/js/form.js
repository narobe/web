const form = document.querySelector("form");
const formName = document.querySelector(".--form-name--");
const formAdd = document.querySelector(".--form-address--");
const formMessage = document.querySelector(".--form-message--");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
});

async function sendMessage() {
  const url = `https://api.telegram.org/bot7683880675:AAEU8jWuT_Zjo6EVCuMGTQj2uzgpnmwAa84/sendMessage?chat_id=-4743606472&text=<b>Name:</b>%20${formName.value}%0A<b>Phone:</b>%20${formAdd.value}%0A<b>Message:</b>%20${formMessage.value}&parse_mode=HTML`;
  const response = await fetch(url);
  const data = await response.json();
  if (response.ok) {
    form.reset();
    alert("form sent!");
  } else {
    alert("form not sent!");
  }
}
