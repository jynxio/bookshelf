import styled from "@emotion/styled";
import { Dialog as ReachDialog } from "@reach/dialog";

const button_variant = {
    primary: {
        background: "#3f51b5",
        color: "white",
    },
    secondary: {
        background: "#f1f2f7",
        color: "434449",
    },
};

const Button = styled.button(
    {
        padding: "10px 15px",
        border: "0",
        lineHeight: "1",
        borderRadius: "3px",
    },
    ( { variant = "parimary" } ) => button_variant[ variant ],
);

const CircleButton = styled.button( {
    borderRadius: "30px",
    padding: "0",
    width: "40px",
    height: "40px",
    lineHeight: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    color: "#434449",
    border: "1px solid #f1f1f4",
    cursor: "pointer",
} );

const Dialog = styled( ReachDialog )( {
    maxWidth: "450px",
    borderRadius: "3px",
    paddingBottom: "3.5em",
    boxShadow: "0 10px 30px -5px rgba( 0, 0, 0, 0.2 )",
    margin: "20vh auto",
    "@media ( max-width: 991px )": {
        width: "100%",
        margin: "10vh auto",
    },
} );

export { Button, CircleButton, Dialog };
