import { Stack } from "@mui/material";

import { BossIcon, CombatIcon, PerilIcon, UnknownIcon } from "./icons";

const encounterMapper = (encounter, idx) => {
  let Icon;
  switch (encounter) {
    case "boss":
      Icon = BossIcon;
      break;
    case "combat":
      Icon = CombatIcon;
      break;
    case "peril":
      Icon = PerilIcon;
      break;
    default:
      return UnknownIcon;
  }
  return <Icon key={idx} />;
};

export function Encounters({ list = [] }) {
  return (
    <Stack direction="row" className="encounters">
      {list.map(encounterMapper)}
    </Stack>
  );
}

export default Encounters;
