import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context"

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);
  const {setNotification} = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`/api/superheroes/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/superheroes/update", {
      id: props.match.params.id,
      ...inputs
    })
      .then(resp => {
        setNotification(notification => {
            return{
              ...notification,
              status: "success",
              message: "You changed Superhero "
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

    const { name, value } = event.target;

    setInputs(inputs => {
      return {
        ...inputs,
        [name]: value
      };
    });
  }

  if (redirect) return <Redirect to="/" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Superhero Post</h1>
      </header>
      <div>
        <form action="/superheroes" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Real Name</label>
            <input
              className="form-control"
              name="realName"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.realName}
            />
          </div>

          <div className="form-group">
            <label>Super Hero Name</label>
            <textarea
              className="form-control"
              name="superheroName"
              onChange={handleInputChange}
              value={inputs.superheroName}
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <textarea
              className="form-control"
              name="age"
              onChange={handleInputChange}
              value={inputs.age}
            />
          </div>

          <div className="form-group">
            <label>Group</label>
            <select
              className="form-control"
              name="group"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.group}
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

export default Edit;
