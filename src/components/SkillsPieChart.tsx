import { Cell, Pie, PieChart, Legend } from "recharts";

interface SkillsPieChartProps {
  data: { name: string; value: number; color: string }[];
  showChartAnimation?: boolean; // Optional prop to control animation
}

export interface SkillChartData {
  [key: string]: string | number;
  name: string;
  value: number;
  color: string;
}

interface LabelProps {
  tooltipPosition: { x: number; y: number };
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  x: number;
  y: number;
  color?: string;
}

const renderCustomizedLabel = ({
  tooltipPosition,
  x,
  y,
  percent,
  ...props
}: LabelProps) => {
  console.log(props);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      className="p-2 bg-white/20"
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const renderLegend = (props: any) => {
  const { payload }: { payload: SkillChartData[] } = props;
  console.log(props);

  return (
    <ul className={`flex justify-center p-2 gap-6 items-center`}>
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center space-x-1">
          <div
            className="w-4 h-4 rounded-sm"
            style={{ backgroundColor: entry.color }}
          />
          <span>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

function SkillsPieChart({ data, showChartAnimation }: SkillsPieChartProps) {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          isAnimationActive={showChartAnimation}
          hide={!showChartAnimation}
          nameKey="name"
          innerRadius={100}
          outerRadius={140}
          fill="#8884d8"
          paddingAngle={4}
          //@ts-ignore Don't feel like typing this out right now
          label={renderCustomizedLabel}
          labelLine={false}
        >
          {data.map((entry) => (
            <Cell
              key={`cell-${entry.name}`}
              fill={entry.color}
              stroke={entry.color}
              strokeWidth={2}
              rx={20 + (entry.name == "React" ? 10 : 0)}
              ry={220}
            />
          ))}
        </Pie>
        <Legend
          verticalAlign="top"
          height={36}
          iconSize={24}
          content={renderLegend}
        />
      </PieChart>
    </div>
  );
}

export default SkillsPieChart;
