import {Alert} from "react-bootstrap";

export default function Home() {
    return (
        <div id="Home">
            <Alert variant="success">
                <Alert.Heading>Home page</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>
        </div>
    );
}
