'use strict';

angular.module('charts')
    .controller('HighChartAreaController', function () {
    Highcharts.chart('container', {
        title: {
            text: 'The <em>precipitation</em> share'
        },
        subtitle: {
            text: 'The precipitation share of USA in 2015'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'precipitation share',
            keys: ['name', 'y', 'sliced', 'selected'],
            data: [
                ['Jun', 6.8],
                ['Feb', 6.4],
                ['Mar', 7.9],
                ['Apr', 7.5, true, true],
                ['May', 9.2],
                ['Jun', 9.9],
                ['July', 10.0],
                ['Aug', 10.0],
                ['Sept', 9.4],
                ['Oct', 7.5],
                ['Nov', 7.7],
                ['Dec', 7.7]
                
            ]
        }]
    });
      
    });
