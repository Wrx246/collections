import Header from "./Header"
import '../shared/styles/Modal.css'

type ModalTypes = {
    children: string | JSX.Element | JSX.Element[]
}

const Modal = ({children}: ModalTypes) => {
    return (
        <div className="modal">
            <Header />
            {children}
        </div>
    )
}

export default Modal