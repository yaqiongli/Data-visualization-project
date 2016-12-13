'use strict';

angular.module('charts')
    .controller('HighChartController', function ($scope,$http) {
      init();
    	function init() {
        serverCall();
      }
    function serverCall() {
        $http.get('/api/highchartcolumn')
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
      var country = [];
      var values = [];
      $scope.charts.forEach(function(value,key) {
        console.log('value of value :', value);
        country.push(value.country);
        values.push(value.values);
       });
       console.log('country: ', country);
       console.log('values: ', values);
       Highcharts.chart('container', {
            chart: {
                type: 'column'
            },
            series: [{
            name: 'countries',
            data: values
            }],
            title: {
                text: 'Average temperature of 50 countries'
            },
            xAxis: {
              categories: country
            },
            yAxis: {
                title: {
                    text: 'Average temperature'
                }
            }
        });

    }


    });
