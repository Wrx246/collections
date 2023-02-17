import { Grid } from "@mui/material"
import { Header } from '../../modules/header'

type ModalTypes = {
    children: string | JSX.Element | JSX.Element[]
}

const Modal = ({ children }: ModalTypes) => {

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="start"
            style={{ minHeight: '100vh' }}>
            <Header />
            {children}
        </Grid>
    )
}

export default Modal