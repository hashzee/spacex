import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {AppBar, Toolbar, Grid, Tabs, Tab } from "@material-ui/core";
import "./../App.css";

import spaceXlogo from "./../images/spacex.png";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor:'#252525',
      borderBottom:"5px solid #1a5587",
    },
    Tabs: {
      marginTop: '10px',
      float:'right',
    },
    title: {
      flexGrow: 1,
    },

  })
);

type NavProps = {
  status: string,
  handleClick: (st:string)=>void
}

export default function ButtonAppBar({ status,handleClick }: NavProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
      <Toolbar>
          <Grid justify={"space-between"} container>
            <Grid xs={6} item>
              <img
                className="logo"
                src={spaceXlogo}
                alt="SpaceX"
              />
            </Grid>
            <Grid xs={6} item>
              <Grid container justify={"flex-end"}>
                <Tabs className={classes.Tabs} aria-label="Navigation Tabs">
                  <Tab label={"Upcoming"} className={(status==='upcoming')?'active':''} onClick={()=>handleClick('upcoming')} value='0' />
                  <Tab label={"Past"} className={(status==='past')?'active':''} onClick={()=>handleClick('past')} value='1' />
                </Tabs>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
