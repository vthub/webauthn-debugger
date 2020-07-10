import React from 'react';
import './App.css';
import Container from "react-bootstrap/cjs/Container";
import Debug from "./Debug";

function App() {
  return (
    <Container>
      <div className="py-5 text-center">
        <img className="d-block mx-auto mb-4" src="/logo512.png" alt="" width="72" height="72"/>
          <h1>Webauthn Payload Debugger</h1>
          <p className="lead">Webauthn (a.k.a. FIDO2) is a protocol to enable authentication using private-public key pairs.</p>
      </div>
      <Debug/>
    </Container>
  );
}

export default App;
