import {
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  CastleOutlined,
  CheckOutlined,
  CircleOutlined,
  ColorizeOutlined,
  PentagonOutlined,
  QuestionMarkOutlined,
  SquareOutlined,
  WarningAmberOutlined,
} from "@mui/icons-material";

import { useTargetValue } from "../../hooks/useTargetValue";
import { useState } from "react";

export function EasyIcon({ sx = {}, ...rest }) {
  return <CircleOutlined sx={{ color: "limegreen", ...sx }} {...rest} />;
}

export function MediumIcon({ sx = {}, ...rest }) {
  return <SquareOutlined sx={{ color: "gold", ...sx }} {...rest} />;
}

export function HardIcon({ sx = {}, ...rest }) {
  return <PentagonOutlined sx={{ color: "red", ...sx }} {...rest} />;
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

const pointsMapper = (point, i) => {
  const size = 16;
  const rows = 2;
  const cols = point / rows;
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
        <Grid item xs={1} maxWidth="min-content" key={j}>
          {i === 0 && <EasyIcon sx={{ fontSize: size }} />}
          {i === 1 && <MediumIcon sx={{ fontSize: size }} />}
          {i === 2 && <HardIcon sx={{ fontSize: size }} />}
        </Grid>
      ))}
    </Grid>
  );
};

const encounterMapper = (encounter) => {
  switch (encounter) {
    case "boss":
      return <CastleOutlined />;
    case "combat":
      return <ColorizeOutlined />;
    case "peril":
      return <WarningAmberOutlined />;
    default:
      return <QuestionMarkOutlined />;
  }
};

export function Encounters({ list = [] }) {
  return (
    <Stack direction="row" className="encounters">
      {list.map(encounterMapper)}
    </Stack>
  );
}

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
        <Group {...groups[0]} />
        <Group {...groups[1]} />
        <Group {...groups[2]} />
        <Group {...groups[3]} />
        <CampaignSheetFooter {...{ bosses, useDefeated, usePlayed }} />
      </Stack>
    </Container>
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
