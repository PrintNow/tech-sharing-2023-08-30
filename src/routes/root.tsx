import {Outlet} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "../components/Header.tsx";

export default function Root() {
    return (
        <>
            <Header/>

            <Container style={{padding: `1.5rem`}}>
                <Outlet/>
            </Container>
        </>
    );
}
