import { PanelFooterContainer } from './panel-footer.style';

type PanelFooterProps = {
  children: React.ReactNode;
};

const PanelFooter = ({ children }: PanelFooterProps) => {
  return <PanelFooterContainer>{children}</PanelFooterContainer>;
};

export default PanelFooter;
