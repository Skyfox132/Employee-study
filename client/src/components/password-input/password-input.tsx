import React from 'react'
import { Form, Input } from "antd"
import { NamePath } from 'antd/es/form/interface'


type PassWordProps = {
    name: string,
    placeholder: string,
    dependencies?: NamePath[],
}


export const PasswordInput = ( {
    name,
    placeholder,
    dependencies
    }: PassWordProps ) => {

    return (
    <>
        <Form.Item
            name = {name}
            dependencies={dependencies}
            hasFeedback={true}
            rules={[{
                required: true,
                message:'Обов\'язкове поле'
            }, ({ getFieldValue})=> ({
                validator(_, value){
                    if(!value) {
                        return Promise.resolve()
                    }
                    if(name === "confirm password") {
                        if (value === getFieldValue("password") === value){
                            return Promise.resolve()

                        }
                        return Promise.reject(new Error("Паролі не однакові"))
                    } else {
                        if (value.length < 6) {
                            return Promise.reject(new Error("Пароль занадто короткий"))
                        }
                        return Promise.resolve()
                    }
                }
            })]}
        >
            <Input.Password placeholder={placeholder} size="large"/>
        </Form.Item>
    </>)
}