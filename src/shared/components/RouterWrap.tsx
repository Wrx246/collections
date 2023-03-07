import { Grid } from '@mui/material'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SearchItems } from '../../modules/items'
import ProtectedRoutes from '../../pages/ProtectedRoutes'
import { adminPath, collectionPath, homePath, itemPath, loginPath, registrationPath, searchPath, userPath } from '../constants/Paths'
import { Admin, Collection, Item, Login, Main, Registration, User } from '../helpers/Lazy'
import Modal from './Modal'
import Preloader from './Preloader'

export const RouterWrap = () => {
    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}>
            <Suspense fallback={<Preloader />}>
                <Routes>
                    <Route path={loginPath} element={<Login />} />
                    <Route path={registrationPath} element={<Registration />} />
                    <Route path={homePath} element={<Modal><Main /></Modal>} />
                    <Route path={`/${collectionPath}`} element={<Modal><Collection /></Modal>} />
                    <Route path={`/${itemPath}`} element={<Modal><Item /></Modal>} />
                    <Route path={`/${searchPath}`} element={<Modal><SearchItems /></Modal>} />
                    <Route path={`/${adminPath}`} element={<Modal><Admin /></Modal>} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path={userPath} element={<Modal><User /></Modal>} />
                    </Route>
                </Routes>
            </Suspense>
        </Grid>
    )
}