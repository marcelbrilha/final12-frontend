import { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { PostAdd, FindInPage } from "@material-ui/icons";

import Style from "../styles/Subscription";

function TabPanel({ children, value, index, classes, ...other }) {
  return (
    <div
      hidden={value !== index}
      id={`subscription-tab-panel-${index}`}
      {...other}
    >
      {value === index && <div className={classes.content}>{children}</div>}
    </div>
  );
}

function Subscription() {
  const classes = Style();
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.container}>
      <Tabs
        indicatorColor="secondary"
        textColor="secondary"
        value={value}
        onChange={handleChange}
      >
        <Tab icon={<PostAdd />} value="one" label="Emissões" />
        <Tab icon={<FindInPage />} value="two" label="Histórico" />
      </Tabs>

      <TabPanel value={value} classes={classes} index="one">
        Emissões
      </TabPanel>

      <TabPanel value={value} classes={classes} index="two">
        Histórico
      </TabPanel>
    </section>
  );
}

export default Subscription;
