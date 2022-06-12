import { Stack, TextField, Typography } from "@mui/material";
import {
  CheckOutlined,
  CircleOutlined,
  PentagonOutlined,
  SquareOutlined,
} from "@mui/icons-material";

import { useTargetValue } from "../../hooks/useTargetValue";
import { useMemo, useState } from "react";

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
  forest: {
    groups: [
      {
        name: "BASIC",
        talents: [
          {
            description: "Start each game with any one Basic Skill.",
            points: [6],
          },
          {
            description: "You have one extra health.",
            points: [6, 4],
          },
          {
            description: "You may have one extra skill or item.",
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "AWARENESS",
        talents: [
          {
            description: "Once per floor, discard an open door.",
            points: [6],
          },
          {
            description: "When you replace an item/skill, heal one damage.",
            points: [6, 2],
          },
          {
            description: "Ignore the first damage from stairs each floor.",
            points: [6, 4],
          },
          {
            description: "Increase your resist poison rolls by 1.",
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "AGGRESSION",
        talents: [
          {
            description: "Reroll two dice.",
            encounters: ["combat"],
            points: [6],
          },
          {
            description: "Gain [melee]2 or [magic]2 or [agility]2.",
            encounters: ["combat", "peril"],
            points: [6, 2],
          },
          {
            description: "Roll [hero].",
            encounters: ["combat"],
            points: [6, 4],
          },
          {
            description: "Reduce each large box by 1.",
            encounters: ["combat"],
            points: [6, 4, 4],
          },
        ],
      },
      {
        name: "SAVVY",
        talents: [
          {
            description: "Swap the values of two dice.",
            encounters: ["combat"],
            points: [6],
          },
          {
            description: "Increase a [hero] by 1.",
            encounters: ["combat", "peril"],
            points: [6, 2],
          },
          {
            description: "Use two dice to fill a small challenge box.",
            encounters: ["combat"],
            points: [6, 4],
          },
          {
            description: "Reduce each armor box by 1.",
            encounters: ["combat"],
            points: [6, 4, 4],
          },
        ],
      },
    ],
    bosses: ["Golem", "Poison", "Tree", "Giant", "Dragon"],
  },
};

export function Talent({ name, description, ...rest }) {
  return (
    <Stack direction="row" spacing={1} {...rest}>
      {name && <Typography fontWeight="bold">{name}:</Typography>}
      <Typography>{description}</Typography>
    </Stack>
  );
}

export function Group({ name, talents = [] }) {
  const mapper = (talent, idx) => <Talent {...talent} key={idx} />;

  return (
    <Stack direction="row" spacing={1}>
      <Typography
        border={1}
        borderRadius={2}
        padding={1}
        textAlign="center"
        sx={{ transform: "rotate(180deg)", writingMode: "vertical-rl" }}
      >
        {name}
      </Typography>
      <Stack border={1} borderRadius={2} padding={1} flex={1}>
        {talents.map(mapper)}
      </Stack>
    </Stack>
  );
}

const groupMapper = (group, idx) => <Group {...group} key={idx} />;

export function CampaignSheetFooter() {
  return (
    <Stack>
      <Stack direction="row">{/*bosses*/}</Stack>
      <Stack direction="row">{/*games played*/}</Stack>
    </Stack>
  );
}

export function CampaignSheet() {
  const useHero = useTargetValue("");
  const useName = useTargetValue("");
  const { groups } = sheets.dungeon;
  const useDefeated = useState([0, 0, 0, 0, 0]);
  const usePlayed = useState(0);

  return (
    <Stack className="Campaign-sheet" spacing={1} maxWidth="sm">
      <CampaignSheetHead {...{ useHero, useName }} />
      {groups.map(groupMapper)}
      <CampaignSheetFooter {...{ useDefeated, usePlayed }} />
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
