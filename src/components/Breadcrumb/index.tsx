import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {/*<Typography color="text.primary">Accueil</Typography>
      <Typography color="text.primary">Média</Typography>
      <Typography color="text.primary">Communiqués de presse</Typography>*/}
      <text className="text-xs flex">Accueil</text>
      <text className="text-xs flex">Média</text>
      <text className="text-xs flex">Communiqués de presse</text>
    </Breadcrumbs>
  );
};
export default Breadcrumb;
