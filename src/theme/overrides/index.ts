import MuiButton from "./MuiButton";
import MuiButtonBase from "./MuiButtonBase";
import MuiFormHelperText from "./MuiFormHelperText";
import MuiInputBase from "./MuiInputBase";
import MuiFormLabel from "./MuiFormLabel";
import MuiMenuItem from "./MuiMenuItem";
import MuiAutocomplete from "./MuiAutocomplete";
import MuiPickersCalendarHeader from "./MuiPickersCalendarHeader";
import MuiPickersDay from "./MuiPickersDay";
import MuiIconButton from "./MuiIconButton";
import MuiPickersToolbar from "./MuiPickersToolbar";
import MuiAccordionSummary from "./MuiAccordionSummary";
import MuiListItemButton from "./MuiListItemButton";
import MuiTableCell from "./MuiTableCell";
import { Theme } from "@mui/material/styles";

export default (theme: Theme) => {
  return {
    MuiButton: MuiButton(theme),
    MuiButtonBase: MuiButtonBase(theme),
    MuiInputBase: MuiInputBase(theme),
    MuiFormLabel: MuiFormLabel(theme),
    MuiFormHelperText: MuiFormHelperText(theme),
    MuiMenuItem: MuiMenuItem(theme),
    MuiAutocomplete: MuiAutocomplete(theme),
    MuiPickersCalendarHeader: MuiPickersCalendarHeader(theme),
    MuiPickersToolbar: MuiPickersToolbar(theme),
    MuiPickersDay: MuiPickersDay(theme),
    MuiIconButton: MuiIconButton(theme),
    MuiAccordionSummary: MuiAccordionSummary(theme),
    MuiListItemButton: MuiListItemButton(theme),
    MuiTableCell: MuiTableCell(theme),
  };
};
