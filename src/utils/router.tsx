import { createBrowserRouter } from 'react-router-dom';

import Front from '@/components/front/Front.component';
import DashboardLayout from '@/components/dashboard/dashboard-layout/DashboardLayout.compoent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Front />,
  },
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <div>가계부</div>,
      },
      {
        path: 'report',
        element: <div>보고서</div>,
      },
      {
        path: 'budget',
        element: <div>예산 관리</div>,
      },
      {
        path: 'account',
        element: <div>분류 관리</div>,
      },
    ],
  },
]);
