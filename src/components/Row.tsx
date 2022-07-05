import { FC } from "react";
import { useAppDispatch } from "../assets/hooks/redux";
import { ColumnNumber, IFormData } from "../assets/type/types";
import { tableDataSlice } from "../redux/reducer/tableData";
import Button from "./Button";
import { configTable } from "./Header";

interface Props {
    rowData: IFormData;
}

const Row: FC<Props> = ({ rowData }) => {
    const { removeRowData } = tableDataSlice.actions;
    const dispatch = useAppDispatch();
    // eslint-disable-next-line 
        const baseRow = configTable.map((column, idx): JSX.Element | undefined => {
            switch (column.columnNumber) {
                case ColumnNumber.Id: {
                    return <td key={`${rowData.rowNumber}${idx}`}><Button onHandleClick={()=>{rowData.rowNumber && dispatch(removeRowData(rowData.rowNumber))}} classBtn={'notFill'} icon={"iconDel"}/></td>
                }
                case ColumnNumber.Company: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.company || '-'}</td>
                }
                case ColumnNumber.Name: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.name || '-'}</td>
                }
                case ColumnNumber.Additional: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.additional || '-'}</td>
                }
                case ColumnNumber.Street: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.street || '-'}</td>
                }
                case ColumnNumber.PostalCode: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.postalCode || '-'}</td>
                }
                case ColumnNumber.Country: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.country || '-'}</td>
                }
                case ColumnNumber.Iban: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.iban || '-'}</td>
                }
                case ColumnNumber.Bic: {
                    return <td key={`${column.columnNumber}${idx}`}>{rowData.bic || '-'}</td>
                }
                case ColumnNumber.BankName: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.bankName || '-'}</td>
                }
                case ColumnNumber.Fax: {
                    return <td key={`${rowData.rowNumber}${idx}`}>{rowData.fax || '-'}</td>
                }
                case ColumnNumber.Email: {
                    return <td key={`${rowData.rowNumber}+${idx}`}>{rowData.email || '-'}</td>
                }
                case ColumnNumber.Birthday: {
                    return <td key={`${rowData.rowNumber}+${idx}`}>{rowData.birthday || '-'}</td>
                }
            }
        })
    return (
        <tr className="row">{baseRow}</tr>
    );
}

export default Row;