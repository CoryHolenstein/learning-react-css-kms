import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Box} from '@mui/material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const MainTab = () => {
  const [tabs, setTabs] = useState([
    { name: 'Tab1', component: <Tab1 /> },
    { name: 'Tab2', component: <Tab2 /> }
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
            <Tabs selectedIndex={selectedIndex} onSelect={index => setSelectedIndex(index)}>
            <Box component="section" sx={{
                width: 100,
                borderRadius: 1,
                display: 'flex',
                }}>
                <TabList>
                {tabs.map((tab, index) => (
                    <Tab key={index}>{tab.name}</Tab>
                ))}
                </TabList>
            </Box>
            <Box sx={{   
                justifyContent: 'right',
                marginLeft: '90%',
                }}>
                {tabs.map((tab, index) => (
                <TabPanel key={index}>
                    {tab.component}
                </TabPanel>
                ))}
           
            </Box>
        </Tabs>

    </div>
  );
}

export default MainTab;
