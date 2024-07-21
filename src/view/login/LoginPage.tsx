import React from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { login } from "./Login";
import ContentLayout from "../../layout/login/ContentLayout";
import { Content } from "antd/es/layout/layout";

export default function Login() {
  const navigate = useNavigate();

  const { useToken } = theme;
  const { useBreakpoint } = Grid;
  const { Text, Title, Link } = Typography;
  const { token } = useToken();
  const screens = useBreakpoint();

  const loginHandler = async ({id, password, remember}: {id: string, password: string, remember: boolean}) => {    
    const loginResult = await login({id, password});
    if(loginResult) {
      // TODO DB에서 불러온 메뉴 중 첫번째 메뉴로 이동하도록 수정
      navigate('/sales/month');
    }
  };

  const styles = {
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    } as React.CSSProperties,
  };

  const title = (<>
    <Title style={styles.title}>Sign in</Title>
    <div className="description">
      <Text>
        Welcome to <b>Jumping park</b>!<br/>Please enter your details below to sign in.  
      </Text> 
    </div>
  </>);

  const content = (<>
    <Form className="content" 
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            onFinish={loginHandler}
            layout="vertical"
            requiredMark="optional"
        >
          <Form.Item name="id"
            rules={[
              {
                required: true,
                message: "Please input your id!",
              },
            ]}
          >
          <Input
            prefix={<MailOutlined />}
            placeholder="id"
          />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link className="forgot-pw" href="/login/findPassword">Forgot password?</Link>
          </Form.Item>
          <Form.Item>
            <Button block={true} type="primary" htmlType="submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
  </>);

  const footer = (<>
    <Text>
      Don't have an account?<br/>
      Please connect to chickenman10@naver.com
    </Text>
    {/* <Link href="">Sign up now</Link> */}
  </>);

  const contentComp = { title, content, footer };

  return <ContentLayout {...contentComp}/>
}