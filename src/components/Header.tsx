import { FC } from "react";

interface IConfigTable{
    columnNumber: number;
    name: string;
    minWidth: string;
}

export enum ColumnNumber {
    Id=1,
    Company,
    Name,
    Additional,
    Street,
    PostalCode,
    Country,
    Iban,
    Bic,
    BankName,
    Fax,
    Email,
    Birthday,
}


export const configTable: IConfigTable[] = [
    {   
        columnNumber: ColumnNumber.Id,
        name: '',
        minWidth: '58px',
    },
    {
        columnNumber: ColumnNumber.Company,
        name: 'Company',
        minWidth: '150px',
    },
    {
        columnNumber: ColumnNumber.Name,
        name: 'Name',
        minWidth: '150px',
    },
    {
        columnNumber: ColumnNumber.Additional,
        name: 'Additional',
        minWidth: '150px',
    },
    {
        columnNumber: ColumnNumber.Street,
        name: 'Street',
        minWidth: '100px'
    },
    {
        columnNumber: ColumnNumber.PostalCode,
        name: 'Postal Code',
        minWidth: '95px',
    },
    {
        columnNumber: ColumnNumber.Country,
        name: 'Country',
        minWidth: '90px',
    },
    {
        columnNumber: ColumnNumber.Iban,
        name: 'IBAN',
        minWidth: '100px',
    },
    {
        columnNumber: ColumnNumber.Bic,
        name: 'BIC',
        minWidth: '100px',
    },
    {
        columnNumber: ColumnNumber.BankName,
        name: 'Bank Name',
        minWidth: '90px',
    },
    {
        columnNumber: ColumnNumber.Fax,
        name: 'Fax',
        minWidth: '100px',
    },
    {
        columnNumber: ColumnNumber.Email,
        name: 'E-mail',
        minWidth: '100px',
    },
    {
        columnNumber: ColumnNumber.Birthday,
        name: 'Birthday',
        minWidth: '80px',
    },
]


const Header: FC = ()=> {
    return (
        <thead>
            <tr>
                {configTable.map((column) => {
                    return <th key={column.columnNumber} style={{minWidth: `${column.minWidth}`}}>{ column.name }</th>
                })}
            </tr>
        </thead>
    );
}

export default Header;