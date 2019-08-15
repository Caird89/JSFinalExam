import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {
  const [superhero, setsuperhero] = useState([]);

  useEffect(() => {
    Axios.get(`/api/${props.match.params.id}`)
      .then(result => setsuperhero(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      <header>
        <h1>{superhero.realName}</h1>
      </header>

      <div>{superhero.superheroName}</div>
      <div>{superhero.age}</div>
    </div>
  );
}

export default Show;
