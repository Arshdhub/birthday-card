function revealSurprise() {
  const pass = prompt("Enter the secret password 🔐");
  if (pass === "iloveyou") {
    document.getElementById("secretBox").classList.remove("hidden");
  } else {
    alert("Wrong password 😢");
  }
}
