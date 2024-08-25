import { Button, Form } from "antd"
import styles from "./index.module.css"

type Props = {
    children: React.ReactNode,
    htmlType?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    type?: "link" | "default" | "primary" | "text" | "dashed" | "ghost" | undefined,
    danger?: boolean | undefined,
    loading?: boolean,
    shape?: "default" | "circle" | "round" | undefined,
    icon?: React.ReactNode,
}


export const CustomButton = ({
    children,
    htmlType = "button",
    onClick,
    type,
    danger,
    loading,
    shape,
    icon }: Props) => {

    return (
        <Form.Item>
            <Button className={ styles.customBtn}
                htmlType={htmlType}
                type={type}
                danger={danger}
                onClick={onClick}
                loading={loading}
                shape={shape}
                icon={icon}
            >{children}</Button>
        </Form.Item>
    )
}