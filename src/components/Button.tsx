import iconDel from '../assets/svg/icon-Del.svg'
import iconClothe from '../assets/svg/icon-Clothe.svg'
import "../style/Button.css"


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
    const currentClass = !!title ? `${classBtn} btnCommon` : "btnIcon";
    return (
        <div className="buttonWrapper">
            <button
                type={type}
                className={`${currentClass}`}
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