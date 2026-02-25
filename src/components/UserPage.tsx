import Table from "react-bootstrap/Table"
import {Button, InputGroup} from "react-bootstrap";
import {useState} from "react";

export function UserPage() {

    const [rows, setRows] = useState([
        {date: "", meal: "", comments: "", mood: ""},
    ]);

    const addRow = () => {
        const newRow = { date: "", meal: "", comments: "", mood: ""}
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
                        {/*<td>{row.date}</td>*/}
                        {/*<td>{row.meal}</td>*/}
                        {/*<td>{row.comments}</td>*/}
                        {/*<td>{row.mood}</td>*/}
                        <td>
                            <InputGroup>
                                <input type="date" className="form-control" value={row.date} onChange={(e) => {
                                    const newRows = [...rows];
                                    newRows[index].date = e.target.value;
                                    setRows(newRows);
                                }}/>
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.meal} onChange={(e) => {
                                    const newRows = [...rows];
                                    newRows[index].meal = e.target.value;
                                    setRows(newRows);
                                }}/>
                            </InputGroup>
                        </td>

                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.comments} onChange={(e) => {
                                    const newRows = [...rows];
                                    newRows[index].comments = e.target.value;
                                    setRows(newRows);
                                }}/>
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.mood} onChange={(e) => {
                                    const newRows = [...rows];
                                    newRows[index].mood = e.target.value;
                                    setRows(newRows);
                                }}/>
                            </InputGroup>
                        </td>
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



