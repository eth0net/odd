import { Typography } from "@mui/material";

import CampaignSheet from "./components/campaign-sheet";

export function Campaign() {
  return (
    <>
      <Typography variant="h1" textAlign="center">
        Campaign Page
      </Typography>
      <CampaignSheet />
    </>
  );
}

export default Campaign;
