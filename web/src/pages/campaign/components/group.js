import { Grid, Stack, Typography } from "@mui/material";

import Talent from "./talent";

export function Group({ name, talents = [] }) {
  return (
    <Stack direction="row" spacing={1} className="group">
      <Typography
        border={1}
        borderRadius={2}
        padding={1}
        textAlign="center"
        sx={{ transform: "rotate(180deg)", writingMode: "vertical-rl" }}
      >
        {name}
      </Typography>
      <Grid
        container
        columns={24}
        border={1}
        borderRadius={2}
        spacing={1}
        paddingBottom={1}
        paddingRight={1}
        flex={1}
      >
        <Talent {...talents[0]} />
        <Talent {...talents[1]} />
        <Talent {...talents[2]} />
        {talents[3] && <Talent {...talents[3]} />}
      </Grid>
    </Stack>
  );
}

export default Group;
