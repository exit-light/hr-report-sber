function classRecruitment() {

    this.reDrawRecruitment = function () {
        console.log("classRecruitment");
        this.refresh();
        var globalSettings = this.globalSettings;

        var settings = globalSettings.Settings.settings;
        console.log(settings);

        var data = JSON.parse(globalSettings.Settings.initial_data);

        var dataDummy = {
            functionalBlock: [
                {
                    label: 'РБ',
                    mass: 2503,
                    nemass: 141,
                },
                {
                    label: 'Сервисы',
                    mass: 196,
                    nemass: 83,
                },
                {
                    label: 'КБ',
                    mass: 96,
                    nemass: 133,
                },
                {
                    label: 'Технологии',
                    mass: 1,
                    nemass: 107,
                },
                {
                    label: 'ПРПА',
                    mass: 0,
                    nemass: 54,
                },
                {
                    label: 'Подразделение',
                    mass: 11,
                    nemass: 35,
                },
                {
                    label: 'Риски',
                    mass: 19,
                    nemass: 24,
                },
                {
                    label: 'Финансы',
                    mass: 7,
                    nemass: 35,
                },
                {
                    label: 'Остальные',
                    mass: 6,
                    nemass: 145,
                }
            ],
            department: [
                {
                    type: "ТБ",
                    number: "30"
                },
                {
                    type: "ЦА",
                    number: "60"
                },
                {
                    type: "ПЦП",
                    number: "10"
                }
            ],
            recruitmentByMonth: [
                {
                    mass: 300,
                    nemass: 400,
                    month: "Январь"
                },
                {
                    mass: 300,
                    nemass: 200,
                    month: "Февраль"
                },
                {
                    mass: 100,
                    nemass: 150,
                    month: "Март"
                }
            ]
        };

        function createBarsChart(data) {
            var bars = '';

            var sortedData = data.sort(function (a, b) {
                if ((a.mass + a.nemass) > (b.mass + b.nemass)) {
                    return -1;
                }

                if ((a.mass + a.nemass) < (b.mass + b.nemass)) {
                    return 1;
                }

                return 0;
            });

            for (var i = 0; i < sortedData.length; i++) {
                var value = 200;

                var total = sortedData[i].mass + sortedData[i].nemass;
                var separator = '';

                if (total >= value) {
                    var massWidth = sortedData[i].mass * 100 / total;
                    var nemassWidth = sortedData[i].nemass * 100 / total;
                    separator = '<div class="admission-_chart-bar_separator"></div>'
                } else {
                    var massWidth = sortedData[i].mass * 100 / value;
                    var nemassWidth = sortedData[i].nemass * 100 / value;
                }

                var mass, nemass;
                sortedData[i].mass === 0 ? mass = '' : mass = sortedData[i].mass;
                sortedData[i].nemass === 0 ? nemass = '' : nemass = sortedData[i].nemass;


                bars +=
                    '<div class="recruitment__chart-row">' +
                    '    <p class="recruitment__chart-label">' + sortedData[i].label + '</p>' +
                    '    <div class="recruitment__chart-bar">' +
                    '        <div class="recruitment__chart-bar_orange" style="width: ' + massWidth + '%">' +
                    separator +
                    '           <span class="recruitment__chart-bar_orange-label">' + mass + '</span>' +
                    '        </div>' +
                    '        <div class="recruitment__chart-bar_blue" style="width:' + nemassWidth + '%">' +
                    separator +
                    '            <span class="recruitment__chart-bar_blue-label">' + nemass + '</span>' +
                    '        </div>' +
                    '    </div>' +
                    '    <p class="recruitment__chart-number">' + total + '</p>' +
                    '</div>';
            }


            return bars;
        }

        function createPieChart(data) {

            var colors = ["bg-green", "bg-yellow", "bg-red"];

            var pie_chart = '';

            var legend = '';
            var sum = 0;

            for (var i = 0; i < data.department.length; i++) {
                sum += +data.department[i].number;
                legend += '<div class="recruitment__pie-legend">' +
                    '    <div class="recruitment__pie-legend_left">' +
                    '        <div class="recruitment__pie-legend-square ' + colors[i] + '"></div>' +
                    '        <p class="recruitment__pie-legend-label">' + data.department[i].type + '</p>' +
                    '    </div>' +
                    '    <p class="recruitment__pie-legend-number">' + data.department[i].number + ' <span>чел.</span></p>' +
                    '</div>';
            }

            pie_chart +=
                '<div class="recruitment__pie-chart-wrapper">' +
                '   <div class="recruitment__pie-chart-container">' +
                '       <div class="recruitment__pie-chart_middle-label">'+
                '           <p>' + sum + '</p>' +
                '           <p> принято</p>' +
                '       </div>' +
                '       <div id="recruitment__pie-chart" class="recruitment__pie-chart"></div>' +
                '    </div>' +
                '       <div class="recruitment__pie-chart-legend">' +
                legend +
                '       </div>' +
                '</div>';

            return pie_chart;
        }

        var str = '';
        str +=
            '<div class="admission-container" style="position: relative; top: -80px">' +
            '    <div class="admission-container-inner">' +
            '        <div class="recruitment__employee hidden">' +
            '           <div class="recruitment__back-button"></div>' +
            '           <div id="recruitment__vbar-chart" class="recruitment__vbar-chart"></div>' +
            '            <div class="recruitment__chart-legend">' +
            '                <div class="recruitment__legend-item">' +
            '                    <div class="recruitment__legend-square bg-orange"></div>' +
            '                    <div class="recruitment__legend-label"> Масс </div>' +
            '                </div>' +
            '                <div class="recruitment__legend-item">' +
            '                    <div class="recruitment__legend-square bg-blue"></div>' +
            '                    <div class="recruitment__legend-label"> Немасс </div>' +
            '                </div>' +
            '            </div>' +
            '       </div>' +
            '        <div class="recruitment__functional-block">' +
            '            <h3 class="recruitment__heading"> Функциональный блок </h3>' +
            '            <div class="recruitment__chart">' +
            createBarsChart(data.functionalBlock) +
            '            </div>' +
            '            <div class="recruitment__chart-legend">' +
            '                <div class="recruitment__legend-item">' +
            '                    <div class="recruitment__legend-square bg-orange"></div>' +
            '                    <div class="recruitment__legend-label"> Масс </div>' +
            '                </div>' +
            '                <div class="recruitment__legend-item">' +
            '                    <div class="recruitment__legend-square bg-blue"></div>' +
            '                    <div class="recruitment__legend-label"> Немасс </div>' +
            '                </div>' +
            '            </div>' +
            '        </div>' +
            '        <div class="recruitment__department">' +
            '            <h3 class="recruitment__heading"> Подразделение </h3>' +
            createPieChart(data) +
            '        </div>' +
            '    </div>' +
            '</div>';


        var component = "#" + this.globalSettings.teg + "_COMPONENT ";
        $(component).append(str);

        $(component + ".recruitment__functional-block").click(function () {
            $(component + '.recruitment__employee').removeClass("hidden");
        });

        $(component + ".recruitment__back-button").click(function () {
            $(component + '.recruitment__employee').addClass("hidden");
        });

        AmCharts.makeChart("recruitment__pie-chart",
            {
                "type": "pie",
                "showBalloon": false,
                "labelText": "[[title]]",
                "color": "#9b9b9b",
                "innerRadius": "47%",
                "startAngle": 0,
                "colors": [
                    "#8ac927",
                    "#ffca39",
                    "#ff585d"
                ],
                "labelTickAlpha": 1,
                "labelTickColor": "#9b9b9b",
                "labelRadius": 4,
                "minRadius": 90,
                "responsive": {
                    "enabled": true
                },
                "hideLabelsPercent": 1,
                "tabIndex": 0,
                "titleField": "category",
                "valueField": "column-1",
                "allLabels": [],
                "balloon": {},
                "startDuration": 0,
                "titles": [],
                "dataProvider": data.department.map(function (item) {
                    return {
                        "category": item.type,
                        "column-1": item.number
                    }
                })
            }
        );

        /*
        AmCharts.makeChart("recruitment__vbar-chart",
            {
                "type": "serial",
                "categoryField": "month",
                "startDuration": 1,
                "categoryAxis": {
                    "gridPosition": "start",
                    "axisColor": "#979797",
                    "color": "#454545",
                    "fontSize": 12,
                    "gridColor": "#FFFFFF"
                },
                "trendLines": [],
                "graphs": [
                    {
                        "color": "#001208",
                        "columnWidth": 0.32,
                        "fillAlphas": 1,
                        "fillColors": "#F59523",
                        "fontSize": 12,
                        "id": "AmGraph-1",
                        "labelPosition": "middle",
                        "labelText": "[[value]]",
                        "lineColor": "#F59523",
                        "showBalloon": false,
                        "title": "graph 1",
                        "type": "column",
                        "valueField": "column-1"
                    },
                    {
                        "color": "#FFFFFF",
                        "columnWidth": 0.32,
                        "fillAlphas": 1,
                        "fillColors": "#064C9F",
                        "id": "AmGraph-2",
                        "labelPosition": "middle",
                        "labelText": "[[value]]",
                        "lineColor": "#064C9F",
                        "showBalloon": false,
                        "title": "graph 2",
                        "type": "column",
                        "valueField": "column-2"
                    }
                ],
                "guides": [],
                "valueAxes": [{
                    "stackType": "regular",
                    "axisAlpha": 0.3,
                    "gridAlpha": 0,
                    "axisColor": "#FFFFFF",
                    "color": "#FFFFFF",
                    "gridColor": "#FFFFFF",
                    "totalText": "[[total]]"
                }],
                "allLabels": [],
                "balloon": {},
                "titles": [],
                "dataProvider": data.recruitmentByMonth.map(function (item) {
                    return {
                        "column-1": item.mass,
                        "column-2": item.nemass,
                        "month": item.month
                    }
                })
            }
        ); */

        var chart = AmCharts.makeChart("recruitment__vbar-chart", {
            type: "serial",
            dataProvider: data.recruitmentByMonth.map(function (item) {
            return {
                "column-1": item.mass,
                "column-2": item.nemass,
                "month": item.month
            }
        }),
            valueAxes: [
                {
                    stackType: "regular",
                    axisAlpha: 0.3,
                    gridAlpha: 0,
                    axisColor: "#FFFFFF",
                    color: "#FFFFFF",
                    gridColor: "#FFFFFF",
                    totalText: "[[total]]"
                }
            ],
            graphs: [
                {
                    "color": "#fff",
                    "columnWidth": 0.32,
                    "fillAlphas": 1,
                    "fillColors": "#064C9F",
                    "id": "AmGraph-2",
                    "labelPosition": "middle",
                    "labelText": "[[value]]",
                    "lineColor": "#064C9F",
                    "showBalloon": false,
                    "title": "graph 2",
                    "type": "column",
                    "valueField": "column-2"
                },
                {
                    "color": "#001208",
                    "columnWidth": 0.32,
                    "fillAlphas": 1,
                    "fillColors": "#F59523",
                    "fontSize": 12,
                    "id": "AmGraph-1",
                    "labelPosition": "middle",
                    "labelText": "[[value]]",
                    "lineColor": "#F59523",
                    "showBalloon": false,
                    "title": "graph 1",
                    "type": "column",
                    "valueField": "column-1"
                }
            ],
            categoryField: "month",
            startDuration: 1,
            categoryAxis: {
                gridPosition: "start",
                axisColor: "#979797",
                color: "#454545",
                fontSize: 12,
                gridColor: "#FFFFFF"
            }
        });


    }
}