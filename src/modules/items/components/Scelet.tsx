import { Grid, Card, CardContent, Button, CardActions, Skeleton} from "@mui/material";

export const Scelet = () => {

    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardContent>
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
                <Skeleton variant="rounded" width={210} height={60} />
            </CardContent>
            <Grid container justifyContent='space-between' sx={{ pl: 1 }}>
                <CardActions>
                    <Skeleton variant="rounded" width={50} height={20} sx={{ fontSize: '1rem' }} />
                </CardActions>
                <CardActions>
                    <Button size="small" disabled>Learn More</Button>
                </CardActions>
            </Grid>
        </Card>
    )
}