import { BiEdit, BiTrash } from 'react-icons/bi';

import data from "../db/data.json"

const Table = () => {
    return (
        <table className="table min-w-full">
            {/* head*/}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salery</th>
                    <th>Birthday</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody >
                {data.map((obj, i) =>
                    <Tr {...obj} key={i} />
                )}

            </tbody>
        </table>
    )
}

function Tr({ id, name, avatar, email, salary, date, status }: any) {

    return (

        <tr>
            <td>

                <span>{name || "Unknown"}</span>
            </td>
            <td>{email || "Unknown"}</td>
            <td>{salary || "Unknown"}</td>
            <td>{date || "Unknown"}</td>
            <td><button className="btn btn-success">{status || "Unknown"}</button></td>
            <td className='flex gap-3'>
                <BiEdit size={25} color={'rgb(34,197,94)'} />
                <BiTrash size={25} color={'rgb(197, 34, 34)'} />
            </td>
        </tr>


    )
}


export default Table

