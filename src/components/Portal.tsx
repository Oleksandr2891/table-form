import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("portal-container");

interface Prop {
    children: React.ReactNode;
}

const Portal = ({ children }:Prop) => {
    const newElement = document.createElement("div");

    useEffect(() => {
        modalRoot && modalRoot.appendChild(newElement)
        return () => { modalRoot && modalRoot.removeChild(newElement) }
    });

    return ReactDOM.createPortal(children, newElement)
}

export default Portal;