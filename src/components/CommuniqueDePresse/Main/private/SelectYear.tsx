import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SelectYear() {
  const [year, setYear] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Year</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={year}
        label="year"
        onChange={handleChange}
      >
        {years.map((year, index) => (
          <MenuItem value={year} key={index}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

const years: string[] = ["2024", "2023", "2022", "2021", "2020", "2019"];
