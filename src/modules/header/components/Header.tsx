import { AppBar, Toolbar, Grid } from '@mui/material';
import { SwitchWidget } from '../../../modules/themeSwitcher';
import { AvatarButton } from './AvatarButton';
import { HomeButton } from './HomeButton';
import { LogoutButton } from './LogoutButton';
import { Search } from './Search';

export const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Grid item xl={0}>
                        <HomeButton />
                    </Grid>
                    <Grid item xl={9.5} lg={9} md={8} sm={6} xs={5}>
                        <Search />
                    </Grid>
                    <Grid item xl={0}>
                        <SwitchWidget />
                    </Grid>
                    <Grid item xl={0}>
                        <AvatarButton />
                    </Grid>
                    <Grid item xl={0}>
                        <LogoutButton />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}