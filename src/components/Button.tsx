import iconDel from '../assets/svg/icon-Del.svg'
import iconClothe from '../assets/svg/icon-Clothe.svg'


interface Props {
    onHandleClick?: React.MouseEventHandler<HTMLButtonElement>;
    classBtn?: 'fill' | 'notFill';
    title?: string;
    icon?: 'iconDel' | 'iconClothe';
    type?: "button" | "submit" | "reset"
}

const Button = ({
    onHandleClick,
    classBtn = 'fill',
    title,
    type = "button",
    icon
}: Props) => {

    return (
        <div className="ButtonWrapper">
        <button
            type={type}
            className={`${classBtn} btnCommon`}
            onClick={onHandleClick}
        >
        {!!title && title}
        {(icon === 'iconDel') && <span className={``}>{<img src={iconDel} alt="iconDel" />}</span>}
        {(icon === 'iconClothe') && <span className={``}>{<img src={iconClothe} alt="iconDel" />}</span>}
        </button>
        </div>
    );
};
export default Button;