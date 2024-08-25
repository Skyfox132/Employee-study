import React from 'react'
import { Layout } from '../../components/layout'
import { CustomButton } from '../../components/custom-button'
import { Space, Input, Button, Row, Card, Form, Typography } from "antd"
import { useState } from 'react'

import styles from "./index.module.css"
import { CustomInput } from '../../components/custom-input/custom-input'
import { PasswordInput } from '../../components/password-input/password-input'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'

export const Login = () => {
  const sendForm = () => null

  return (
    <Layout>
      <Row align={'middle'} justify={"center"}>
        <Card
          title='Вхід'
          style={{ width: "30rem", textAlign: "center" }}>
          <Form onFinish={sendForm}>
            <CustomInput
              name="email/login"
              placeholder='email або логін'
              type="email" />
            <PasswordInput
              name="password"
              placeholder='Введіть пароль' />
            <CustomButton
              type='primary'
              htmlType='submit'
              loading={false}>
              Войти
            </CustomButton>
            <Space direction='vertical'>
                <Typography.Text >
                  Немає аккаунту?
                  <Link to={Paths.register}> Регістрація</Link>
                </Typography.Text>
            </Space>
          </Form>
        </Card>

      </Row>
    </Layout>
  )
}
