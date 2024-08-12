import { Stack, TextField } from "@mui/material";
import LabelledIcon from "./labelled-icon";
import { CheckedIcon, EasyIcon, HardIcon, MediumIcon } from "./icons";

export function CampaignSheetHead({ useHero, useName }) {
  const [hero, setHero] = useHero;
  const [name, setName] = useName;

  return (
    <Stack direction="row" className="Campaign-sheet-head" spacing={1}>
      <Stack spacing={1} flex={1}>
        <TextField
          id="hero"
          label="Hero"
          value={hero}
          onChange={setHero}
          size="small"
          variant="standard"
        />
        <TextField
          id="name"
          label="Name"
          value={name}
          onChange={setName}
          size="small"
          variant="standard"
        />
      </Stack>
      <Stack
        spacing={1}
        borderRight={1}
        paddingRight={1}
        justifyContent="space-evenly"
      >
        <LabelledIcon label="Any Dungeon" after icon={EasyIcon} />
        <LabelledIcon label="Medium / Hard" after icon={MediumIcon} />
        <LabelledIcon label="Hard only" after icon={HardIcon} />
      </Stack>
      <Stack spacing={1} justifyContent="space-evenly">
        <LabelledIcon label="Complete a Floor" icon={CheckedIcon} />
        <LabelledIcon label="Level Up" icon={CheckedIcon} />
        <LabelledIcon label="Defeat a Boss" icon={CheckedIcon} count={3} />
      </Stack>
    </Stack>
  );
}

export default CampaignSheetHead;
