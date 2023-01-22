// Import React library
import React from 'react';
// Import Snackbar and MuiAlert components from Material-UI library
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Import custom styles for this component
import useStyles from './styles';

// CustomizedSnackbar component that takes in 'open' and 'setOpen' props
const CustomizedSnackbar = ({ open, setOpen }) => {
  // Use the imported custom styles
  const classes = useStyles();
  
// Function to handle closing of the Snackbar
  const handleClose = (event, reason) => {
    // If the close event is triggered by a "clickaway" action, do nothing
    if (reason === 'clickaway') {
      return;
    }
// Otherwise, set the 'open' prop to false to close the Snackbar
    setOpen(false);
  };
// Render the Snackbar component with custom success message and handleClose function
  return (
    <div className={classes.root}>
      <Snackbar 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">Transaction successfully created.</MuiAlert>
      </Snackbar>
    </div>
  );
};
// Export the CustomizedSnackbar component
export default CustomizedSnackbar;
