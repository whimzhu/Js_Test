import styles from "../layouts/index.less";

// 水平垂直居中
const TestPage = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>123</div>
      <div className={styles.child}>567</div>
    </div>
  );
};

const TestPage1 = () => {
  return (
    <div className={styles.parent1}>
      <div className={styles.child1}>123</div>
    </div>
  );
};

const TestPage2 = () => {
  return (
    <div className={styles.parent2}>
      <div className={styles.child2}>123</div>
    </div>
  );
};

// Flex布局
const TestPage3 = () => {
  return (
    <div className={styles["flex-container"]}>
      <div className={styles["flex-item-1"]}>Item 1</div>
      <div className={styles["flex-item-2"]}>Item 2</div>
      <div className={styles["flex-item-3"]}>Item 3</div>
    </div>
  );
};

export default TestPage3;
