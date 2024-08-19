import { Button, Form } from "antd"

type Props = {
    children: React.ReactNode,
    htmlType?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    type?: "primary" | "link" | "text" | "default" | "dashed" | undefined,
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
            <Button
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