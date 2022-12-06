import { ReactElement, useState } from 'react'
import { motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/router';
import { Form, Input } from 'antd';

/** Import Components */
import { Section } from '@hotato/web/components'
import { ButtonPrimary, ButtonSecondary, buttonType } from '@hotato/shared/components'
/** Import Modules */
import { LayoutNoNavbar } from '@hotato/web/modules'
/** Import Services */
import { fadeLeft, fadeRight, authService } from '@hotato/shared/services'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)
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
      <div className="flex flex-wrap min-h-screen">
        <div className="pt-6 lg:pt-24 pb-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto">
            <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
              <motion.a variants={fadeLeft} href="/" className="text-3xl font-semibold leading-none">
                <img className="h-10" src="/assets/logo_hotato.png" alt="" width="auto" />
              </motion.a>
              <motion.div variants={fadeRight}>
                <ButtonSecondary
                  path="/register"
                >
                  Sign Up
                </ButtonSecondary>
              </motion.div>
            </div>
            <div>
              <div className="mb-6 px-3">
                <h3 className="text-2xl font-bold">Đăng Nhập Hotato</h3>
              </div>
              <Form
                name="login-form"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Tên đăng nhập"
                  name="username"
                  rules={[{ required: true, message: 'Tên đăng nhập không được để trống!' }]}
                >
                  <div className="mb-2 flex p-4 mx-3 bg-gray-50 rounded">
                    <Input className="w-full text-xs !bg-gray-50 outline-none border-none focus:shadow-none" type="text" placeholder="name@email.com"/>
                    <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                    </svg>
                  </div>
                </Form.Item>
                <Form.Item
                  label="Mật khẩu"
                  name="password"
                  className="mb-12"
                  rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
                >
                  <div className="mb-2 flex p-4 mx-3 bg-gray-50 rounded">
                    <Input className="w-full text-xs !bg-gray-50 outline-none border-none focus:shadow-none" type={showPassword ? 'text' : 'password'} placeholder="Enter your password"/>
                    <button onClick={() => { setShowPassword(!showPassword) }} type="button">
                      <svg className="h-6 w-6 ml-4 my-auto text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </button>
                  </div>
                </Form.Item>
                <div className="px-3 text-center">
                  <ButtonPrimary
                    className="block w-full py-3 mb-3"
                    type={buttonType.submit}
                  >
                    Sign In
                  </ButtonPrimary>
                  <a className="text-xs text-green-600 hover:underline" href="#">Forgot password?</a>
                  <ButtonPrimary
                    outline
                    className="w-full mt-3 flex items-center justify-center"
                  >
                    <span className="icon-icons8-google-v2 text-2xl mr-2"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></span>
                    Login With Google
                  </ButtonPrimary>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full lg:w-1/2 bg-green-600">
          <div className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center z-[10]">
            <img className="max-w-xl" src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png" alt="" />
            <h2 className="mb-2 text-2xl text-white font-bold">So much more than a business analytics tool</h2>
            <div className="max-w-lg mx-auto">
              <p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
            </div>
            <a className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold" href="#">Get Started</a>
            <div className="mt-12 flex justify-center space-x-3">
              <button className="p-1 bg-green-500 rounded-full"></button>
              <button className="p-1 bg-green-500 rounded-full"></button>
              <button className="p-1 bg-white rounded-full"></button>
              <button className="p-1 bg-green-500 rounded-full"></button>
            </div>
          </div>
        </div>
        <div className="lg:hidden bg-green-600">
          <div className="relative w-full">
            <img className="relative mx-auto max-w-sm mt-4 mb-4 block" src="atis-assets/illustrations/pablo-coming-soon-dark-mono.png" alt="" />
            <div className="flex justify-center space-x-3">
              <button className="p-1 bg-green-500 rounded-full"></button>
              <button className="p-1 bg-green-500 rounded-full"></button>
              <button className="p-1 bg-white rounded-full"></button>
              <button className="p-1 bg-green-500 rounded-full"></button>
            </div>
          </div>
          <div className="py-10 px-3 text-center z-[10]">
            <h2 className="mb-2 text-2xl text-white font-bold">So much more than a business analytics tool</h2>
            <p className="mb-6 text-gray-50 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
            <a className="py-2 px-6 leading-loose rounded-t-xl rounded-l-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold" href="#">Get Started</a>
          </div>
        </div>
      </div>
    </Section>
  );
}

Login.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutNoNavbar>
      {page}
    </LayoutNoNavbar>
  )
}

export default Login;



