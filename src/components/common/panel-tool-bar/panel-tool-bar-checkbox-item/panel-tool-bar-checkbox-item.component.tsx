import { TPanelToolBarCheckboxItem } from '../panel-tool-bar.const';
import { FormControlLabel, Checkbox } from '@mui/material';

const PanelToolBarCheckboxItem = ({
  label,
  checked,
  onChange,
}: TPanelToolBarCheckboxItem) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          size="small"
          color="success"
          onChange={onChange}
        />
      }
      label={label}
      sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
    />
  );
};

export default PanelToolBarCheckboxItem;
