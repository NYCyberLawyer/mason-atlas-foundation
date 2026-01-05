import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import MissionPage from '@/components/pages/MissionPage';
import ProgramsPage from '@/components/pages/ProgramsPage';
import ProgramDetailPage from '@/components/pages/ProgramDetailPage';
import GetHelpPage from '@/components/pages/GetHelpPage';
import GetInvolvedPage from '@/components/pages/GetInvolvedPage';
import ProgressPage from '@/components/pages/ProgressPage';
import NewsPage from '@/components/pages/NewsPage';
import NewsDetailPage from '@/components/pages/NewsDetailPage';
import DonatePage from '@/components/pages/DonatePage';
import ContactPage from '@/components/pages/ContactPage';
import TermsPage from '@/components/pages/TermsPage';
import PrivacyPage from '@/components/pages/PrivacyPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "mission",
        element: <MissionPage />,
      },
      {
        path: "programs",
        element: <ProgramsPage />,
      },
      {
        path: "programs/:id",
        element: <ProgramDetailPage />,
      },
      {
        path: "programs/get-help",
        element: <GetHelpPage />,
      },
      {
        path: "programs/get-involved",
        element: <GetInvolvedPage />,
      },
      {
        path: "progress",
        element: <ProgressPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "news/:id",
        element: <NewsDetailPage />,
      },
      {
        path: "donate",
        element: <DonatePage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
