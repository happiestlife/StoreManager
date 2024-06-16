import { ContentLayoutComp } from "../../type/layout";

const ContentLayout: React.FC<ContentLayoutComp> = ({title, content, footer}: ContentLayoutComp) => {
  return (<>
    <div className="content-title">{title}</div>
    <div className="content">
      {content}
    </div>
    <div className="content-footer">
      {footer}
    </div>
  </>);
};

export default ContentLayout;