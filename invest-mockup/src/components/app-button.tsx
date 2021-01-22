import { withStyles } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

const AppButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);

export default AppButton;
