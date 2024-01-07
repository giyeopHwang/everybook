import { FormControlLabel, Checkbox } from '@mui/material';
import { TTabToolCheckboxItem } from '../tab-tool-items.const';

const TabToolCheckboxItem = ({
  label,
  checked,
  onChange,
}: TTabToolCheckboxItem) => {
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

export default TabToolCheckboxItem;
