import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Card, Grid} from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin:'10px',
    backgroundColor:'#222222',
    color:'#A5A5A5',
    borderBottom:"1px dotted #1a5587",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    width: 80,
    height: 80,
    minWidth: 80,
    minHeight: 80,
    float:'left',
    padding:'0',
    marginTop:'10px',
  }
}));

const missionStatus = (result:boolean, unix:number) => {
  var timestamp = Math.round((new Date()).getTime() / 1000);
  //console.log(timestamp,unix);
  if(unix > timestamp){
    return <span style={{color:'yellow'}}> Upcoming</span>;
  }  
  else if(result && unix < timestamp){
    return <span style={{color:'green'}}> Successfull</span>;
  }
  else if(!result && unix < timestamp){
    return <span style={{color:'red'}}> Failure</span>;
  }
}


export default function LaunchInfo({
  status,
  logo,
  details,
  launch_date,
  flight_number,
  mission_name,
  launch_year,
  launch_success,
}: any) {
  const classes = useStyles();
  var timestamp = Math.round((new Date()).getTime() / 1000);
  if((status === 'past' && launch_date < timestamp) || (status === 'upcoming' && launch_date > timestamp))
  {
  return (
    <Grid item xs={12}>
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={logo}
        title={mission_name}
      />      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {mission_name}
          </Typography>
          <Typography>
            Launch success : {missionStatus(launch_success,launch_date)}
          </Typography>          
          <Typography variant="subtitle1">
            <Moment unix>{launch_date}</Moment>
            
          </Typography>
          <Typography>
            {details}
          </Typography>          
        </CardContent>
      </div>
    </Card> 
    </Grid>   
  )
}else{
  return (null);
};

}
