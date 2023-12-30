import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div>Nav</div>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
