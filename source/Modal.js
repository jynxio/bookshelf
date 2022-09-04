import { jsx } from "@emotion/react";
import * as React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog, CircleButton } from "./Button";

const ModalContext = React.createContext()
const callAll =
    ( ... fns ) =>
    ( ... args ) =>
        fns.forEach( fn => fn && fn( ... args ) );

function Modal ( property ) {

    const [ open_state, setOpenState ] = React.useState( false );

    return <ModalContext.Provider value={ [ open_state, setOpenState ] } { ... property }/>;

}

function ModalDismissButton ( property ) {

    const [ , setOpenState ] = React.useContext( ModalContext );

    return React.cloneElement( property.children, {
        onClick: callAll( _ => setOpenState( false ), property.children.props.onClick ),
    } );

}

function ModalOpenButton ( property ) {

    const [ , setOpenState ] = React.useContext( ModalContext );

    return React.cloneElement( property.children, {
        onClick: callAll( _ => setOpenState( true ), property.children.props.onClick ),
    } );

}

function ModalContentsBase ( property ) {

    const [ open_state, setOpenState ] = React.useContext( ModalContext );

    return <Dialog isOpen={ open_state } onDismiss={ _ => setOpenState( false ) } { ... property }/>;

}

function ModalContents ( { title, children, ... property } ) {

    return (
        <ModalContentsBase { ... property }>
            <div css={ { display: "flex", justifyContent: "flex-end" } }>
                <ModalDismissButton>
                    <CircleButton>
                        <VisuallyHidden>Close</VisuallyHidden>
                        <span aria-hidden>×</span>
                    </CircleButton>
                </ModalDismissButton>
            </div>
            <h3 css={ { textAlign: "center", fontSize: "2em" } }>{ title }</h3>
            { children }
        </ModalContentsBase>
    );

}

export {Modal, ModalDismissButton, ModalOpenButton, ModalContents}
