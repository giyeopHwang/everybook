import BudgetStatusBar from './budget-status-bar/budget-status-bar.component';
import { DashboardFooterContainer } from './dashboard-footer.styles';

const DashboardFooter = () => {
  return (
    <DashboardFooterContainer>
      <BudgetStatusBar />
    </DashboardFooterContainer>
  );
};

export default DashboardFooter;
