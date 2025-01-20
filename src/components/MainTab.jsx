import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Box, Typography } from '@mui/material';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const MainTab = () => {
  const [tabs, setTabs] = useState([
    { name: 'Menu', component: <Tab1 /> },
    { name: 'Order', component: <Tab2 /> }
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div>
      <Tabs selectedIndex={selectedIndex} direction='ltr' onSelect={index => setSelectedIndex(index)}>
        <Box component="section" sx={{ width: 300, borderRadius: 1, border: '5px solid #000', display: 'flex', marginTop: '2%' }}>
          <TabList>
            {tabs.map((tab, index) => (
              <Tab key={index}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    padding: 1,
                    textDecorationLine: selectedIndex === index ? 'underline' : 'none'
                  }}
                >
                  {tab.name}
                </Typography>
              </Tab>
            ))}
          </TabList>
        </Box>

        <Box sx={{
          marginTop: '1%',
          marginLeft: '15%',
          display: 'flex',
          width: '55vw',
          maxHeight: '65vh',
          overflowY: 'auto',
          justifyContent: 'center',
          padding: 2,
          border: '1px solid grey',
          borderRadius: 2
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
