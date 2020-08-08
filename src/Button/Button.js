import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        value={props.value}
        onClick={props.onClick}
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        {props.value}
      </Button>
    </div>
  );
}
