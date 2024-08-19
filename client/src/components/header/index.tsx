import { Layout, Space, Typography, Button } from "antd"
import { TeamOutlined } from "@ant-design/icons"
import styles from "./index.module.css"
import { CustomButton } from "../custom-button"
import { Link } from "react-router-dom"
import { Paths } from "../../paths"

export const Header = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <TeamOutlined className={styles.teamOutlined} />
                <Link to={Paths.home}>
                    <CustomButton type="default">
                        <Typography.Title level={3}>Співробітники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.login}>
                    <CustomButton type="default">
                        <Typography.Title level={3}>Вхід</Typography.Title>
                    </CustomButton>
                </Link>
                <Link to={Paths.register}>
                    <CustomButton type="default">
                        <Typography.Title level={3}>Рєстрація</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}