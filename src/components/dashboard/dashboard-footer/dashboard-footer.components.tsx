import BudgetStatusBar from './budget-status-bar/budget-status-bar.component';
import { DashboardFooterContainer } from './dashboard-footer.styles';

const DashboardFooter = () => {
  return (
    <DashboardFooterContainer
      component="footer"
      bgcolor="primary.dark"
      color="primary.contrastText"
      borderTop={1}
      borderColor="divider"
    >
      <BudgetStatusBar />
    </DashboardFooterContainer>
  );
};

export default DashboardFooter;
