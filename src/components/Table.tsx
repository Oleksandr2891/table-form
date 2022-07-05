import Header from "./Header";
import TableBody from "./TableBody";
import '../style/Table.css'

const Table = ()=> {
    return (
        <div className="tableContainer">
            <table className="tableWrapper">
                <Header/>
                <TableBody/>
            </table>
        </div>
    );
}

export default Table;