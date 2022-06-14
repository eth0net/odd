import Group from "./group";

export function CampaignSheetBody({ groups }) {
  if (groups?.length < 4) return null;
  return (
    <>
      <Group {...groups[0]} />
      <Group {...groups[1]} />
      <Group {...groups[2]} />
      <Group {...groups[3]} />
    </>
  );
}

export default CampaignSheetBody;
