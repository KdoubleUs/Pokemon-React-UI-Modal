import * as React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./modal2";
import { useState } from "react";
import ModalBox from "./Box";
import Imgdata from "../imgdata";
function TestContainer() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false); //
  //   const traverseImg = ModalBox.forEach(modal => {
  //     Imgdata.forEach(img => <img src={img.url} alt="none" />);
  //   });
  return (
    <div className="setOfModal">
      <ModalBox id={1} imgId="1" />
      <ModalBox id={2} imgId="2" />
      <ModalBox id={3} imgId="3" />
      <ModalBox id={4} imgId="4" />
      <ModalBox id={5} imgId="5" />
      <ModalBox id={6} imgId="6" />
      <ModalBox id={7} imgId="7" />
      <ModalBox id={8} imgId="8" />
      <ModalBox id={9} imgId="9" />
    </div>
  );
}
export default TestContainer;
