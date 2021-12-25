import Button, { ButtonProps } from "@mui/material/Button";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.success.main,
  "&:hover": {
    backgroundColor: theme.palette.warning.main,
  },
}));

export default ColorButton;
