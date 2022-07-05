import '../style/Container.css'


interface Props {
    children: React.ReactNode;
}

const Container = ({ children }:Props) => {
    return (
        <div className='conatinerWrapper'>
            {children}
        </div>
    );
}

export default Container;