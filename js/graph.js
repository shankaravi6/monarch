function loadGraph() {
  Highcharts.chart("container-graph", {
    chart: {
      type: "area",
      zoomType: "x",
      panning: true,
      panKey: "shift",
      scrollablePlotArea: {
        minWidth: 800,
      },
      backgroundColor: "rgba(0, 0, 0, 0)",
    },

    title: {
      text: "Live",
      align: "center",
      style: {
        color: "#6da1a0",
      },
    },

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              enabled: false,
            },
          },
        },
      ],
    },

    lang: {
      accessibility: {
        screenReaderSection: {
          annotations: {
            descriptionNoPoints:
              "{annotationText}, at distance {annotation.options.point.x}km, elevation {annotation.options.point.y} meters.",
          },
        },
      },
    },

    credits: {
      enabled: false,
    },

    xAxis: {
      labels: {
        format: "{value} km",
        style: {
          color: "#6da1a0",
        },
      },
      minRange: 5,
      title: {
        text: "",
        style: {
          color: "#6da1a0",
        },
      },
      accessibility: {
        rangeDescription: "Range: 0 to 187.8km.",
      },
    },

    yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0.35,

      title: {
        text: null,
      },
      labels: {
        format: "{value} m",
        style: {
          color: "#6da1a0",
        },
      },
      accessibility: {
        description: "Elevation",
        rangeDescription: "Range: 0 to 1,553 meters",
      },
      gridLineColor: "#205b58",
    },

    tooltip: {
      headerFormat: "Distance: {point.x:.1f} km<br>",
      pointFormat: "{point.y} m a. s. l.",
      shared: true,
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        data: elevationData,
        lineColor: Highcharts.getOptions().colors[1],
        color: Highcharts.getOptions().colors[2],
        fillOpacity: 0.5,
        name: "Elevation",
        marker: {
          enabled: false,
        },
        threshold: null,
      },
    ],

    navigation: {
      menuStyle: {
        backgroundColor: "#609d9c",
      },
    },

    plotOptions: {
      area: {
        fillColor: "#609d9c",
      },
    },
  });
}
loadGraph();
