import Table from "react-bootstrap/Table"
import {Button, InputGroup} from "react-bootstrap";
import {useState} from "react";


interface MealRow {
    id: number;
    date: string;
    meal: string;
    comments: string;
    mood: string;
}


export function UserPage() {

    const [rows, setRows] = useState<MealRow[]>([
        { id: 1, date: "", meal: "", comments: "", mood: "" },
    ]);

    const [nextId, setNextId] = useState(2);

    const addRow = () => {
        setRows([...rows, { id: nextId, date: "", meal: "", comments: "", mood: "" }]);
        setNextId(nextId + 1);
    };

    const handleChange = (index: number, field: keyof MealRow, value: string) => {
        const newRows = rows.map((row, i) =>
            i === index ? { ...row, [field]: value } : row
        );
        setRows(newRows);
    };

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

                        <td>
                            <InputGroup>
                                <input type="date" className="form-control" value={row.date} onChange={(e) =>
                                    handleChange(index, "date", e.target.value)
                                }/>
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.meal} onChange={(e) => {
                                   handleChange(index, "meal", e.target.value)
                                }}/>
                            </InputGroup>
                        </td>

                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.comments} onChange={(e) => {
                                    handleChange(index, "comments", e.target.value)
                                }}/>
                            </InputGroup>
                        </td>
                        <td>
                            <InputGroup>
                                <input type="text" className="form-control" value={row.mood} onChange={(e) => {
                                   handleChange(index, "mood", e.target.value)
                                }}/>
                            </InputGroup>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>


            <div className={"mt-3"}>
                <Button onClick={addRow}>Add Row</Button>
                <Button className={"btn-success m-3"}>Save</Button>
            </div>


        </div>
    )
}



