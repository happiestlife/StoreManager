import { Grid, theme, Typography } from "antd";

import { ContentLayoutComp } from "../../type/layout";

const ContentLayout: React.FC<ContentLayoutComp> = ({title, content, footer}) => {

  const { useToken } = theme;
  const { token } = useToken();

  const styles = {
    header: {
      marginBottom: token.marginXL
    } as React.CSSProperties,
    footer: {
      marginTop: token.marginLG,
    } as React.CSSProperties,
  };


  return (<>
    <div className="header" style={styles.header}>
      {title}
    </div>
    <div className="content">
      {content}
      <div className="footer" style={styles.footer}>
        {footer}
      </div>
    </div>
  </>);
};

export default ContentLayout;