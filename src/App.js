import "./App.css";
import { useState, useEffect } from "react";
import Nav from "./components/Navbar";
import Box from "./components/Box";
import Modal from "./components/modal";
import TestModal from "./components/modal2";
import * as React from "react";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./components/modal2";
import TestContainer from "./components/ModalContainer";
import FetchApi from "./components/api";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false); //
  return (
    <div>
      <Nav />

      <TestModal />

      <TestContainer />
    </div>
  );
}

export default App;
