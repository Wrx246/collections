import { AppBar, Toolbar, Grid, useMediaQuery } from '@mui/material';
import { SwitchWidget } from '../../../modules/themeSwitcher';
import { LocaleSelect } from '../../localization';
import { AvatarButton } from './AvatarButton';
import { Burger } from './Burger';
import { HomeButton } from './HomeButton';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';
import { Search } from './Search';

export const Header = () => {
    const matches = useMediaQuery('(min-width:700px)');
    const name = JSON.parse(JSON.stringify(localStorage.getItem('user-data')))

    return (
        <AppBar position="static">
            <Toolbar>
                {matches ? <Grid container sx={{ pt: 2, pb: 2 }} justifyContent='space-between' alignItems='center'>
                    <Grid item xl={0}>
                        <HomeButton />
                    </Grid>
                    <Grid item xl={8.5} lg={7} md={6} sm={4} xs={4}>
                        <Search />
                    </Grid>
                    <Grid item xl={1}>
                        <LocaleSelect />
                    </Grid>
                    <Grid item xl={0}>
                        <SwitchWidget />
                    </Grid>
                    {name && <Grid item xl={0}>
                        <AvatarButton />
                    </Grid>}
                    {name ? <Grid item xl={0}>
                        <LogoutButton />
                    </Grid>
                        : <Grid item xl={0}>
                            <LoginButton />
                        </Grid>
                    }
                </Grid>
                    : <Grid container sx={{ pt: 2, pb: 2 }} justifyContent='space-between' alignItems='center'>
                        <Grid item xl={0}>
                            <Burger />
                        </Grid>
                        <Grid item xl={8.5} lg={7} md={6} sm={4} xs={4}>
                            <Search />
                        </Grid>
                    </Grid>}

            </Toolbar>
        </AppBar>
    )
}