'use strict';

angular.module('charts')
    .controller('HighChartLineController', function ($scope,$http) {
      init();
    	function init() {
        serverCall();
      }
    function serverCall() {
        $http.get('/api/highchartline')
          .success(function(data) {
            console.log('coming to the controller:', data);
            $scope.charts = {};
            $scope.charts = data;

            console.log('value of chart data :', $scope.charts);
            callChart();
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      }

    function callChart() {
      var dates = [];
      var USA = [];
      var CHN = [];
      var JPN = [];
      $scope.charts.forEach(function(value,key) {
        console.log('value of value :', value);
        dates.push(value.date);
        USA.push(value.USA);
        CHN.push(value.CHN);
        JPN.push(value.JPN);
       });
       console.log('dates: ', dates);
       console.log('USA: ', USA);
       console.log('CHN: ', CHN);
       console.log('JPN: ', JPN);
       Highcharts.chart('container', {
            chart: {
                type: 'line'
            },

           series: [{
            name: 'USA',
            data: USA
            },
            {
            name: 'CHN',
            data: CHN
            },
            {
            name: 'JPN',
            data: JPN
            }],
            title: {
                text: 'Temperature of USA, China and Japan'
            },
            xAxis: {
              categories: dates
            },
            yAxis: {
                title: {
                    text: 'Centigrade'
                }
            }
        });

    }

    });
