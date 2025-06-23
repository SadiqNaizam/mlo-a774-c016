import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HelpCircle } from 'lucide-react';

interface ReasonItem {
  percentage: string;
  description: string;
}

interface OtherDataItem {
  value: string;
  label: string;
  hasInfo?: boolean;
}

const reasonsData: ReasonItem[] = [
  { percentage: '40%', description: 'The proposal is unclear' },
  { percentage: '20%', description: 'However venture pursuit' },
  { percentage: '10%', description: 'Other' },
  { percentage: '30%', description: 'The proposal is unclear' },
];

const otherData: OtherDataItem[] = [
  { value: '900', label: 'total leads count' },
  { value: '12', label: 'days in average to convert lead' },
  { value: '30', label: 'inactive leads', hasInfo: true },
];

const ReasonsLostGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
      <Card>
        <CardHeader>
          <CardTitle>Reasons of leads lost</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {reasonsData.map((reason, index) => (
              <div key={index} className="space-y-1">
                <p className="text-4xl font-bold">{reason.percentage}</p>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Other data</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-3 gap-x-4">
                {otherData.map((item, index) => (
                    <div key={index} className="space-y-1">
                        <p className="text-4xl font-bold">{item.value}</p>
                        <div className="flex items-center gap-1">
                            <p className="text-sm text-muted-foreground">{item.label}</p>
                            {item.hasInfo && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <HelpCircle className="h-4 w-4 text-muted-foreground" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Information about inactive leads.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReasonsLostGrid;
