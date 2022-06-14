import { useState } from "react";
import { Container, Stack } from "@mui/material";

import CampaignSheetHead from "./campaign-sheet-head";
import CampaignSheetBody from "./campaign-sheet-body";
import CampaignSheetFooter from "./campaign-sheet-footer";
import useTargetValue from "../../../hooks/useTargetValue";
import sheets from "./sheets";

export function CampaignSheet() {
  const useHero = useTargetValue("");
  const useName = useTargetValue("");
  const { groups, bosses } = sheets.dungeon;
  const useDefeated = useState([false, false, false, false, false]);
  const usePlayed = useState(0);

  return (
    <Container className="Campaign-sheet" maxWidth="sm">
      <Stack spacing={1}>
        <CampaignSheetHead {...{ useHero, useName }} />
        <CampaignSheetBody {...{ groups }} />
        <CampaignSheetFooter {...{ bosses, useDefeated, usePlayed }} />
      </Stack>
    </Container>
  );
}

export default CampaignSheet;
