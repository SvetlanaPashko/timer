import styles from "./mainPage.module.css";
import { ReactComponent as Minsk } from "../../svg/minsk.svg";
import { Tabs } from "antd";
import DirectTime from "./DirectTime";
const { TabPane } = Tabs;

const MainPage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <article className={styles.main}>
      <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" onChange={onChange}>
          <TabPane tab="Точное время" key="1">
            <DirectTime></DirectTime>
          </TabPane>
          <TabPane tab="Таймер" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Секундомер" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <main>center</main>
      <footer>
        <Minsk />
      </footer>
    </article>
  );
};

export default MainPage;
