import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
  textColor: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: '#EF7878', textColor: 'text-red-500' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: '#F9D479', textColor: 'text-yellow-500' },
  { name: 'In conversation', count: 50, value: 100, duration: '5 days', color: '#4A4A6A', textColor: 'text-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: '#82C59C', textColor: 'text-green-500' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: '#A076C0', textColor: 'text-purple-500' },
];

const totalLeads = funnelData.reduce((sum, stage) => sum + stage.count, 0);

const FunnelCountTable: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
        <div className="flex items-baseline gap-2 pt-2">
          <p className="text-4xl font-bold">600</p>
          <p className="text-muted-foreground">active leads</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full flex rounded-full h-2.5 overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className="h-full"
              style={{ width: `${(stage.count / totalLeads) * 100}%`, backgroundColor: stage.color }}
            />
          ))}
        </div>
        <div className="space-y-4 text-sm">
          {funnelData.map((stage) => (
            <div key={stage.name} className="grid grid-cols-[1fr_auto_auto_auto] items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stage.color }} />
                <span className="text-muted-foreground">{stage.name}</span>
              </div>
              <span className="font-medium text-foreground text-right">{stage.count}</span>
              <span className="font-medium text-muted-foreground text-right">$ {stage.value}</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                     <span className="font-medium text-muted-foreground text-right cursor-default">{stage.duration}</span>
                  </TooltipTrigger>
                  {stage.name === 'Qualified' && (
                    <TooltipContent>
                      <p>average time on this stage</p>
                    </TooltipContent>
                  )}
                </Tooltip>
              </TooltipProvider>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountTable;
