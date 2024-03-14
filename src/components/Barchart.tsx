import {useState} from "react";
import { BarChart, EventProps } from '@tremor/react';

// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, ChartData } from "chart.js/auto";

// type ChartProps ={
//   data: ChartData<"bar">;
//   options: ChartData<"bar">;
// }

const Chart = ({ChartData}: any) => {
  const [chartData, setChartData] = useState<EventProps>()
  
  return (
    <div>
      <BarChart
        className="mt-6"
        data={ChartData}
        index="date"
        categories={['2022', '2023']}
        colors={['gray', 'blue']}
        yAxisWidth={30}
        onValueChange={(v) => setChartData(v)}
      />
      {/* <CodeBlock
        source={JSON.stringify(chartData, null, 2)}
        variant="empty"
        className="mt-8"
      /> */}

    </div>
  );
};

export default Chart;
