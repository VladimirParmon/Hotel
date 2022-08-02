import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: "70px" }} size="small">
      <Select value={language} onChange={handleChange}>
        <MenuItem value={"en"}>EN</MenuItem>
        <MenuItem value={"ru"}>RU</MenuItem>
        <MenuItem value={"de"}>DE</MenuItem>
      </Select>
    </FormControl>
  );
}
