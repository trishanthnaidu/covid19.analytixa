import { makeStyles, fade } from "@material-ui/core/styles";
import { AgGridStyles } from './gridStyle';

export const Styles = makeStyles(theme => ({
      root: {
            justifyContent: "center",
            display: "flex",
            flexDirection: theme.isMobile ? "column" : "row"
      },
      labels: {
            color: theme.text[40],
            display: "inline-flex",
            alignItems: "center"
      },
      toggleButtonGroup: {
            backgroundColor: "transparent",
            margin: "0 15px",
            flex: 1,
            justifyContent: theme.isMobile ? "center" : "flex-end",

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
      toggleButtonGroupTrend: {
            "& button": {
                  padding: "0px 10px",
            },
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
            width: theme.isMobile && "90vw",

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
            maxheight: 500,

            "& li": {
                  minHeight: 40
            }
      },
      gridContainer: {
            justifyContent: "space-between",
            flexDirection: "column",
            display: "inline-flex",
            margin: "2vh 1vw",
            width: theme.isMobile ? "90vw" : "50vw"
      },
      trendContainer: {
            justifyContent: "flex-end",
            flexDirection: "column",
            display: "inline-flex",
            margin: "10px 0 20px",
            width: theme.isMobile ? "90vw" : "50vw"
      },
      mapContainer: {
            width: theme.isMobile && "90vw",
            display: "flex",
            flexDirection: "column",
            borderRadius: 10,
            backgroundColor: theme.background[30],
      },
      mapFiterContainer: {
            display: "inline-flex",
            justifyContent: theme.isMobile ? "center" : "space-between",
            zIndex: 10,
            flexDirection: "column"
      },
      title: {
            padding: "5px 25px",
            color: theme.text[20],
            fontWeight: 400,
            fontSize: 18,
            alignItems: "center",
            display: theme.isMobile ? "none" : "inline-flex"
      },
      // Top Bottom
      topAndBottomContainer: {
            width: theme.isMobile ? "90vw" : "22vw",
            height: theme.isMobile ? 750 : 325,
            display: "inline-flex",
            flexDirection: "column",
            backgroundColor: theme.background["00"],
            flexDirection: "column",
            margin: "2vh 1vw",
            borderRadius: 10,

            "& div.ag-root": {
                  border: "none",
                  borderRadius: 10,

                  "& div.ag-header-container": {
                        color: theme.palette.primary.main,
                        backgroundColor: theme.background[30]
                  },

                  "& div.ag-row-hover": {
                        backgroundColor: fade(theme.palette.primary.main, 0.15)
                  }
            }
      },
      shareContainer: {
            width: theme.isMobile ? "90vw" : "22vw",
            height: theme.isMobile ? 365 : 325,
            display: "inline-flex",
            flexDirection: "column",
            backgroundColor: theme.background["00"],
            flexDirection: theme.isMobile ? "row" : "column",
            margin: "2vh 1vw",
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
            flexDirection: "column",
            mrgin: "2vh 1vw"
      },
      columnContainer: {
            display: "flex",
            flexDirection: theme.isMobile ? "column" : "row"
      },
      titleContainer: {
            backgroundColor: theme.background[30],
            display: "flex",
            height: 60,
            justifyContent: "space-between",
            borderRadius: 0,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            alignItems: "center",

            "& button": {
                  backgroundColor: theme.background[40],
                  color: theme.text[50]
            }
      },
      trendContainer: {
            backgroundColor: theme.background[30],
            display: "flex",
            height: 60,
            justifyContent: "space-between",
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
            justifyContent: "center"
      },
      caseAnalysisContainer: {
            backgroundColor: theme.background["00"],
            width: theme.isMobile ? "90vw" : "46vw",
            height: 350
      },
      paperPieChart: {
            backgroundColor: "transparent",
            width: "90vw",

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      btnCountrySelection: {
            padding: "0 15px",
            textTransform: "capitalize",
            color: theme.palette.primary.main,
            backgroundColor: fade(theme.background["00"], 0.9),
            border: `solid 1px ${fade(theme.text[50], 0.25)}`,
            fontSize: theme.typography.body1.fontSize,
            height: 32,
            margin: "0 20px",

            "&:hover": {
                  backgroundColor: theme.background["00"],
            },

            "& svg": {
                  fontSize: 18
            }
      },
      btnTrendGranularitySelection: {
            padding: "0 15px",
            textTransform: "capitalize",
            color: theme.text[30],
            backgroundColor: fade(theme.background["00"], 0.5),
            border: "transparent",
            fontSize: theme.typography.body1.fontSize,
            height: 32,
            margin: "0 20px",

            "&:hover": {
                  backgroundColor: theme.background["00"],
            },

            "& svg": {
                  fontSize: 18
            }
      },
      comingSoon: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            color: theme.text[50]
      },
      quickViewsContainer: {
            justifyContent: "space-between",
            flexDirection: "row",
            display: "inline-flex",
            margin: "2vh 1vw",
            width: theme.isMobile ? "90vw" : "50vw"
      },
      quickViews: {
            width: "25vw",
            height: 80,
            justifyContent: "center",
            textAlign: "center"
      },
      labelTotalCasesHeader: {
            color: theme.text[30]
      },
      quickViewsActiveCases: {
            fontSize: 25,
            fontWeight: "300",
            color: fade(theme.palette.primary.main, 0.85)
      },
      quickViewsCuredCases: {
            fontSize: 25,
            fontWeight: "300",
            color: theme.palette.primary.main
      },
      quickViewsDeceasedCases: {
            fontSize: 25,
            fontWeight: "300",
            color: fade(theme.palette.primary.main, 0.5)
      },
      agGridRoot: {
            height: 800,
            width: '90vw',
            borderRadius: 10
      },
      percentageContainer: {
            width: "100%",
            display: "flex",
            flexDirection: "column"
      },
      percentageRow: {
            margin: "5px 5vw",
            display: "flex",
            justifyContent: "space-around",
      },
      percentageColumn: {
            display: "inline-flex",
            color: theme.text[30],
      },
      percentageNumber: {
            color: theme.palette.primary.main,
            fontWeight: "300",
            fontSize: 25
      },
      paperSimpleArea: {
            width: theme.isMobile ? "90vw" : "75vw",
            height: 375,
            padding: "30px 0",
            borderRadius: 10,
            backgroundColor: theme.background["00"],

            "& div.highcharts-container": {
                  marginTop: theme.isMobile ? 0 : -10
            },

            "& div.highcharts-container svg .highcharts-background": {
                  fill: "transparent",
            },

            "& div.highcharts-container svg path.highcharts-crosshair": {
                  stroke: fade(theme.palette.primary.main, 0.075),
            }
      },
      trendContainer: {
            display: "flex",
            justifyContent: "flex-end"
      },
      consistentSwitchLabel: {
            color: theme.text[30],
            fontSize: 12
      },
      trendNote: {
            fontSize: 12,
            color: theme.text[40],
            padding: 10
      }
}))