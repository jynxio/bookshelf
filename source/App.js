import "bootstrap/dist/css/bootstrap-reboot.css";
import "@reach/dialog/styles.css";
import React from "react";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { Modal, ModalContents, ModalOpenButton } from "./Modal";

function App () {

    return (
        <div>
            <Logo width="80" height="80"/>
            <h1>Bookshelf</h1>
            <div>
                <Modal>
                    <ModalOpenButton>
                        <Button>Login</Button>
                    </ModalOpenButton>
                    <ModalContents aria-label="Login form" title="Login">
                        <LoginFrom onSubmit={ login } submitButton={ <Button variant={ "primary" }>Login</Button> }/>
                    </ModalContents>
                </Modal>
                <Modal>
                    <ModalOpenButton>
                        <Button variant={ "secondary" }>Register</Button>
                    </ModalOpenButton>
                    <ModalContents aria-label="Registration form" title="Register">
                        <LoginFrom onSubmit={ register } submitButton={ <Button variant={ "secondary" }>Register</Button> }/>
                    </ModalContents>
                </Modal>
            </div>
        </div>
    );

    function login ( from_data ) {

        console.log( "login", from_data );

    }

    function register ( from_data ) {

        console.log( "register", from_data );

    }

}

function LoginFrom ( { onSubmit, submitButton: submit_button } ) {

    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" type="text"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
            <div>{ submit_button }</div>
        </form>
    );

    function handleSubmit ( event ) {

        event.preventDefault();

        const [ username, password ] = event.target.elements;

        onSubmit( {
            username: username.value,
            password: password.value,
        } );

    }

}

export default App;
