export default function Form() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div class="my-3">
        <label for="emailInput" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="emailInput"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="inputName" class="form-label">
          Name
        </label>
        <input type="text" class="form-control" id="inputName" />
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
          placeholder="Leave a comment here"
          id="floatingTextarea"
        ></textarea>
        <label for="floatingTextarea" placeholder="How can I help?">
          How can I help?
        </label>
      </div>
      <button type="submit" class="mt-3 btn btn-primary">
        Submit
      </button>
    </form>
  );
}
