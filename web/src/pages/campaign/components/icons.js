import {
  AddCircleOutlineOutlined,
  AnchorOutlined,
  ArchitectureOutlined,
  CastleOutlined,
  CheckOutlined,
  CircleOutlined,
  ColorizeOutlined,
  DiamondOutlined,
  DirectionsRunOutlined,
  FavoriteBorderOutlined,
  HourglassFullOutlined,
  PentagonOutlined,
  QuestionMarkOutlined,
  SquareOutlined,
} from "@mui/icons-material";

export function EasyIcon({ sx = {}, ...rest }) {
  return <CircleOutlined sx={{ color: "limegreen", ...sx }} {...rest} />;
}

export function MediumIcon({ sx = {}, ...rest }) {
  return <SquareOutlined sx={{ color: "gold", ...sx }} {...rest} />;
}

export function HardIcon({ sx = {}, ...rest }) {
  return <PentagonOutlined sx={{ color: "red", ...sx }} {...rest} />;
}

export function MeleeIcon({ sx = {}, ...rest }) {
  return <ColorizeOutlined sx={{ color: "yellow", ...sx }} {...rest} />;
}

export function MagicIcon({ sx = {}, ...rest }) {
  return <DiamondOutlined sx={{ color: "blue", ...sx }} {...rest} />;
}

export function AgilityIcon({ sx = {}, ...rest }) {
  return <DirectionsRunOutlined sx={{ color: "purple", ...sx }} {...rest} />;
}

export function HealthIcon({ sx = {}, ...rest }) {
  return <FavoriteBorderOutlined sx={{ color: "red", ...sx }} {...rest} />;
}

export function HeroIcon({ sx = {}, ...rest }) {
  return (
    <AddCircleOutlineOutlined sx={{ color: "slategray", ...sx }} {...rest} />
  );
}

export function TimeIcon({ sx = {}, ...rest }) {
  return <HourglassFullOutlined sx={{ color: "orange", ...sx }} {...rest} />;
}

export function CheckedIcon(props) {
  return <CheckOutlined {...props} />;
}

export function CombatIcon({ sx = {}, ...rest }) {
  return <ArchitectureOutlined sx={{ color: "yellow", ...sx }} {...rest} />;
}

export function PerilIcon({ sx = {}, ...rest }) {
  return <AnchorOutlined sx={{ color: "teal", ...sx }} {...rest} />;
}

export function BossIcon({ sx = {}, ...rest }) {
  return <CastleOutlined sx={{ color: "gray", ...sx }} {...rest} />;
}

export function UnknownIcon(props) {
  return <QuestionMarkOutlined {...props} />;
}
