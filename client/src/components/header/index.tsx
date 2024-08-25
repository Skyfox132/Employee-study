import { Layout, Space, Typography, Button } from "antd"
import { TeamOutlined, UserOutlined, LoginOutlined} from "@ant-design/icons"
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
            <Space direction="horizontal">
                <Link to={Paths.login}>
                    <CustomButton type="ghost" icon= { <LoginOutlined />}>
                        <Typography.Title level={4}>Вхід</Typography.Title>
                    </CustomButton>
                </Link>
                <Link to={Paths.register}>
                    <CustomButton type="ghost" icon = { <UserOutlined /> } >
                        <Typography.Title level={4}>Рєстрація</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    )
}