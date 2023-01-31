import Header from "./Header"

type ModalTypes = {
    children: string | JSX.Element | JSX.Element[]
}

const Modal = ({children}: ModalTypes) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default Modal