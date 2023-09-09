import Modal from "./Modal";
import React from "react";
import { useState } from "react";

function MovieComponent({ film }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal
        show={show}
        handleClose={handleClose}
        title={film.title}
        poster_path={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        overview={film.overview}
      />
      <img
        className="img-fluid mt-3 img-all"
        src={`https://image.tmdb.org/t/p/original${film.poster_path}`}
        alt="imagenes"
        onClick={handleShow}
      />
    </div>
  );
}

export default MovieComponent;
