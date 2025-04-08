document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    validateData();
  });
});

function validateData() {
  const fields = [
    {
      id: "firstName",
      regex: /^[A-Za-z'-]{2,}$/,
      error: "First name must be at least 2 letters (no numbers)."
    },
    {
      id: "lastName",
      regex: /^[A-Za-z'-]{2,}$/,
      error: "Last name must be at least 2 letters (no numbers)."
    },
    {
      id: "email",
      regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      error: "Invalid email address."
    },
    {
      id: "phone",
      regex: /^\d{10}$/,
      error: "Phone must be exactly 10 digits. No dashes or symbols."
    },
    {
      id: "username",
      regex: /^.{6,}$/,
      error: "Username must be at least 6 characters."
    },
    {
      id: "password",
      regex: /^.{6,}$/,
      error: "Password must be at least 6 characters."
    },
    {
      id: "comments",
      regex: /^.{1,}$/,
      error: "Comments cannot be empty."
    }
  ];

  fields.forEach(({ id, regex, error }) => {
    const input = document.getElementById(id);
    const group = document.getElementById(`${id}Group`);
    const msg = document.getElementById(`${id}Msg`);
    const value = input.value.trim();

    if (!regex.test(value)) {
      group.classList.add("has-error");
      group.classList.remove("has-success");
      msg.textContent = error;
    } else {
      group.classList.remove("has-error");
      group.classList.add("has-success");
      msg.textContent = "Looks good!";
    }
  });
}
