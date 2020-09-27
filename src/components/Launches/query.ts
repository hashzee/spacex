import gql from "graphql-tag";

export const QUERY_LAUNCH_LIST = gql`
  query LaunchList {
    launches(sort: "launch_date_utc") {
      links {
        mission_patch_small
        mission_patch
        flickr_images
      }
      flight_number
      details
      launch_year
      launch_success
      mission_name
      mission_id
      rocket {
        rocket_name
      }
      launch_date_utc
      launch_date_unix
    }
  }
`;

/*
{

}

*/
