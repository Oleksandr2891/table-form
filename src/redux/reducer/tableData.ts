import DataTable from "../../DataTable.json";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFormData } from "../../assets/type/types";

interface IState {
    tableData: IFormData[];
}


const initialState: IState = {
    tableData: DataTable,
}


export const tableDataSlice = createSlice({
    name: 'tableData',
    initialState,
    reducers: {
        addRowData(state, action: PayloadAction<IFormData>) {
            state.tableData.push(action.payload);
        },
        removeRowData(state, action: PayloadAction<number>) {
            state.tableData = state.tableData.filter(elem =>
                    action.payload !== elem.rowNumber);
        }
    }
})


export default tableDataSlice.reducer;