import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import "./css/TimeLine.css";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  primaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align='left'>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className='empresa' variant="body2">
            Delivery Media
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'rgb(8, 93, 121)' }}>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography className='cargo'  >
            Líder Innovación Tecnológica en
            Programatica digital
            </Typography>
            <Typography className='funciones'>
              Google TagManager /
              Google Adsense /
              Google WorkSpace /
               Wordpress
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className='empresa' variant="body2">
             Grand Voyage
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'rgb(8, 93, 121)' }}>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography className='cargo'  >
            Maquetador web
            </Typography>
            <Typography className='funciones'>
              Javascript /
              HTML / CSS /
              Bootstrap              
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className='empresa' variant="body2">
            Free Lance
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'rgb(8, 93, 121)' }}>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography className='cargo'  >
            Desarrollador de app y UX/UI
            </Typography>
            <Typography className='funciones'>
             Figma /
             AdobeXD /
             Flutter
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography className='empresa' variant="body2">
            INDRA
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'rgb(8, 93, 121)' }}>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography className='cargo'  >
            Desarrollador Backend
            </Typography>
            <Typography className='funciones'>
              Cliente la CAIXA /
              Java /
              PL1
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

    </Timeline>
  );
}