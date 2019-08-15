import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context"

function New() {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const {setNotification} = useContext(NotificationContext);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/superheroes", 
         inputs)
      .then(resp => {
        setNotification(notification => {
            return{
              ...notification,
              status: "success",
              message: "You created new Superhero"
            };
        })
        setRedirect(true)
    }) 
      .catch(err => {
        setNotification(notification => {
          return{
            ...notification,
            status: "danger",
            message: "Fuck off"
          };
        });
  });
}

  function handleInputChange(event) {
    event.persist();
    // const name = event.target.name;
    // const value = event.target.value;
    const { name, value } = event.target;

    setInputs(inputs => {
      inputs[name] = value;
      return inputs;
    });
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>New superheroes Post</h1>
      </header>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Real Name</label>
            <input
              className="form-control"
              name="realName"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Super Hero Name</label>
            <input
              className="form-control"
              name="superheroName"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              className="form-control"
              name="age"
              required="required"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>Group</label>
            <select
              className="form-control"
              name="group"
              required="required"
              onChange={handleInputChange}
            >
              <option value="X-MEN">X-Men</option>
              <option value="FANTASTIC FOUR">Fantastic Four</option>
              <option value="X-FORCE">X-Force</option>
              <option value="THE AVENGERS">The Avengers</option>
              <option value="THE ETERNALS">The Eternals</option>
              <option value="THE DEFENDERS">The Defenders</option>
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default New;
