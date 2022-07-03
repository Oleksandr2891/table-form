import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IElementSelect, IFormData } from "../assets/types";

const Select = React.forwardRef<
    HTMLSelectElement,  IElementSelect & ReturnType<UseFormRegister<IFormData>>
    >(({ onChange, onBlur, name, label, regLabel, optionSelect}, ref) => (
    <>
        <label>{label}</label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur} >
                {optionSelect.map((element, idx) => {
                    return <option key={idx} value={element.val}>{element.title}</option>
            })}
        </select>
    </>
    ));
export default Select