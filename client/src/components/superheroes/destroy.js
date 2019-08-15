import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import NotificationContext from "../notification_context"


function Destroy(props) {

  const [redirect, setRedirect] = useState(false);
  const {setNotification} = useContext(NotificationContext);

  useEffect(() => {
    Axios.post('/api/superheroes/destroy', { id: props.match.params.id }, {taskID: props.match.params.id})
      .then(resp => {
        setNotification(notification => {
            return{
              ...notification,
              status: "danger",
              message: "You killed A Superhero "
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
  }, [props]);

  return <Redirect to="/" />;
}

export default Destroy;