import { makeStyles } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            width: "100vw",
            height: theme.isMobile ? "84vh" : "92vh",
            padding: "12px 15px",
            boxSizing: "border-box",
            marginTop: 50,
            overflowY: theme.isMobile ? "auto" : "hidden",
      },
}))