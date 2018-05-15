import React from "react";
import ReactDOM from "react-dom";
import Form from "./components/login/Form.jsx";

ReactDOM.render(<Form user={require('./../../configs/db/userModel')}/>, document.getElementById('form-input'));