import { Stack, TextField, Typography } from "@mui/material";
import {
  CheckOutlined,
  CircleOutlined,
  PentagonOutlined,
  SquareOutlined,
} from "@mui/icons-material";

import { useTargetValue } from "../../hooks/useTargetValue";

export function EasyIcon(props) {
  return <CircleOutlined sx={{ color: "limegreen" }} {...props} />;
}

export function MediumIcon(props) {
  return <SquareOutlined sx={{ color: "gold" }} {...props} />;
}

export function HardIcon(props) {
  return <PentagonOutlined sx={{ color: "red" }} {...props} />;
}

export function LabelledIcon({
  label = "",
  after = false,
  icon: Icon,
  count = 1,
  ...rest
}) {
  const typography = <Typography>{label}</Typography>;
  const icons = [...Array(count)].map((v, i) => <Icon key={i} />);

  return (
    <Stack direction="row" spacing={1} {...rest}>
      {!after && typography}
      <Stack direction="row">{icons}</Stack>
      {after && typography}
    </Stack>
  );
}

export function CampaignSheetHead({ useHero, useName }) {
  const [hero, setHero] = useHero;
  const [name, setName] = useName;

  return (
    <Stack direction="row" className="Campaign-sheet-head" spacing={1}>
      <Stack spacing={1}>
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
      <Stack spacing={1}>
        <LabelledIcon label="Any Dungeon" after icon={EasyIcon} />
        <LabelledIcon label="Medium / Hard" after icon={MediumIcon} />
        <LabelledIcon label="Hard only" after icon={HardIcon} />
      </Stack>
      <Stack spacing={1}>
        <LabelledIcon label="Complete a Floor" icon={CheckOutlined} />
        <LabelledIcon label="Level Up" icon={CheckOutlined} />
        <LabelledIcon label="Defeat a Boss" icon={CheckOutlined} count={3} />
      </Stack>
    </Stack>
  );
}

const sheets = {
  dungeon: {
    groups: [
      {
        name: "BASIC",
        talents: [
          {
            name: "Veteran",
            description: "Start each game with any one Basic Skill.",
            points: [6],
          },
          {
            name: "Durability",
            description: "You have one extra health.",
            points: [6, 4],
          },
          {
            name: "Crafty",
            description: "You may have one extra skill or item.",
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "HEALING",
        talents: [
          {
            name: "Prepared",
            description: "Start each game with an extra potion.",
            points: [6],
          },
          {
            name: "First Aid",
            description: "When you use a potion, heal one damage.",
            points: [6, 2],
          },
          {
            name: "Recovery",
            description: "When you descend, heal one damage.",
            points: [6, 4],
          },
          {
            name: "Grit",
            description: "After each boss round, heal one damage.",
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "COMBAT",
        talents: [
          {
            name: "Guile",
            description: "Use a [melee] as an [agility].",
            encounters: ["combat"],
            points: [6],
          },
          {
            name: "Fortitude",
            description: "Reroll all your [melee]1s and [melee]2s.",
            encounters: ["combat"],
            points: [6, 2],
          },
          {
            name: "Planning",
            description: "Gain a [hero]3.",
            encounters: ["combat"],
            points: [6, 4],
          },
          {
            name: "Direct Hit",
            description: "Increase any die by one.",
            encounters: ["combat"],
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "DUNGEON",
        talents: [
          {
            name: "Cunning",
            description: "Change a 5 into a 6.",
            encounters: ["peril"],
            points: [6],
          },
          {
            name: "Speed",
            description: "Ignore one [time] (even a choice cost).",
            encounters: ["peril"],
            points: [6, 2],
          },
          {
            name: "Knowledge",
            description: "Gain [hero] in each round.",
            encounters: ["boss"],
            points: [6, 4],
          },
          {
            name: "Foresight",
            description: "Reroll a die.",
            encounters: ["peril"],
            points: [6, 4, 4],
          },
        ],
      },
    ],
    bosses: ["Dragon", "Yeti", "Hydra", "Lich", "Minotaur"],
  },
  forest: {},
};

export function Talent({ name, talent, ...rest }) {
  return (
    <Stack direction="row" {...rest}>
      {talent?.name && <Typography>{talent?.name}:</Typography>}
      <Typography>{talent?.description}</Typography>
    </Stack>
  );
}

export function CampaignSheetGroup({ group }) {
  return (
    <Stack direction="row">
      <Typography>{group?.name}</Typography>
      <Stack>
        {group?.talents.map((talent, key) => (
          <Talent {...{ talent, key }} />
        ))}
      </Stack>
    </Stack>
  );
}

export function CampaignSheet() {
  const useHero = useTargetValue("");
  const useName = useTargetValue("");
  const { groups } = sheets.dungeon;

  return (
    <Stack className="Campaign-sheet">
      <CampaignSheetHead {...{ useHero, useName }} />
      {groups.map((group, key) => (
        <CampaignSheetGroup {...{ group, key }} />
      ))}
    </Stack>
  );
}

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
