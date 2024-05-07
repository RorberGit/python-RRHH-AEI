import { Autocomplete, TextField } from "@mui/material";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";

export default function Autocompletar({
  name,
  control,
  label,
  options,
  onChange,
  span,
  multiple,
}) {
  const { field, formState } = useController({ name, control });

  const { errors } = formState;

  return (
    <Autocomplete
      {...field}
      multiple={!!multiple}
      disablePortal
      options={options}
      onChange={onChange ? onChange : (_, value) => field.onChange(value)}
      getOptionLabel={(option) => option.nombre}
      isOptionEqualToValue={(option, value) =>
        value === undefined || value === "" || option.id === value.id
      }
      size="small"
      sx={span ? { gridColumn: `span ${span}` } : null}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={!!errors[name]}
          helperText={errors[name] ? errors[name].message : ""}
        />
      )}
    />
  );
}

Autocompletar.propTypes = {
  label: PropTypes.string,
  control: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.array,  
  onChange: PropTypes.func,
  span: PropTypes.string,
  multiple: PropTypes.bool,
};
