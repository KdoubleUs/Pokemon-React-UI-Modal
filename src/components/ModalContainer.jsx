import * as React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./modal2";
import { useState } from "react";
import ModalBox from "./Box";
import Imgdata from "../imgdata";

const arr = Array.from({ length: 151 }, (_, index) => index + 1);
function TestContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false); //
  //   const traverseImg = ModalBox.forEach(modal => {
  //     Imgdata.forEach(img => <img src={img.url} alt="none" />);
  //   });
  return (
    <div className="setOfModal">
      {arr.map(num => (
        <ModalBox id={num} imgId={num} />
      ))}
    </div>
  );
}
export default TestContainer;
