import { Stack, Typography } from "@mui/material";

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

export default LabelledIcon;
