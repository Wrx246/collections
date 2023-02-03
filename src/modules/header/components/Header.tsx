import { AppBar, Toolbar, Grid } from '@mui/material';
import { SwitchWidget } from '../../../modules/themeSwitcher';
import { LocaleSelect } from '../../localization';
import { AvatarButton } from './AvatarButton';
import { HomeButton } from './HomeButton';
import { LogoutButton } from './LogoutButton';
import { Search } from './Search';

export const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container sx={{pt: 2, pb: 2}} justifyContent='space-between' alignItems='center'>
                    <Grid item xl={0}>
                        <HomeButton />
                    </Grid>
                    <Grid item xl={8.5} lg={8} md={7} sm={5} xs={4}>
                        <Search />
                    </Grid>
                    <Grid item xl={1}>
                        <LocaleSelect />
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