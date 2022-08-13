import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Slides from './Slides';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
  return (
    <>
        <Navbar/>
        <Slides/>
           <Stack direction="row" spacing={3} sx={{backgroundColor:"#808080"}}>
              <Paper>
                    <Card sx={{ maxWidth: 250,marginLeft:10,paddingRight:5 }}>
                        <CardMedia
                            component="img"
                            alt="Education"
                            height="200"
                            image="../image/CardContent/Education.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Free Education
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            We provide free Education those Student required.
                            </Typography>
                        </CardContent>
                        <Link to='/Freeeducation'>
                        <CardActions style={{float: 'right'}}>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small">View More</Button>
                        </CardActions>
                        </Link>
                   </Card>
            </Paper>
            <Paper>
                    <Card sx={{ maxWidth:250,marginLeft:10,paddingRight:5,}}>
                        <CardMedia
                            component="img"
                            alt="Schoralship"
                            height="200"
                            image="../image/CardContent/Scholarship.png"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Scholarship
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            We provide Scholarship those Student required and also which student family background not good.
                            </Typography>
                        </CardContent>
                        <Link to='/Scholarship'>
                        <CardActions style={{float: 'right'}}>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small">View More</Button>
                        </CardActions>
                        </Link>
                   </Card>
            </Paper>
            <Paper>
                    <Card sx={{ maxWidth: 250,marginLeft:10,paddingRight:5 }}>
                        <CardMedia
                            component="img"
                            alt="Trip"
                            height="200"
                            image="../image/CardContent/Trip.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Free Trip
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                             Every year all teacher and student goes for trip.
                            </Typography>
                        </CardContent>
                        <Link to='/FreeTrip'>
                        <CardActions style={{float: 'right'}}>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small">View More</Button>
                        </CardActions>
                        </Link>
                   </Card>
            </Paper>
            <Paper>
                    <Card sx={{ maxWidth:250,ml:10,pr:5 }}>
                        <CardMedia
                            component="img"
                            alt="Education"
                            height="200"
                            image="../image/CardContent/Help.jpg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                             Help
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            We are always help needy people.
                            </Typography>
                        </CardContent>
                        <Link to='/Help'>
                        <CardActions style={{float: 'right'}}>
                            {/* <Button size="small">Share</Button> */}
                            <Button size="small">View More</Button>
                        </CardActions>
                        </Link>
                   </Card>
            </Paper>
            
       </Stack><br/><br/>
       <Typography style={{fontSize:20, textAlign:'justify',padding:15, backgroundColor:"whitesmoke"}}>
            
              Disha Foundation is a registered non-profit organization working with various marginalized social groups mainly migrant workers, unorganised sector workers, persons with disabilities, and prison inmates. The key issues Disha addresses is health, livelihood, food security, education, improving living conditions and access to public services. Disha has initiated several direct interventions with communities with key focus on empowering them to access the available resources for their holistic development. Disha makes special efforts to actively engage local, state and national government authorities towards bringing policy reforms and changes to ensure inclusive development among marginal communities.
            
       </Typography>
       <Footer/>
    </>
  )
}

export default Home