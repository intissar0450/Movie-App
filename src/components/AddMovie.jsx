import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-------------------------------------inputs states----------------------------------
  const [name, setName] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);
  const [desc, setDesc] = useState("");
  //-------------------------------------functions-----------------------------------------
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      name: name,
      image: imageURL,
      rating: rate,
      date: date,
      description: desc,
    };
    if (name && imageURL && date && rate && desc) {
      handleAdd(newMovie);
      handleClose();
    } else {
      alert("please fill all the forms");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie informations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Movie Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="">Cover URL :</label>
            <input
              type="text"
              value={imageURL}
              onChange={(e) => {
                setImageURL(e.target.value);
              }}
            />
            <label htmlFor=""> Release Date :</label>
            <input
              type="text"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <label htmlFor="">Rating :</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => {
                setRate(e.target.value);
              }}
            />
            <label htmlFor="">description :</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
