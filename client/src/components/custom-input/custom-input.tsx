import React from "react"
import { Form, Input } from "antd"

type CIprops = {
    name: string,
    placeholder: string,
    type?: "text" | "password" | "radio" | "number" | "email",
}

export const CustomInput = ({ name, placeholder = "Заполните поле", type = "text"
}: CIprops) => {
    return (
        <>
            <Form.Item
                name={name}
                shouldUpdate={true}
                rules = {[{ required: true, message: "Обов'язкове поле" }]}
                >
                <Input placeholder={placeholder} type={type} size="large">

                </Input>
            </Form.Item>
        </>
    )

}