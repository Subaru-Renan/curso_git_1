document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("password-confirmation");
  const button = document.querySelector("button");
  const modal = document.querySelector("dialog");
  const checkbox = document.getElementById("readCheckbox");
  const confirmButton = document.getElementById("confirmButton");
  const cpf = document.getElementById("cpf-password-confirmation");
  const matricula = document.getElementById("matricula-password-confirmation");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
  });

  function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    const cpfValue = cpf.value;
    const matriculaValue = matricula.value;

    let isValid = true; // Flag para verificar se o formulário é válido

    if (usernameValue === "") {
      setErrorFor(username, "O nome do usuário é obrigatório.");
      isValid = false;
    } else {
      setSuccessFor(username);
    }

    if (matriculaValue === "") {
      setErrorFor(matricula, "A matrícula do usuário é obrigatória.");
      isValid = false;
    } else {
      setSuccessFor(matricula);
    }
    
    if (cpfValue === "") {
      setErrorFor(cpf, "O CPF é obrigatório.");
      isValid = false;
    } else {
      setSuccessFor(cpf);
    }

    if (emailValue === "") {
      setErrorFor(email, "O email institucional é obrigatório.");
      isValid = false;
    } else if (!checkEmail(emailValue)) {
      setErrorFor(email, "Por favor, insira um email válido.");
      isValid = false;
    } else {
      setSuccessFor(email);
    }

    if (passwordValue === "") {
      setErrorFor(password, "A senha é obrigatória.");
      isValid = false;
    } else if (passwordValue.length < 7) {
      setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
      isValid = false;
    } else {
      setSuccessFor(password);
    }

    if (passwordConfirmationValue === "") {
      setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
      isValid = false;
    } else if (passwordConfirmationValue !== passwordValue) {
      setErrorFor(passwordConfirmation, "As senhas não conferem.");
      isValid = false;
    } else {
      setSuccessFor(passwordConfirmation);
    }

    if (isValid) {
      console.log("O formulário está 100% válido!");
      modal.showModal();
      // Resetar o checkbox quando o modal abrir
      checkbox.checked = false;
      confirmButton.disabled = true;
    }
  }

  // Controle do modal de termos
  checkbox.addEventListener("change", () => {
    confirmButton.disabled = !checkbox.checked;
  });

  confirmButton.addEventListener("click", () => {
    if (checkbox.checked) {
      modal.close();
      form.submit(); // Envia o formulário após fechar o modal
    }
  });

  // Impede fechamento clicando fora sem marcar
  modal.addEventListener("close", (event) => {
    if (!checkbox.checked && event.target === modal) {
      modal.showModal();
      alert("Você precisa marcar 'Li e concordo com os termos' para continuar");
    }
  });

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className = "form-control error";
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
});
