import {Alert, Table} from "react-bootstrap";

export default function About() {
    return (
        <div id="about">
            <Alert variant="info">
                <Alert.Heading>About page</Alert.Heading>
                <p>
                    Using color to add meaning only provides a visual indication, which will not be conveyed to users of
                    assistive technologies – such as screen readers. Ensure that information denoted by the color
                    is either obvious from the content itself (e.g. the visible text),
                    or is included through alternative means,
                    such as additional text hidden with the <code>.visually-hidden</code> class.
                </p>
            </Alert>

            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}
