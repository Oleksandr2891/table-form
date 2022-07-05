import { useAppSelector } from "../assets/hooks/redux";
import Row from "./Row";

const TableBody = () => {
  const { tableData } = useAppSelector(state => state.tableDataReducer);
 
  console.log('tableData', tableData);
    return (
        <tbody>
        {tableData.map((row) => {
          return <Row key={row.rowNumber} rowData={row} />
        })}
        </tbody>
    );
}

export default TableBody;