import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import FunnelCountTable from '../components/Dashboard/FunnelCountTable';
import SourcesPieChart from '../components/Dashboard/SourcesPieChart';
import LeadsTrackingChart from '../components/Dashboard/LeadsTrackingChart';
import ReasonsLostGrid from '../components/Dashboard/ReasonsLostGrid';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

/**
 * Dashboard Overview Page
 * This page assembles the main dashboard components into a single view,
 * structured within the MainAppLayout.
 * It includes a tabbed interface to switch between 'Sales' and 'Leads' views.
 */
const Index: React.FC = () => {
  return (
    <MainAppLayout>
      <div className="flex flex-col gap-y-6">
        <Tabs defaultValue="leads" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:w-fit sm:grid-cols-none">
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
          </TabsList>
          <TabsContent value="sales" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>
                  A comprehensive overview of your sales performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-64 items-center justify-center rounded-md border border-dashed">
                  <p className="text-muted-foreground">Sales dashboard content coming soon.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leads" className="mt-4">
            {/* 
              Main content grid for the Leads dashboard.
              - Layout: 1 column on small screens, 2 columns on medium screens and up.
              - FunnelCountTable and SourcesPieChart occupy one column each.
              - LeadsTrackingChart and ReasonsLostGrid span both columns (col-span-2 is defined within the components).
            */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <FunnelCountTable />
              <SourcesPieChart />
              <LeadsTrackingChart />
              <ReasonsLostGrid />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainAppLayout>
  );
};

export default Index;
