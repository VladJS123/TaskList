import React, { FC } from "react";
import { Button, Popconfirm, Row, Typography } from "antd";
import { clearAllTasks } from "actions/taskList.action";
import { useAppDispatch } from "store";

import styles from "./Counter.module.scss";

interface CounterProps {
  amount: number;
}

export const Counter: FC<CounterProps> = ({ amount }) => {
  const dispatch = useAppDispatch();

  return (
    <Row align="middle" justify="space-around" className={styles.root}>
      <Typography.Text className={styles.counter}>Amount: {amount}</Typography.Text>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={() => dispatch(clearAllTasks([]))}
        okText="Yes"
        cancelText="No"
      >
        <Button className={styles.button} ghost disabled={!amount}>
          Clear all
        </Button>
      </Popconfirm>
    </Row>
  );
};
