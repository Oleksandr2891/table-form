import Portal from "./Portal";
import {  useForm } from "react-hook-form";
import Button from "./Button";
import '../style/ModalWindow.css';
import { useState, useEffect } from "react";
import { IFormConfig, IFormData, Step, TPartFormData } from "../assets/types";
import Input from "./Input";
import Select from "./Select";


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
                label: 'Country',
                regLabel: 'country',
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
    secondStep: {
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

const ModalWindow = ({onClose}:Props) => {
    const { register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors } } = useForm<IFormData>();
    
    const [currentStep, setCurrentStep] = useState<Step>('firstStep');
    const [resetCurrentStep, setResetCurrentStep] = useState<Step | ''>("");
    const [firstForm, setFirstForm] = useState<TPartFormData>({});
    const [secondForm, setSecondForm] = useState<TPartFormData>({});
    const [thirdForm, setThirdForm] = useState<TPartFormData>({});
    
    useEffect(() => {
        switch (resetCurrentStep) {
            case 'firstStep':
                setFirstForm({})
                    reset({
                        company: '',
                        name: '',
                        additional: '',
                        street: '',
                        postalCode: '',
                        country: ''
                    });
                setResetCurrentStep("");
                    break;
            case 'secondStep':
                setSecondForm({})
                    reset({
                        iban: '',
                        bic: '',
                        bankName: ''
                    });
                setResetCurrentStep("")
                    break;
            case 'thirdStep':
                setThirdForm({})
                    reset({
                        fax: '',
                        email: '',
                        birthday: '',
                        homepage: '',
                    });
                setResetCurrentStep("")
                    break;
                    default:
                break;
            }
    }, [reset, resetCurrentStep]);
        
    const onSubmit = handleSubmit(data => {
            const Row = {...firstForm, ...secondForm, ...thirdForm}
            switch (currentStep) {
                case 'firstStep':
                    setFirstForm(data);
                    setCurrentStep('secondStep');
                    break;
                case 'secondStep':
                    setSecondForm(data);
                    setCurrentStep('thirdStep');
                    break;
                case 'thirdStep':
                    setThirdForm(data);
                    setResetCurrentStep('firstStep');
                    setResetCurrentStep('secondStep');
                    setResetCurrentStep('thirdStep');
                    console.log(Row);
                    onClose(false);
                    break;
                default:
                    break;
            }
        });

    const formCreator = (step: Step) => {
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
                            type={elem.type}
                            title={elem.title}
                            onHandleClick={(() => { ((elem.title === 'Previous') && returnToPreviosForm()) ||  ((elem.title === 'Cancel') && resetForms())})}
                            />
                    })}
                    </div>
                </form>
        </>
        )
    }
    
    const returnToPreviosForm = () => {
            switch (currentStep) {
                        case 'secondStep':
                            setCurrentStep('firstStep');
                            setValue("company", firstForm.company);
                            setValue("name", firstForm.name);
                            setValue("additional", firstForm.additional);
                            setValue("street", firstForm.street);
                            setValue("postalCode", firstForm.postalCode);
                            setValue("country", firstForm.country);
                            break;
                case 'thirdStep':
                            setCurrentStep('secondStep');
                            setValue("iban", secondForm.iban);
                            setValue("bic", secondForm.bic);
                            setValue("bankName", secondForm.bankName);
                            break;
                        default:
                            break;
            }
    }

    const resetForms = () => {
                    switch (currentStep) {
                        case 'firstStep':
                            setResetCurrentStep('firstStep');
                            break;
                        case 'secondStep':
                            setResetCurrentStep('secondStep');
                            break;
                        case 'thirdStep':
                            setResetCurrentStep('thirdStep');
                            break;
                        default:
                            break;
            }
    }

    return (
        <Portal>
            {/* <div className="wrapper-modal" onClick={()=>onClose(false)}> */}
            <div className="wrapper-modal">
                <div className="button-wrapper"><Button onHandleClick={() => onClose(false)} classBtn={'notFill'} icon={"iconClothe"} /></div>
                { formCreator(currentStep)}
            </div>
        </Portal>
    );
}

export default ModalWindow;

