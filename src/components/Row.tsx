import { FC } from "react";
import Button from "./Button";
import { ColumnNumber, configTable } from "./Header";
import { IData } from "./Table";

interface Props {
    rowData: IData;
}

const Row: FC<Props> = ({ rowData }) => {
    // eslint-disable-next-line 
        const baseRow = configTable.map((column, idx): JSX.Element | undefined => {
            switch (column.columnNumber) {
                case ColumnNumber.Id: {
                    return <td key={`${rowData.rowNumer}${idx}`}><Button onHandleClick={()=>{}} classBtn={'notFill'} icon={"iconDel"}/></td>
                }
                case ColumnNumber.Company: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.company}</td>
                }
                case ColumnNumber.Name: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.name}</td>
                }
                case ColumnNumber.Additional: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.additional}</td>
                }
                case ColumnNumber.Street: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.street}</td>
                }
                case ColumnNumber.PostalCode: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.postalCode}</td>
                }
                case ColumnNumber.Country: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.country}</td>
                }
                case ColumnNumber.Iban: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.iban}</td>
                }
                case ColumnNumber.Bic: {
                    return <td key={`${column.columnNumber}${idx}`}>{rowData.bic}</td>
                }
                case ColumnNumber.BankName: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.bankName}</td>
                }
                case ColumnNumber.Fax: {
                    return <td key={`${rowData.rowNumer}${idx}`}>{rowData.fax}</td>
                }
                case ColumnNumber.Email: {
                    return <td key={`${rowData.rowNumer}+${idx}`}>{rowData.email}</td>
                }
                case ColumnNumber.Birthday: {
                    return <td key={`${rowData.rowNumer}+${idx}`}>{rowData.birthday}</td>
                }
            }
        })
    return (
        <tr>{baseRow}</tr>
    );
}

export default Row;