import {  Path } from "react-hook-form";

export interface IElementButton {
        title: string,
        type: "button" | "submit" | "reset" | undefined,
        classBtn: "notFill" | "fill"
}


export interface IElementSelect {
    label: string
    regLabel: Path<IFormData>,
    optionSelect:  {
                        val: string,
                        title: string
                    }[]
}


export interface IElementInput {
    type: string,
    label: string,
    regLabel: Path<IFormData>,
    val?: {[key: string]: any},
    error?: boolean
}

export interface IElementConfigForm{
    titleForm: string,
    inputForm: IElementInput[],
    selectForm?: IElementSelect[],
    buttonsForm?: IElementButton[]

}


export interface IFormConfig {
    [key: string]: IElementConfigForm,
}

export type Step = 'firstStep' | 'secondStep' | 'thirdStep';


export interface IFormData {
    rowNumber?: number,
    company?: string,
    name?: string,
    additional?: string;
    street?: string;
    postalCode?: string;
    country?: string;
    iban?: string;
    bic?: string;
    bankName?: string;
    fax?: string;
    email?: string;
    birthday?: string;
    homepage?: string;
};

export type TPartFormData = Partial<IFormData>;

export interface IConfigTable{
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

export interface IState {
    tableData: IFormData[];
}



