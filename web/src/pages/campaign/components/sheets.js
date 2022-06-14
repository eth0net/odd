import { AgilityIcon, MagicIcon, MeleeIcon } from "./icons";
import LabelledIcon from "./labelled-icon";

export const sheets = {
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
            description: (
              <>
                Use a <MeleeIcon /> as an <AgilityIcon />.
              </>
            ),
            encounters: ["combat"],
            points: [6],
          },
          {
            name: "Fortitude",
            description: (
              <>
                Reroll all your
                <LabelledIcon
                  icon={MeleeIcon}
                  label={<strong>1s</strong>}
                  after
                />
                and
                <LabelledIcon
                  icon={MeleeIcon}
                  label={<strong>2s</strong>}
                  after
                />
                .
              </>
            ),
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
            description: (
              <>
                Gain <LabelledIcon icon={MeleeIcon} label="2" after />
                or <LabelledIcon icon={MagicIcon} label="2" after />
                or
                <LabelledIcon icon={AgilityIcon} label="2" after />.
              </>
            ),
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

export default sheets;
