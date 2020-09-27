import React from "react";
import Grid from '@material-ui/core/Grid';
import { useLaunchListQuery } from "../../generated/graphql";
import Launch from "./Launch";
import "../../App.css";

import loadingIcon from "../../images/loading.gif";

type LaunchesProps = {
  status: string
}

const Launches = ({status}:LaunchesProps) => {
  const { data, error, loading } = useLaunchListQuery();
  if (loading) {
    return <div className='loading'><img src={loadingIcon} alt='Loading...' /></div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Launches</h1>
      <br />
      <Grid container spacing={3}>
      {data?.launches?.map(
        ({flight_number,mission_name,launch_year,details,launch_success,links,launch_date_unix}: any, index:number) => (
            <Launch key={index} 
              status = {status}
              logo={links.mission_patch_small}
              flight_number={flight_number}
              mission_name={mission_name}
              launch_year={launch_year}
              details={details}
              launch_success={launch_success}
              launch_date={launch_date_unix}
            />
        )
      )}
       </Grid>
    </>
  );
};

export default Launches;