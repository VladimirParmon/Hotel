import { Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import MyBookings from "app/components/myBookings";
import PersonalInfo from "app/components/personalInfo";
import React, { useState } from "react";
import { PageContainer } from "./components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <React.Fragment>{children}</React.Fragment>}
    </div>
  );
}

export function SettingsPage() {
  const [tabsValue, setTabsValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabsValue(newValue);
  };
  return (
    <PageContainer>
      <Typography variant="h2">Settings</Typography>
      <Tabs
        value={tabsValue}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        allowScrollButtonsMobile
        sx={{ maxWidth: "100%", marginBottom: "30px" }}
        indicatorColor="secondary"
        textColor="secondary"
      >
        <Tab label="My profile" />
        <Tab label="My bookings" />
        <Tab label="Edit profile" />
      </Tabs>
      <TabPanel value={tabsValue} index={0}>
        <PersonalInfo />
      </TabPanel>
      <TabPanel value={tabsValue} index={1}>
        <MyBookings />
      </TabPanel>
      <TabPanel value={tabsValue} index={2}>
        Item Three
      </TabPanel>
    </PageContainer>
  );
}
