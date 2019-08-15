import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [superheroes, setsuperheroes] = useState([]);

  useEffect(() => {
    Axios.get("/api/superheroes")
      .then(result => setsuperheroes(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All BadAss Superheroes</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Real Name</th>
              <th>Made Up Name</th>
              <th>Group</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {superheroes.map(superhero => (
              <tr key={superhero._id}>
                <td>
                  <Link to={`/${superhero._id}`}>{superhero.realName}</Link>
                </td>
                <td>{superhero.superheroName}</td>
                <td>{superhero.group}</td>
                <td>
                  <Link to={`/${superhero._id}/edit`}>edit</Link>|
                  <Link to={`/${superhero._id}/destroy`}>delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
