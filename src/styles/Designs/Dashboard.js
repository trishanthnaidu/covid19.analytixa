import { makeStyles, fade } from "@material-ui/core/styles";

export const Styles = makeStyles(theme => ({
      root: {
            justifyContent: "center",
            display: "flex"
      },
      labels: {
            color: theme.text[40],
            display: "inline-flex",
            alignItems: "center"
      },
      toggleButtonGroup: {
            backgroundColor: "transparent",
            margin: "0 20px",
            flex: 1,
            justifyContent: "flex-end",

            "& button": {
                  padding: "0px 15px",
                  height: 32,
                  fontSize: theme.typography.body1.fontSize,
                  backgroundColor: fade(theme.background["00"], 0.5),
                  color: theme.text[70],
                  border: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  boderLeft: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  borderRight: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  textTransform: "capitalize",
            },
            "& .Mui-selected": {
                  backgroundColor: theme.background["00"],
                  color: theme.palette.primary.main,
            },
            "& .MuiToggleButton-root:hover": {
                  backgroundColor: theme.background["00"],
            }
      },
      btnToggle: {
            flex: 1
      },
      toggleContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            "& button": {
                  padding: "0px 15px",
                  height: 32,
                  fontSize: theme.typography.body1.fontSize,
                  backgroundColor: fade(theme.text[70], 0.3),
                  color: theme.text[50],
                  border: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  boderLeft: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  borderRight: `solid 1px ${fade(theme.text[50], 0.25)}`,
                  textTransform: "capitalize",
            },
            "& .Mui-selected": {
                  backgroundColor: fade(theme.background["00"], 0.5),
                  color: theme.palette.primary.main,
            },
            "& .MuiToggleButton-root:hover": {
                  backgroundColor: fade(theme.text[90], 0.2),
            }
      },
      ƒilterContainer: {
            backgroundColor: "transparent",
            display: "flex",
            height: 60,
            justifyContent: "center",
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            alignItems: "center",

            "& button": {
                  backgroundColor: theme.background[40],
                  color: theme.text[50]
            }
      },
      transparent: {
            background: "transparent",
            border: "transparent",
            justifyContent: "flex-end",
      },
      btnFilterBy: {
            padding: "0 5px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            "& svg": {
                  fontSize: 18
            }
      },
      countrySelectionContainer: {
            backgroundColor: "transparent",
            display: "flex",
            height: 75,
            justifyContent: "flex-end",
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            alignItems: "center"
      },
      btnCountrySelection: {
            padding: "0 15px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            fontSize: theme.typography.body1.fontSize,
            height: 32,
            margin: 20,

            "&:hover": {
                  backgroundColor: theme.background["00"],
            },

            "& svg": {
                  fontSize: 18
            }
      },
      btnYear: {
            padding: "0 5px 0 10px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            "& svg": {
                  fontSize: 18
            }
      },
      divider: {
            alignSelf: 'stretch',
            background: theme.text[70]
      },
      popover_Paper: {
            backgroundColor: theme.background["00"],
            color: theme.text[30],
            height: 500
      },
      gridContainer: {
            justifyContent: "space-between",
            flexDirection: "column",
            display: "inline-flex",
            margin: "1vw",
            width: "50vw"
      },
      mapContainer: {
            display: "flex",
            flexDirection: "column",
            borderRadius: 10,
            backgroundColor: theme.background[30],
      },
      mapFiterContainer: {
            display: "inline-flex",
            justifyContent: "space-between",
            zIndex: 10,
      },
      title: {
            padding: "5px 25px",
            color: theme.text[20],
            fontWeight: 400,
            fontSize: 18,
            alignItems: "center",
            display: "inline-flex"
      },
      // Top Bottom
      topAndBottomContainer: {
            width: "22vw",
            height: 325,
            display: "inline-flex",
            flexDirection: "column",
            backgroundColor: theme.background[30],
            flexDirection: "column",
            margin: "1vw",
            borderRadius: 10,
      },
      topSelection: {},
      bottomSelection: {},
      verticalBarChart: {
            backgroundColor: "transparent",
            marginTop: 0,

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? 0 : -10,
                  transform: "translateX(-10px)"
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      paperContrastAreaSpline: {
            width: "100%",
            padding: 10,
            borderRadius: 10,
            backgroundColor: fade(theme.palette.primary.main, 0.75),

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      paperTimeLine: {
            width: "100%",
            padding: 10,
            borderRadius: 10,

            "& div.highcharts-container": {
                  marginTop: -10,
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg .highcharts-grid-line": {
                  stroke: "transparent"
            },
      },
      dataLabels: {

      },
      statsticalAnalysisContainer: {
            display: "flex",
            flexDirection: "column"
      },
      columnContainer: {
            display: "flex",
            flexDirection: "row"
      },
      titleContainer: {
            backgroundColor: theme.background[30],
            display: "flex",
            height: 60,
            justifyContent: "flex-start",
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            alignItems: "center",

            "& button": {
                  backgroundColor: theme.background[40],
                  color: theme.text[50]
            }
      },
      totalActiveCasesContainer: {
            backgroundColor: theme.background["00"],
      },
      caseAnalysisContainer: {
            backgroundColor: theme.background["00"],
            width: "46vw"
      },
      paperPieChart: {
            backgroundColor: "transparent",

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
}))