import React, { useEffect, useState } from "react";
import TabAds from "./TabAds";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsContainer() {
  const [value, setValue] = useState(0);
  const [math, setMath] = useState(null);
  const [query, setQuery] = useState("");

  const items = ["خودکار", "اسباب‌ بازی", "لوازم ورزشی", "ریاضی"];

  const handleTabs = (e, newValue) => {
    setValue(newValue);
    setQuery(items[newValue]);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.pindo.ir/v1/advertisement/search/?q=${query}&page=1`
        );
        const data = await response.json();
        console.log(data);
        setMath(data.data.advertisements);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div className="tabs-container">
      <div className="tabs-title">به وقت مدرسه</div>
      <Tabs value={value} onChange={handleTabs} className="tabs">
        <Tab label=" کلاس"></Tab>
        <Tab label=" تفریح"></Tab>
        <Tab label=" ورزش"></Tab>
        <Tab label=" درس"></Tab>
      </Tabs>
      <TabPanel value={value} index={0}>
        {math && <TabAds math={math} />}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {math && <TabAds math={math} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {math && <TabAds math={math} />}
      </TabPanel>
      <TabPanel value={value} index={3}>
        {math && <TabAds math={math} />}
      </TabPanel>
    </div>
  );
}

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <div>{children}</div>}</div>;
}

export default TabsContainer;
