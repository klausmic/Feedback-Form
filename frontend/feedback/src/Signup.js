import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


function Signup() {
  const [values, setvalues] = useState({
    name: '',
    comments: '',
  })

  const handleChange = (event) => {
    setvalues({...values, [event.target.name]:[event.target.value]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/feedback', {values})
    .then(res => console.log("Feedback Successfully Registered!!"))
    .catch(err => console.log(err));
  }
  return (
    <div className="d-flex justify-content-center align-items-center  bg-secondary text-Black vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Feedback for people</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <select class="form-select" aria-label="Default select example" name='name' onChange={handleChange}>
              <option selected>Open this select menu</option>
              <option value="1">Gaurav</option>
              <option value="2">Shubham</option>
              <option value="3">Bhupesh</option>
              <option value="4">Piyush</option>
              <option value="5">Raiyaan</option>
              <option value="6">Harshit</option>
              <option value="7">Vedanth</option>
            </select>
          </div>
          <div></div>
          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Comments
            </label>
            <textarea
              class="form-control isvalid"
              id="validationTextarea"
              name='comments'
              onChange={handleChange}
              placeholder="Feedback for above mentioned Name"
              required
            ></textarea>
            <div class="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign up
          </button>
          <p>So you agree to our terms and conditions. Good!</p>
          <a
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 "
          ></a>
        </form>
      </div>
    </div>
  );
}

export default Signup

