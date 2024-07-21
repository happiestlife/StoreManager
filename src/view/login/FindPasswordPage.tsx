import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { ContentLayoutComp } from "../../type/layout";
import ContentLayout from "../../layout/login/ContentLayout";

const FindPasswordPage:React.FC = () => {

  const { useToken } = theme;
  const { useBreakpoint } = Grid;
  const { Text, Title, Link } = Typography;
  const { token } = useToken();
  const screens = useBreakpoint();

  const styles = {
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    } as React.CSSProperties,
  };
  
  const title = (<>
    <Title style={styles.title}>Find password</Title>
    <div className="description">
      <Text>
        Please enter your email and name below to find you password.  
      </Text> 
    </div>
  </>);
  
  const content = (<>
    <Form className="content" 
            name="normal_login"
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            requiredMark="optional"
        >
          <Form.Item name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input
              placeholder="name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              type="email"
              placeholder="email"
            />
          </Form.Item>
          <Form.Item>
            <Button block={true} type="primary" htmlType="submit">
              Find password
            </Button>
          </Form.Item>
        </Form>
  </>);

  const contentComp:ContentLayoutComp = {title, content};

  return <ContentLayout {...contentComp} />
}

export default FindPasswordPage;