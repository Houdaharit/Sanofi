import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Breadcrumb = ({props}: {props: JSX.Element[]}) => {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {/*<Typography color="text.primary">Accueil</Typography>
      <Typography color="text.primary">Média</Typography>
      <Typography color="text.primary">Communiqués de presse</Typography>
      <text className="text-xs flex font-medium">Accueil</text>
      <text className="text-xs flex font-medium">Média</text>
      <text className="text-xs flex font-medium">Communiqués de presse</text>*/}
      {props.map((object, index) => (
        <div key={index}>{object}</div>
      ))}
    </Breadcrumbs>
  );
};
export default Breadcrumb;
