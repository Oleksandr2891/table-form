import { FC } from "react";
import Row from "./Row";
import { IData } from "./Table";



interface Props {
  data: IData[];
}

const TableBody: FC<Props> = ({data})=> {
    return (
        <tbody>
        {data.map((row) => {
          return <Row key={row.rowNumer} rowData={row} />
        })}
        </tbody>
    );
}

export default TableBody;