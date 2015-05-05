function makeData() {
  "use strict";

  return makeRandomData(6);
}

function run(svg, data, Plottable) {
  "use strict";

  var d1 = [{x: "200", y: 1}, {x: "250", y: 2}, {x: "400", y: 3}];
  var d2 = [{x: "200", y: 4}, {x: "300", y: 2}, {x: "400", y: 1}];

  var xScale1 = new Plottable.Scales.Category();
  var xScale2 = new Plottable.Scales.Category();
  var yScale = new Plottable.Scales.Linear();

  var plot1 = new Plottable.Plots.Area(xScale1, yScale);
  plot1.addDataset(d1);
  plot1.project("x", "x", xScale1).project("y", "y", yScale);

  var plot2 = new Plottable.Plots.Line(xScale2, yScale);
  plot2.addDataset(d2);
  plot2.project("x", "x", xScale2).project("y", "y", yScale);

  var xAxis1 = new Plottable.Axes.Category(xScale1, "bottom");
  var xAxis2 = new Plottable.Axes.Category(xScale2, "bottom");

  var yAxis = new Plottable.Axes.Numeric(yScale, "left");
  var xAxes = new Plottable.Components.Table([[xAxis1],
                                               [new Plottable.Components.Label("")],
                                              [xAxis2],
                                              [new Plottable.Components.Label("")]]);

  var chart = new Plottable.Components.Table([[yAxis, plot1.below(plot2)],
   [null,  xAxes]]);

  chart.renderTo(svg);

}
