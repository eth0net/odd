import { Checkbox, Grid, Stack, Typography } from "@mui/material";

import Encounters from "./encounters";
import { EasyIcon, HardIcon, MediumIcon } from "./icons";

const pointsMapper = (point, i) => {
  const size = 16;
  const rows = 2;
  const cols = point / rows;

  let Icon;
  switch (i) {
    case 0:
      Icon = EasyIcon;
      break;
    case 1:
      Icon = MediumIcon;
      break;
    case 2:
      Icon = HardIcon;
      break;
    default:
      return;
  }

  return (
    <Grid
      container
      columns={cols}
      maxWidth={cols * size}
      maxHeight={rows * size}
      lineHeight={0}
      justifyContent="center"
      key={i}
    >
      {[...Array(point)].map((_, j) => (
        <Grid item xs={1} key={j}>
          <Checkbox
            icon={<Icon sx={{ fontSize: size }} />}
            checkedIcon={<Icon sx={{ fontSize: size }} />}
            sx={{ padding: 0 }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export function Talent({ name, description, points, encounters }) {
  return (
    <>
      <Grid item xs={encounters ? 8 : 6} className="talent-stats">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
        >
          <Stack
            direction="row"
            justifyContent="start"
            className="talent-points"
            flexShrink={0}
          >
            {points.map(pointsMapper)}
          </Stack>
          {encounters && <Encounters list={encounters} />}
        </Stack>
      </Grid>
      <Grid
        item
        xs={encounters ? 16 : 18}
        sx={{ ":not(:last-child)": { borderBottom: 1 } }}
        display="flex"
        alignItems="center"
        className="talent-text"
      >
        <Typography>
          {name && <strong>{name}: </strong>}
          {description}
        </Typography>
      </Grid>
    </>
  );
}

export default Talent;
