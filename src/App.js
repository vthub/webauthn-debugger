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
      <hr/>
        <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1">Webauthn Debugger</p>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="https://github.com/vthub/webauthn-debugger">GitHub</a></li>
                <li className="list-inline-item"><a href="https://github.com/vthub/webauthn-debugger/blob/master/LICENSE">License</a></li>
                <li className="list-inline-item"><a href="https://github.com/vthub/webauthn-debugger/issues">Support</a></li>
            </ul>
        </footer>

    </Container>
  );
}

export default App;
