import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles';
import { usePushingGutterStyles } from '@mui-treasury/styles';

const GradientButton = (props) => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <div className={gutterStyles.parent}>
      <div>
        <Button classes={chubbyStyles}>Restart</Button>
      </div>
    </div>
  );
};


export default GradientButton;