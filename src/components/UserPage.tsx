import Table from "react-bootstrap/Table"
import {Button} from "react-bootstrap";


export default function UserPage() {
    return (
        <div>
            <Table striped bordered hover size="md">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Meal</th>
                        <th className={""}>Comments</th>
                        <th>Mood</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Breakfast</td>
                        <td>Good</td>
                        <td>Happy</td>
                    </tr>
                </tbody>
            </Table>

            <Button variant="primary" onClick={HandleClick}>Add</Button>
        </div>
    )
}

function HandleClick() {
    console.log("clicked")
}