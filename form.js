const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isFormValid = true;

  const nume = document.getElementById("nume");
  const email = document.getElementById("email");
  const telefon = document.getElementById("telefon");
  const intrebare = document.getElementById("intrebare");

  if (!/^[a-zA-Z]+$/.test(nume.value)) {
    alert("Numele poate conține doar litere!");
    isFormValid = false;
  }

  if (!/^[a-zA-Z0-9-.@]+$/.test(email.value)) {
    alert("Adresa de email poate conține doar litere, numere, - , . și @ !");
    isFormValid = false;
  }

  if (!/^[0-9]+$/.test(telefon.value)) {
    alert("Numărul de telefon poate conține doar cifre!");
    isFormValid = false;
  }

  if (!/^[a-zA-Z0-9.?$]+$/.test(intrebare.value)) {
    alert("Întrebarea poate conține doar litere, cifre, . și ? !");
    isFormValid = false;
  }

  if (isFormValid) {
    alert("Formularul a fost trimis cu succes!");
    form.reset();
  }
});
