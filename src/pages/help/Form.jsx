function Form() {
  return (
    <div>
      <h1>Send Us Question</h1>
      <hr />
      <div className="form-container">
        <form>
          <label className="form-control">
            <span>Your Email:</span>
            <input type="text" />
          </label>
          <label className="form-control">
            <span>Your Text:</span>
            <textarea></textarea>
          </label>
          <button className="button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
