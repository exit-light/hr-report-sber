function classExitInterview() {

    this.reDrawExitInterview = function () {
        console.log("classExitInterview");
        this.refresh();
        var globalSettings = this.globalSettings;

        var settings = globalSettings.Settings.settings;
        console.log(settings);

        

        var dummyData = {
            'turnover': [
                {
                    'label' : 'Текучесть',
                    'value': 17720,

                },
                {
                    'label' : 'Текучесть до 11 гр.',
                    'value': 12020,

                },
                {
                    'label' : 'Прошли интервью',
                    'value': 8520,

                },
            ],
            'rate': [
                {
                    'label' : 'Позитивно',
                    'value': 17720,
                },
                {
                    'label' : 'Неоднозначно',
                    'value': 12020,
                },
                {
                    'label' : 'Негативно',
                    'value': 8520,
                },
            ],
            'results': [
                {
                    'label' : 'Готовы в будущем вернуться работать в Сбербанк',
                    'positive': 70,
                    'negative' : 30,

                },
                {
                    'label' : 'Готовы рекомендовать Сбербанк в качестве работодателя',
                    'positive': 70,
                    'negative' : 30,

                },
                {
                    'label' : 'Готовы рекомендовать свое подразделение и руководителя',
                    'positive': 70,
                    'negative' : 30,

                },
                {
                    'label' : 'Была ли у непосредственного руководителя возможность повлиять на решение об уходе',
                    'positive': 70,
                    'negative' : 30,

                },
            ],



        };
        var data = dummyData;
        if(globalSettings.Settings.initial_data) {
            data = JSON.parse(globalSettings.Settings.initial_data);
        }
        function calcPerc(total, part) {
            var exp = +(part / (total / 100));
            return Math.ceil(exp)
        }

        function splitNum(num) {
            var re = /(?=\B(?:\d{3})+(?!\d))/g
            return (String(num).replace(re, ' '));
        }
        var str = '';
        str +=
        '<div class="container_main">'+ 
        '    <div class="d-flex main-wrapper">'+
        '        <div style="flex-direction: column;display: flex;">'+
        '            <div class="block">'+
        '                <div class="block-title">Текучесть</div>'+
        '                <div class="turnover-chart-legend d-flex">'+
        '                    <div class="turnover-chart-legend__item">'+
        '                        <div class="turnover-chart-legend__item__num">' + splitNum(data.turnover[0].value) + '</div>'+
        '                        <div class="turnover-chart-legend__item__label"><span class="sqr sqr-bg-blue"></span>' + data.turnover[0].label + '</div>'+
        '                    </div>'+
        '                    <div class="turnover-chart-legend__item">'+
        '                        <div class="turnover-chart-legend__item__num">' + splitNum(data.turnover[1].value) + '</div>'+
        '                        <div class="turnover-chart-legend__item__label"><span class="sqr sqr-bg-aqua"></span>' + data.turnover[1].label + '</div>'+
        '                    </div>'+
        '                    <div class="turnover-chart-legend__item">'+
        '                        <div class="turnover-chart-legend__item__num">' + splitNum(data.turnover[2].value) + ' ('+ calcPerc(data.turnover[0].value, data.turnover[2].value) +'%)</div>'+
        '                        <div class="turnover-chart-legend__item__label"><span class="sqr sqr-bg-orange"></span> ' + data.turnover[2].label + '</div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="turnover-chart">'+
        '                    <div class="turnover-chart__item sqr-bg-blue" style="width:100%"></div>'+
        '                    <div class="turnover-chart__item sqr-bg-aqua" style="width:'+ calcPerc(data.turnover[0].value, data.turnover[1].value) +'%"></div>'+
        '                    <div class="turnover-chart__item sqr-bg-orange" style="width:'+ calcPerc(data.turnover[0].value, data.turnover[2].value) +'%"></div>'+
        '                </div>'+
        '            </div>'+
        '            <div class="block">'+
        '                <div class="block-title">Оценили свою работу</div>'+
        '                <div class="rate-chart">'+
        '                    <div class="rate-chart__inner">'+
        '                        <div style="width: 100%;height: 300px;" id="chart-rate"></div>'+
        '                    </div>'+
        '                    <div class="rate-chart__legend">'+
        '                        <div class="rate-chart__legend__item">'+
        '                            <span class="value">50 %</span>'+
        '                            <span class="sqr sqr-bg-green"></span>'+
        '                            <span class="label">Позитивно</span>'+
        '                        </div>'+
        '                        <div class="rate-chart__legend__item">'+
        '                            <span class="value">25 %</span>'+
        '                            <span class="sqr sqr-bg-orange"></span>'+
        '                            <span class="label">Неоднозначно</span>'+
        '                        </div>'+
        '                        <div class="rate-chart__legend__item">'+
        '                            <span class="value">25 %</span>'+
        '                            <span class="sqr sqr-bg-red"></span>'+
        '                            <span class="label">Негативно</span>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '        <div style="display:flex">'+
        '            <div class="block" style="flex-grow: 1;">'+
        '                <div class="block-title">Итоги опроса</div>'+
        '                <div class="results-chart">'+
        '                    <div class="results-chart__item">'+
        '                        <div class="results-chart__item__label">'+
        '                            '+ data.results[0].label + 
        '                        </div>'+
        '                        <div class="results-chart__item__graph">'+
        '                            <div class="results-chart__item__graph__inner">'+
        '                                <div style="width:'+ data.results[0].positive +'%" class="results-chart__item__graph__left"><span class="num">'+ data.results[0].positive +'%</span></div>'+
        '                                <div style="width:'+ data.results[0].negative +'%" class="results-chart__item__graph__right"><span class="num">'+ data.results[0].negative +'%</span></div>'+
        '                            </div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
    
        '                <div class="results-chart">'+
        '                    <div class="results-chart__item">'+
        '                        <div class="results-chart__item__label">'+
        '                            '+ data.results[1].label +
        '                        </div>'+
        '                        <div class="results-chart__item__graph">'+
        '                            <div class="results-chart__item__graph__inner">'+
        '                                <div style="width:'+ data.results[1].positive +'%" class="results-chart__item__graph__left"><span class="num">'+ data.results[1].positive +'%</span></div>'+
        '                                <div style="width:'+ data.results[1].negative +'%" class="results-chart__item__graph__right"><span class="num">'+ data.results[1].negative +'%</span></div>'+
        '                            </div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="results-chart">'+
        '                    <div class="results-chart__item">'+
        '                        <div class="results-chart__item__label">'+
        '                            '+ data.results[2].label +
        '                        </div>'+
        '                        <div class="results-chart__item__graph">'+
        '                            <div class="results-chart__item__graph__inner">'+
        '                                <div style="width:'+ data.results[2].positive +'%" class="results-chart__item__graph__left"><span class="num">'+ data.results[2].positive +'%</span></div>'+
        '                                <div style="width:'+ data.results[2].negative +'%" class="results-chart__item__graph__right"><span class="num">'+ data.results[2].negative +'%</span></div>'+
        '                            </div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
        '                <div class="results-chart">'+
        '                    <div class="results-chart__item">'+
        '                        <div class="results-chart__item__label">'+
        '                            '+ data.results[3].label +
        '                        </div>'+
        '                        <div class="results-chart__item__graph">'+
        '                            <div class="results-chart__item__graph__inner">'+
        '                                <div style="width:'+ data.results[3].positive +'%" class="results-chart__item__graph__left"><span class="num">'+ data.results[3].positive +'%</span></div>'+
        '                                <div style="width:'+ data.results[3].negative +'%" class="results-chart__item__graph__right"><span class="num">'+ data.results[3].negative +'%</span></div>'+
        '                            </div>'+
        '                        </div>'+
        '                    </div>'+
        '                </div>'+
    
        '                <div class="results-chart__legend">'+
        '                    <div>'+
        '                        <span class="sqr sqr-bg-aqua"></span> Да '+
        '                    </div>'+
        '                    <div>'+
        '                        <span class="sqr sqr-bg-light"></span> Нет'+
        '                    </div>'+
        '                </div>'+
        '            </div>'+
        '        </div>'+
        '    </div>'+
        '</div>';
        ;
        var component = "#" + this.globalSettings.teg + "_COMPONENT ";
        $(component).append(str);

        var chart = AmCharts.makeChart( "chart-rate", {
            "type": "pie",
            "showBalloon": false,
            "labelText": "[[title]]",
            "color": "#9b9b9b",
            "innerRadius": "40%",
            "startAngle": 0,
            "colors": [
                "#8ac927",
                "#ffca39",
                "#ff585d"
            ],
            "labelTickAlpha": 0,
            "labelRadius": 8,
            "minRadius": 90,
            "responsive": {
                "enabled": false
            },
            "hideLabelsPercent": 1,
            "tabIndex": 0,
            "titleField": "category",
            "valueField": "column-1",
            "allLabels": [],
            "balloon": {},
            "startDuration": 0,
            "titles": [],
            "dataProvider": [
                {
                    "category": 50 + '%',
                    "column-1": 50
                },
                {
                    "category": 25 + '%',
                    "column-1": 25
                },
                {
                    "category": 25 + '%',
                    "column-1": 25
                }
            ]
        });
        window.onload = function() {
            document.querySelector('.amcharts-chart-div a').style.display = 'none';
        };
    }
}