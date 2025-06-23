import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip as RechartsTooltip } from 'recharts';

interface SourceData {
  name: string;
  value: number;
  displayValue: string;
  percentage: string;
  color: string;
}

const sourcesData: SourceData[] = [
  { name: 'Clutch', value: 3000, displayValue: '$ 3 000', percentage: '50%', color: '#EF7878' },
  { name: 'Behance', value: 1000, displayValue: '$ 1 000', percentage: '40%', color: '#F9D479' },
  { name: 'Instagram', value: 1000, displayValue: '$ 1 000', percentage: '10%', color: '#31A39C' },
  { name: 'Dribbble', value: 1000, displayValue: '$ 1 000', percentage: '10%', color: '#82C59C' },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-2 border rounded-md shadow-lg">
        <p className="font-bold">{`${payload[0].name}: ${payload[0].payload.percentage}`}</p>
      </div>
    );
  }
  return null;
};

const SourcesPieChart: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Sources</CardTitle>
          <Button variant="outline" className="text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6 items-center">
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <RechartsTooltip content={<CustomTooltip />} />
                <Pie
                  data={sourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  paddingAngle={5}
                  cornerRadius={5}
                >
                  {sourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 text-sm">
            {sourcesData.map((source) => (
               <TooltipProvider key={source.name}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: source.color }} />
                        <span className="text-muted-foreground">{source.name}</span>
                      </div>
                      <span className="font-medium text-muted-foreground text-right">{source.displayValue}</span>
                      <span className="font-medium text-foreground text-right">{source.percentage}</span>
                    </div>
                  </TooltipTrigger>
                  {source.name === 'Dribbble' && (
                    <TooltipContent>
                      <p>from leads total</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center space-x-2 mt-4">
            <Button variant="ghost" className="text-muted-foreground">Leads came</Button>
            <Button variant="secondary" className="bg-accent text-accent-foreground">Leads Converted</Button>
            <Button variant="ghost" className="text-muted-foreground">Total deals size</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;
