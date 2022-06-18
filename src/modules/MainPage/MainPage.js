import styles from "./mainPage.module.css";
import { ReactComponent as Minsk } from "../../svg/minsk.svg";
import { Tabs } from "antd";
import DirectTime from "./DirectTime";
import StopWatch, { Timer } from "./StopWatch";
const { TabPane } = Tabs;

const MainPage = () => {
  return (
    <article className={styles.main}>
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="2">
          <TabPane tab="Точное время" key="1">
            <DirectTime></DirectTime>
          </TabPane>
          <TabPane tab="Таймер" key="2">
            <Timer />
          </TabPane>
          <TabPane tab="Секундомер" key="3">
            <StopWatch></StopWatch>
          </TabPane>
        </Tabs>
      </div>
      <main></main>
      <footer>
        <Minsk />
      </footer>
    </article>
  );
};

export default MainPage;
