import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    //type: "dark"
     primary: {
      main: '#43a047',
    },
    secondary: {
      main: '#b0bec5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
    },
  }, 
});

export default theme;
