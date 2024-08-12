import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";

export function CampaignSheetFooter({ bosses, useDefeated, usePlayed }) {
  const [defeated, setDefeated] = useDefeated;
  const [played, setPlayed] = usePlayed;

  return (
    <Stack>
      <Stack direction="row" alignItems="center">
        <Typography fontWeight="bold">Bosses defeated:</Typography>
        <FormControlLabel
          control={<Checkbox checked={defeated[0]} size="small" />}
          label={bosses[0]}
        />
        <FormControlLabel
          control={<Checkbox checked={defeated[1]} size="small" />}
          label={bosses[1]}
        />
        <FormControlLabel
          control={<Checkbox checked={defeated[2]} size="small" />}
          label={bosses[2]}
        />
        <FormControlLabel
          control={<Checkbox checked={defeated[3]} size="small" />}
          label={bosses[3]}
        />
        <FormControlLabel
          control={<Checkbox checked={defeated[4]} size="small" />}
          label={bosses[4]}
        />
      </Stack>
      <Stack direction="row">
        <Typography fontWeight="bold">Games played: {played}</Typography>
      </Stack>
    </Stack>
  );
}

export default CampaignSheetFooter;
