import Table from "react-bootstrap/Table"
import {Button} from "react-bootstrap";
import {useState} from "react";

export function UserPage() {

    const [rows, setRows] = useState([
        {date: "25/02/2026", meal: "Breakfast", comments: "Good", mood: "Happy"},
    ]);

    const addRow = () => {
        const newRow = { date: "25/02/2026", meal: "Breakfast", comments: "Good", mood: "Happy"}
        setRows([...rows, newRow]);
    }

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
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.meal}</td>
                        <td>{row.comments}</td>
                        <td>{row.mood}</td>
                    </tr>
                ))}
                </tbody>

                <div className={"mt-3"}>
                    <Button onClick={addRow}>Add Row</Button>
                </div>


            </Table>

        </div>
    )
}



