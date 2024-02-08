import axios from "axios";

export default function Form() {
  function handleFormSubmit(event) {
    event.preventDefault();

    const messageObj = {
      name: "",
      email: "",
      phoneNumber: "",
      needDetails: "",
    };
    messageObj.name = event.target.elements.name.value;
    messageObj.email = event.target.elements.email.value;
    messageObj.phoneNumber = event.target.elements.phoneNumber.value;
    messageObj.needDetails = event.target.elements.needDetails.value;

    let isInvaliDFormSubmission = false;
    for (const res in messageObj) {
      if (!messageObj[res]) {
        isInvaliDFormSubmission = true;
      }
    }

    if (isInvaliDFormSubmission) {
      alert("Please complete all form fields before trying to submit");
    } else {
      axios
        .post(
          "https://getform.io/f/91854ea6-cc19-405b-997e-2e311b849f79",
          {
            message: messageObj,
          },
          { headers: { Accept: "application/json" } }
        )
        .then((response) => {
          alert("Thanks for submitting the form. We'll get in touch shortly");
        })
        .catch((error) =>
          alert(
            "Something went wrong with submitting the form, please try again later"
          )
        );
    }
  }

  return (
    <>
      <form accept-charset="UTF-8" onSubmit={handleFormSubmit}>
        <div class="my-3">
          <label for="email" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">
            Name
          </label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="mb-3">
          <label for="phoneNumber" class="form-label">
            Phone number
          </label>
          <input type="text" class="form-control" id="phoneNumber" />
        </div>
        <div class="form-floating">
          <textarea
            class="form-control"
            placeholder="How can I help?"
            id="needDetails"
          ></textarea>
          <label for="needDetails">How can I help?</label>
        </div>
        {/* <!-- add hidden Honeypot input to prevent spams --> */}
        <input
          type="hidden"
          name="_gotcha"
          style={{ display: "none !important" }}
        />
        <button type="submit" class="mt-3 btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
