import React, { FC } from "react";
import { Row } from "antd";

import styles from "./WrapperContainer.module.scss";

interface WrapperContainerProps {
  children: React.ReactNode;
}

export const WrapperContainer: FC<WrapperContainerProps> = ({ children }) => (
  <Row className={styles.root} align="middle" justify="center">
    <Row align="middle" justify="center" className={styles.container}>
      {children}
    </Row>
  </Row>
);
