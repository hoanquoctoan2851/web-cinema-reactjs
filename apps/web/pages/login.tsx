import { ReactElement, useState } from 'react'
import React, { useCallback } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';

/** Import Components */
import { Section } from '@hotato/web/components'
import { ButtonPrimary, buttonType } from '@hotato/shared/components'
/** Import Modules */
import { Layout} from '@hotato/web/modules'
/** Import Services */
import { authService } from '@hotato/shared/services'


export function Login() {
  const [showPassword] = useState(false)
  const router = useRouter()
  const onFinish = async (values: any) => {
    try {
      const { data, status: statusInfo } = await authService.login(values)
      const status = await signIn('credentials',
        {
          redirect: false,
          ...values,
          callbackUrl: "/"
        }
      )
      if (statusInfo === 200 && data._id) {
        // const { data } = await authService.getUserInfo()
        router.push('/')
      }
    } catch (error) {
      console.log('handleLogin failed ==> ', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Section className="mod-login">
      <div className="flex min-h-screen">
        <div className="pt-6 lg:pt-24 pb-6 w-full">
          <div className="max-w-md mx-auto">
            <div className="mb-6 w-full flex items-center justify-between">
                <div
                  className='w-full flex cursor-pointer items-center justify-center h-[48px] bg-sky-500'
                  path="/register"
                >
                  Đăng Nhập
                </div>
              <div
                  className=" h-[48px] w-full cursor-pointer justify-center flex items-center"
                  path="/register"
                >
                  Đăng Ký
                </div>
            </div>
            <div>
              <Form
                name="login-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="username"
                >
                  <div className="mb-2 flex bg-gray-50 rounded">
                    <Input className="w-full h-12 text-xs !bg-gray-50 outline-none focus:shadow-none" type="text" placeholder="name@email.com"/>
                  </div>
                </Form.Item>
                <Form.Item
                  label="Mật khẩu"
                  name="password"
                >
                  <div className=" flex bg-gray-50 rounded">
                    <Input className="w-full h-12 text-xs !bg-gray-50 outline-none focus:shadow-none" type={showPassword ? 'text' : 'password'} placeholder="Enter your password"/>
                  </div>
                </Form.Item>
                <p>Quên mật khẩu?</p>
                <div className=" text-center">
                  <ButtonPrimary
                    className="block w-full py-3 mb-3"
                    type={buttonType.submit}
                  >
                    ĐĂNG NHẬP BẰNG TÀI KHOẢN
                  </ButtonPrimary>
                  <ButtonPrimary
                    outline
                    className="w-full mt-3 flex items-center justify-center"
                  >
                    ĐĂNG NHẬP BẰNG FACEBOOK
                  </ButtonPrimary>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Login;



