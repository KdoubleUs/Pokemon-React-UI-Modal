import * as React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./modal2";
import { useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
function ModalBox(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false); //
  const open = function () {};
  return (
    <div>
      <div
        className="mainContainer"
        variant="primary"
        onClick={() => setModalShow(true)}
      >
        {/* <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button> */}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.imgId}.png`}
          alt="none"
          height={100}
          width={100}
          className="pokemonIMG"
        />
      </div>
      <MyVerticallyCenteredModal
        value={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}
export default ModalBox;
