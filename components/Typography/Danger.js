import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
// core components
import styles from "/styles/jss/novel-logiks/components/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Danger(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.defaultFontStyle + " " + classes.dangerText}>
      {children}
    </div>
  );
}

Danger.propTypes = {
  children: PropTypes.node
};
