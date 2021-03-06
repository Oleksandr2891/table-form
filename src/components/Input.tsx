import { DeepRequired, FieldErrorsImpl, Path, UseFormRegister } from "react-hook-form";
import { IFormData } from "../assets/type/types";

type InputProps = {
    type: string,
    label: string;
    regLabel: Path<IFormData>;
    register: UseFormRegister<IFormData>;
    val: { [key: string]: any } | undefined;
    errors: FieldErrorsImpl<DeepRequired<IFormData>>;
    error?: boolean
};

const Input = ({ type, label, regLabel, register, val, errors, error }: InputProps) => (
    <>
        <div className="flexBoxRow">
            <label>{label}</label>
            <input type={type} {...register(regLabel, val)} />
        </div>
            {error && errors[regLabel] && <i>This field is required</i>}
    </>
)

export default Input