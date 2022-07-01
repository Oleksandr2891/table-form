import { FC } from "react";
import Header from "./Header";
import DataTable from "../DataTable.json"
import TableBody from "./TableBody";

export interface IData {
    rowNumer: number,
    company: string,
    name: string,
    additional: string,
    street: string,
    postalCode: string,
    country: string,
    iban: string,
    bic: string,
    bankName: string,
    fax: string,
    email: string,
    birthday: string
}

// interface Props {
//   data: IData[];
// }


const Table: FC = ()=> {
    return (
        <table>
            <Header/>
            <TableBody data={DataTable}/>
        </table>
    );
}

export default Table;