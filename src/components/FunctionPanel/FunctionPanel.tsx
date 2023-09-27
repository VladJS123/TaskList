import React, { FC } from "react";
import { Button, Input, Space } from "antd";
import { v4 as uuidv4 } from "uuid";
import { createTask } from "actions/taskList.action";
import { useAppDispatch } from "store";
import { getCurrentDateAndTime } from "utils/getCurrentDateAndTime";

const DATE_FORMAT = "DD/MM/YYYY, YYYY h:mm A";

interface FunctionPanelProps {
  description: string;
  setDescription: (value: string) => void;
}

export const FunctionPanel: FC<FunctionPanelProps> = ({ description, setDescription }) => {
  const dispatch = useAppDispatch();
  const dateAndTime = getCurrentDateAndTime(DATE_FORMAT);
  const id = uuidv4();
  const onCreatTask = () => {
    if (description.length) {
      dispatch(createTask({ description, id, createdAt: dateAndTime }));
      setDescription("");
    }
  };

  return (
    <Space align="center" size="small">
      <Input
        maxLength={100}
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
        placeholder="Enter a task..."
        allowClear
        size="large"
      />
      <Button onClick={onCreatTask} type="primary" size="large">
        Add new task
      </Button>
    </Space>
  );
};
