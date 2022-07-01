import Portal from "./Portal";
import { DeepRequired, FieldErrorsImpl, Path, useForm, UseFormRegister } from "react-hook-form";
import Button from "./Button";
import '../style/ModalWindow.css';
import React from "react";


interface IElementButton {
        title: string,
        type: "button" | "submit" | "reset" | undefined,
        classBtn: "notFill" | "fill"
}


interface IElementSelect {
    label: string
    regLabel: Path<IFormData>,
    optionSelect:  {
                        val: string,
                        title: string
                    }[]
}


interface IElementInput {
    type: string,
    label: string,
    regLabel: Path<IFormData>,
    val?: {[key: string]: any},
    error?: boolean
}

interface IElementConfigForm{
    titleForm: string,
    inputForm: IElementInput[],
    selectForm?: IElementSelect[],
    buttonsForm?: IElementButton[]

}


interface IFormConfig {
    [key: string]: IElementConfigForm,
}

const formConfing: IFormConfig = {
    firstStep: {
        titleForm: "Invoice Address",
        inputForm: [
            {
                type: 'text',
                label: 'Company*',
                regLabel: 'company',
                val: { required: true, minLength: 2 },
                error: true
            },
            {
                type: 'text',
                label: 'Name*',
                regLabel: "name",
                val: { required: true, minLength: 2 },
                error: true
            },
            {
                type: 'text',
                label: 'Additional',
                regLabel: "additional",
            },
            {
                type: 'text',
                label: 'Street',
                regLabel: "street",
            },
            {
                type: 'text',
                label: 'Postal Code',
                regLabel: "postalCode",
            }
        ],
        selectForm: [
            {
                label: 'Additional',
                regLabel: 'additional',
                optionSelect: [
                    {
                        val: "ukraine",
                        title: "Ukraine"
                    },
                    {
                        val: "germany",
                        title: "Germany"
                    },
                    {
                        val: "france",
                        title: "France"
                    },
                    {
                        val: "unitedKingdom",
                        title: "United Kingdom"
                    },
                    {
                        val: "other",
                        title: "other"
                    }
                ]
            }
        ],
        buttonsForm: [
            {
                title: "Cancel",
                type: "button",
                classBtn: "notFill"
            },
            {
                title: "Next",
                type: "submit",
                classBtn: "fill"
            }
        ]
    },
    secodStep: {
        titleForm: "Bank Data",
        inputForm: [
            {
                type: 'text',
                label: 'IBAN*',
                regLabel: 'iban',
                val: { required: true, minLength: 2 },
                error: true
            },
            {
                type: 'text',
                label: 'BIC*',
                regLabel: "bic",
                val: { required: true, minLength: 2 },
                error: true
            },
            {
                type: 'text',
                label: 'Bank Name*',
                regLabel: "bankName",
                val: { required: true, minLength: 2 },
                error: true
            }
        ],
        buttonsForm: [
            {
                title: "Cancel",
                type: "button",
                classBtn: "notFill"
            },
            {
                title: "Previous",
                type: "button",
                classBtn: "notFill"
            },
            {
                title: "Next",
                type: "submit",
                classBtn: "fill"
            }
        ]
    },
    thirdStep: {
        titleForm: "Contact",
        inputForm: [
            {
                type: 'text',
                label: 'FAX',
                regLabel: "fax",
            },
            {
                type: 'email',
                label: 'E-mail',
                regLabel: "email",
            },
            {
                type: 'date',
                label: 'Birthday',
                regLabel: "birthday",
            },
            {
                type: 'text',
                label: 'Homepage',
                regLabel: "homepage",
            },
        ],
        buttonsForm: [
            {
                title: "Cancel",
                type: "button",
                classBtn: "notFill"
            },
            {
                title: "Previous",
                type: "button",
                classBtn: "notFill"
            },
            {
                title: "Save",
                type: "submit",
                classBtn: "fill"
            }
        ]
    }
}

interface Props {
    onClose: (value: boolean) => void;
}

interface IFormData {
    company: string,
    name: string,
    additional: string;
    street: string;
    postalCode: string;
    country: string;
    iban: string;
    bic: string;
    bankName: string;
    fax: string;
    email: string;
    birthday: string;
    homepage: string;
};

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
            <label>{label}</label>
        <input type={type} {...register(regLabel, val)} />
        {error && errors[regLabel] && <i>This field is required</i>}
        </>
)
    
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

const ModalWindow = ({onClose}:Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    const formCreator = (step: 'firstStep' | 'secodStep' | 'thirdStep') => {
        const { titleForm, inputForm, selectForm, buttonsForm } = formConfing[step];
        return (
        <>
                {<h3>{titleForm}</h3>},
                <form onSubmit={onSubmit} className="flexBox">
                    {inputForm?.map((elem, idx) => {
                        return <Input
                            key={`${elem.label}-${idx}`}
                            type={elem.type}
                            label={elem.label}
                            regLabel={elem.regLabel}
                            register={register}
                            val={elem.val}
                            errors={errors}
                            error />
                    })}
                    {selectForm?.map((elem, idx) => {
                        return <Select
                            key={idx}
                            label={elem.label}
                            optionSelect={elem.optionSelect}
                            regLabel={elem.regLabel}
                            {...register(elem.regLabel)}
                            
                        />
                    })}
                    <div>
                    {buttonsForm?.map((elem, idx) => { 
                        return  <Button
                                key={`${elem.title}-${idx}`}
                                classBtn={elem.classBtn}
                                type ={elem.type}
                                title={elem.title}
                            />
                    })}
                    </div>
                </form>
        </>
    )}

    return (
        <Portal>
            {/* <div className="wrapper-modal" onClick={()=>onClose(false)}> */}
            <div className="wrapper-modal">
                <div className="button-wrapper"><Button onHandleClick={() => onClose(false)} classBtn={'notFill'} icon={"iconClothe"} /></div>
                { formCreator('firstStep')}
                {/* <h3>Invoice Address</h3>
                <form onSubmit={onSubmit} className="flexBox">
                        <label>Company*</label>
                        <input {...register("company", { required: true, minLength: 2 })} />
                        { errors.company && <i>This field is required</i>}
                        <label>Name*</label>
                        <input {...register("name", { required: true, minLength: 2 })} />
                        { errors.name && <i>This field is required</i>}
                        <label>Additional</label>
                        <input {...register("additional")} />
                        <label>Street</label>
                        <input {...register("street")} />
                        <label>Postal Code</label>
                        <input {...register("postalCode")} />
                        <label>Country</label>
                        <select {...register("country")} >
                            <option value="ukraine">Ukraine</option>
                            <option value="germany">Germany</option>
                            <option value="france">France</option>
                            <option value="unitedKingdom">United Kingdom</option>
                            <option value="other">other</option>
                        </select>
                    <Button classBtn={'notFill'} title={"Next"} type={ "button"} />
                </form>
                <h3>Bank Data</h3>
                <form onSubmit={onSubmit} className="flexBox">
                        <label>IBAN*</label>
                        <input {...register("iban", { required: true, minLength: 2 })} />
                        { errors.iban && <i>This field is required</i>}
                        <label>BIC*</label>
                        <input {...register("bic", { required: true, minLength: 2 })} />
                        { errors.bic && <i>This field is required</i>}
                        <label>Bank Name*</label>
                        <input {...register("bankName", { required: true, minLength: 2 })} />
                        { errors.bankName && <i>This field is required</i>}
                    <Button classBtn={'notFill'} title={"Next"} type={ "button"} />
                </form>
                <h3>Contact</h3>
                <form onSubmit={onSubmit} className="flexBox">
                        <label>FAX</label>
                        <input {...register("fax")} />
                        <label>E-mail</label>
                        <input type="email" {...register("email")} />
                        <label>Birthday</label>
                        <input type="date" {...register("birthday")} />
                        <label>Homepage</label>
                        <input {...register("homepage")} />
                    <Button classBtn={'notFill'} title={"Next"} type={ "submit"} />
                </form> */}
            </div>
        </Portal>
    );
}

export default ModalWindow;

