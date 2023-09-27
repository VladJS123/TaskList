import React, { FC, useState } from "react";
import { List, Typography } from "antd";
import { FunctionPanel } from "./components/FunctionPanel/FunctionPanel";
import { Counter } from "components/Counter/Counter";
import { Task } from "components/Task/Task";
import { WrapperContainer } from "components/Wrapper/WrapperContainer";
import { useAppSelector } from "store";
import { selectTaskListData } from "selectors/taskList.selector";
import classNames from "classnames";

import styles from "./App.module.scss";

export const App: FC = () => {
  const data = useAppSelector(selectTaskListData);
  const [description, setDescription] = useState("");

  return (
    <WrapperContainer>
      <Typography.Title level={4}>Todo List</Typography.Title>
      <FunctionPanel description={description} setDescription={setDescription} />
      <List
        className={classNames(styles.listWrapper, { [styles.isEmptyData]: !data.length })}
        dataSource={data}
        renderItem={(item) => <Task {...item} />}
      />
      <Counter amount={data.length} />
    </WrapperContainer>
  );
};
