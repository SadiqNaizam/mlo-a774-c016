import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, ChevronDown } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

const chartData = [
  { name: 'March', won: 65, lost: 88 },
  { name: 'April', won: 45, lost: 25 },
  { name: 'May', won: 68, lost: 98 },
  { name: 'June', won: 82, lost: 8 },
  { name: 'July', won: 89, lost: 42 },
  { name: 'August', won: 30, lost: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background p-3 border rounded-lg shadow-lg">
        <p className="label text-sm font-bold">{`${label}`}</p>
        <p className="intro text-green-500">{`Won : ${payload[0].value}`}</p>
        <p className="intro text-red-500">{`Lost : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div>
            <CardTitle>Leads tracking</CardTitle>
            <div className="flex items-baseline gap-4 pt-2">
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">680</p>
                <p className="text-muted-foreground">total closed</p>
              </div>
              <div className="flex items-baseline gap-2">
                <p className="text-4xl font-bold">70</p>
                <p className="text-muted-foreground">total lost</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="text-muted-foreground">
            <CalendarDays className="mr-2 h-4 w-4" />
            last 6 months
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#31A39C" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#31A39C" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF7878" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#EF7878" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'hsl(var(--border))', strokeWidth: 1, strokeDasharray: '3 3' }} />
              <Area type="monotone" dataKey="won" stroke="#31A39C" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" dot={{ r: 4, fill: '#31A39C', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6 }} />
              <Area type="monotone" dataKey="lost" stroke="#EF7878" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" dot={{ r: 4, fill: '#EF7878', stroke: 'hsl(var(--card))', strokeWidth: 2 }} activeDot={{ r: 6 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#31A39C]"></div>
                <span className="text-sm text-muted-foreground">Closed won</span>
            </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-[#EF7878]"></div>
                <span className="text-sm text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
