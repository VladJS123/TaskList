import React, { FC, memo } from "react";
import { Button, List, Popconfirm, Space, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch } from "store";
import { editDescription, removeTask } from "actions/taskList.action";

import styles from "./Task.module.scss";

interface TaskProps {
  id: string;
  description: string;
  createdAt: string;
}

export const Task: FC<TaskProps> = memo(({ id, description, createdAt }) => {
  const dispatch = useAppDispatch();

  const onEditTask = (description: string) => {
    if (description.length) {
      dispatch(editDescription({ id, description }));
    }
  };

  return (
    <List.Item className={styles.root} id={id}>
      <Space direction="vertical" size="small">
        <Typography.Text
          editable={{
            maxLength: 100,
            onChange: onEditTask,
            text: description,
            tooltip: false
          }}
        >
          {description}
        </Typography.Text>
        <Typography.Text type="secondary" strong>
          Created at: {createdAt}
        </Typography.Text>
      </Space>
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={() => dispatch(removeTask(id))}
        okText="Yes"
        cancelText="No"
      >
        <Button>
          <DeleteOutlined />
        </Button>
      </Popconfirm>
    </List.Item>
  );
});
