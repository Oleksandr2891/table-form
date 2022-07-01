import { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById("portal-container");

// export Portal: HTMLDivElement {
//   private el!: HTMLDivElement;

//   constructor(props: {}) {
//     super(props);
//     this.el = document.createElement("div");
//   }

//   componentDidMount() {
//     if (modalRoot) {
//       modalRoot.appendChild(this.el);
//     }
//   }

//   componentWillUnmount() {
//     if (modalRoot) {
//       modalRoot.removeChild(this.el);
//     }
//   }
//   render() {
//     return ReactDOM.createPortal(this.props.children, this.el);
//   }
// }

interface Prop {
    children: React.ReactNode;
}

const Portal: FC<Prop> = ({ children }) => {
    const newElement = document.createElement("div");

    useEffect(() => {
    // if (modalRoot) {
    //     modalRoot.appendChild(newElement);
    
    // return modalRoot.removeChild(newElement);
    // }
    });

    return ReactDOM.createPortal(children, newElement)
}

export default Portal;