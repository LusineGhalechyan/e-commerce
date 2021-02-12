import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./Select.module.scss";

const SelectMenues = () => {
  const [furniture, setFurniture] = React.useState("");

  const handleChange = (e) => {
    setFurniture(e.target.value);
  };

  const menuItems = [`Sofas`, `Tables`, `Chairs`, `Closets`];

  const select = (
    <Select
      labelId="customized-select-label"
      id="customized-select"
      value={furniture}
      onChange={handleChange}
      MenuProps={{
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
        getContentAnchorEl: null,
      }}
    >
      {menuItems.map((item, i) => (
        <MenuItem key={i} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );

  return (
    <div className={styles.selectContainer}>
      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Living Room</InputLabel>
        {select}
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Bedroom</InputLabel>
        {select}
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Kitchen</InputLabel>
        {select}
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Outdoor</InputLabel>
        {select}
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Office</InputLabel>
        {select}
      </FormControl>

      <FormControl className={styles.formControl}>
        <InputLabel id="customized-select-label">Restaurants</InputLabel>
        {select}
      </FormControl>
    </div>
  );
};

export default SelectMenues;
