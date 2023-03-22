import { createStyles } from "@mantine/core";
import { generateKey } from "crypto";

export const useStyles = createStyles((theme: any) => ({
  root: {
    position: "relative",
  },
  input: {
    height: "auto",
    paddingTop: 18,
  },
  inputBottom: {
    border: "none",
    borderBottom: "solid 1px black",
    borderRadius: "0px",
    // backgroundColor: "red",
  },
  labelBottom: {
    color: "gray",
  },
  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));
