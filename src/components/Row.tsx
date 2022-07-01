import { FC } from "react";
import { ColumnNumber, configTable } from "./Header";
import { IData } from "./Table";

interface Props {
    rowData: IData;
}

const Row: FC<Props> = ({ rowData }) => {
    console.log('rowData', rowData)

    const baseRow = configTable.map((column, idx ) => {
        console.log(column);
        switch (column.columnNumber) {
            case ColumnNumber.Id: {
                return <td><button>Del</button></td>
            }
            case ColumnNumber.Company: {
                return <td>{rowData.company}</td>
            }
            case ColumnNumber.Name: {
                return <td>{rowData.name}</td>
            }
            case ColumnNumber.Additional: {
                return <td>{rowData.additional}</td>
            }
            case ColumnNumber.Street: {
                return <td>{rowData.street}</td>
            }
            case ColumnNumber.PostalCode: {
                return <td>{rowData.postalCode}</td>
            }
            case ColumnNumber.Country: {
                return <td>{rowData.country}</td>
            }
            case ColumnNumber.Iban: {
                return <td>{rowData.iban}</td>
            }
            case ColumnNumber.Bic: {
                return <td>{rowData.bic}</td>
            }
            case ColumnNumber.BankName: {
                return <td>{rowData.bankName}</td>
            }
            case ColumnNumber.Fax: {
                return <td>{rowData.fax}</td>
            }
            case ColumnNumber.Email: {
                return <td>{rowData.email}</td>
            }
            case ColumnNumber.Birthday: {
                return <td>{rowData.birthday}</td>
            }
        }
    })
    return (
        <tr>{baseRow}</tr>
    );
}

export default Row;