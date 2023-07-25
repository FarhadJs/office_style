import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
class App extends Component {
  render() {
    return (
      <ReactEcharts
        option={{
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
          },
          legend: {
            orient: "vertical",
            left: 10,
            data: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            textStyle: {
              color: "white",
            },
          },
          series: [
            {
              name: "Projects",
              type: "pie",
              //   radius: ["10%", "70%"],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: "center",
              },
              //   emphasis: {
              //     label: {
              //       show: true,
              //       fontSize: "30",
              //       fontWeight: "bold",
              //     },
              //   },
              labelLine: {
                show: false,
              },
              data: [
                { value: 10, name: "January" },
                { value: 4, name: "February" },
                { value: 5, name: "March" },
                { value: 1, name: "April" },
                { value: 3, name: "May" },
                { value: 12, name: "June" },
                { value: 6, name: "July" },
                { value: 7, name: "August" },
                { value: 0, name: "September" },
                { value: 0, name: "October" },
                { value: 0, name: "November" },
                { value: 0, name: "December" },
              ],
            },
          ],
        }}
      />
    );
  }
}
export default App;
