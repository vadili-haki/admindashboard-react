import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ChartComponent = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            chart: {
                height: 250,
                width: "100%",
                type: "bar",
                animations: {
                    initialAnimation: {
                        enabled: false
                    }
                }
            },
            series: [
                {
                    name: "Series 1",
                    data: [
                        [1486684800000, 34],
                        [1486771200000, 43],
                        [1486857600000, 31],
                        [1486944000000, 43],
                        [1487030400000, 33],
                        [1487116800000, 52]
                    ]
                },
                {
                    name: "Series 2",
                    data: [
                        [1486684800000, 4],
                        [1486771200000, 3],
                        [1486857600000, 1],
                        [1486944000000, 43],
                        [1487030400000, 3],
                        [1487116800000, 2]
                    ]
                }
            ],
            xaxis: {
                type: 'datetime'
            }
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return <div id="chart" ref={chartRef}></div>;
};

export default ChartComponent;