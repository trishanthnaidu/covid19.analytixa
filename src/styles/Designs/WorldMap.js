import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {

      },
      states: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 0.1,
            strokeLinecap: "round",
            stroke: theme.background["00"],
      },
      grayStates: {
            outline: "none",
            zIndex: 1,
            cursor: "pointer",
            transition: "fill 0.3s ease",
            strokeWidth: 1,
            strokeLinecap: "round",
            fill: fade(theme.background[30], 0.3)
      },
      toggleContainer: {

      },
      paperWorldMap: {
            height: "80vh",
            backgroundColor: theme.background["00"],
            borderRadius: 10,

            "& svg": {
                  marginTop: !theme.isMobile && -50,
                  marginLeft: theme.isMobile ? "-22vw" : -35,
                  transform: theme.isMobile ? "scale(1.5)" : "scale(1.4)",
            },

            "& .__react_component_tooltip": {
                  color: "#FFF",
                  padding: "4px 8px",
                  fontSize: "11px",
                  lineHeight: "1.4em",
                  borderRadius: 5,
                  backgroundColor: theme.palette.secondary.main
            },
            "& .__react_component_tooltip.type-dark.place-top:after": {
                  borderTopColor: theme.palette.secondary.main
            }
      },
      totalCasesContainer: {
            display: "flex",
            margin: "25px 40px",
            flexDirection: "column",
            float: "right",
            alignItems: "flex-end"
      },
      labelTotalCasesHeader: {
            color: theme.text[40]
      },
      labelTotalCasesText: {
            fontSize: 25,
            color: theme.palette.primary.main
      }
}))