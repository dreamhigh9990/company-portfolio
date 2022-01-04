import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
// import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
// import GuestGuard from '../guards/GuestGuard';
// import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // {
    //   path: 'auth',
    //   children: [
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <Login />
    //         </GuestGuard>
    //       )
    //     },
    //     {
    //       path: 'register',
    //       element: (
    //         <GuestGuard>
    //           <Register />
    //         </GuestGuard>
    //       )
    //     },
    //     { path: 'login-unprotected', element: <Login /> },
    //     { path: 'register-unprotected', element: <Register /> },
    //     { path: 'reset-password', element: <ResetPassword /> },
    //     { path: 'verify', element: <VerifyCode /> }
    //   ]
    // },

    // // Dashboard Routes
    // {
    //   path: 'admin',
    //   element: (
    //     <AuthGuard>
    //       <DashboardLayout />
    //     </AuthGuard>
    //   ),
    //   children: [
    //     { element: <Navigate to="/admin/earning/list" replace /> },
    //     { path: 'dashboard', element: <GeneralEcommerce /> },
    //     { path: 'analytics', element: <GeneralAnalytics /> },

    //     {
    //       path: 'product',
    //       children: [
    //         { element: <Navigate to="/admin/product/list" replace /> },
    //         { path: 'shop', element: <EcommerceShop /> },
    //         { path: ':name', element: <EcommerceProductDetails /> },
    //         { path: 'list', element: <EcommerceProductList /> },
    //         { path: 'new', element: <EcommerceProductCreate /> },
    //         { path: ':name/edit', element: <EcommerceProductCreate /> },
    //         { path: 'checkout', element: <EcommerceCheckout /> },
    //         { path: 'invoice', element: <EcommerceInvoice /> },
    //         { path: 'import', element: <EcommerceProductImport /> }
    //       ]
    //     },
    //     {
    //       path: 'user',
    //       children: [
    //         { element: <Navigate to="/admin/user/list" replace /> },
    //         { path: 'profile', element: <UserProfile /> },
    //         { path: 'cards', element: <UserCards /> },
    //         { path: 'list', element: <UserList /> },
    //         { path: 'new', element: <UserCreate /> },
    //         { path: ':name/edit', element: <UserCreate /> },
    //         { path: 'account', element: <UserAccount /> }
    //       ]
    //     },
    //     {
    //       path: 'earning',
    //       children: [
    //         { element: <Navigate to="/admin/earning/list" replace /> },
    //         { path: 'list', element: <BlogPosts /> },
    //         { path: 'earning/post/:title', element: <BlogPost /> }
    //         // { path: 'new-post', element: <BlogNewPost /> }
    //       ]
    //     }
    //   ]
    // },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        // { path: 'coming-soon', element: <ComingSoon /> },
        // { path: 'maintenance', element: <Maintenance /> },
        // { path: 'pricing', element: <Pricing /> },
        // { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'portfolio', element: <Portfolio /> },
        // { path: 'faqs', element: <Faqs /> },
        // { path: 'market', element: <Market /> },
        // { path: 'sell', element: <Sell /> },
        // { path: 'walletAssets', element: <WalletAssets /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
// const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
// const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
// const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
// const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// // Dashboard
// const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
// const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
// const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
// const EcommerceProductDetails = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductDetails')));
// const EcommerceProductList = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductList')));
// const EcommerceProductCreate = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductCreate')));
// const EcommerceProductImport = Loadable(lazy(() => import('../pages/dashboard/EcommerceProductImport')));
// const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));
// const EcommerceInvoice = Loadable(lazy(() => import('../pages/dashboard/EcommerceInvoice')));
// const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
// const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
// const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));
// const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
// const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
// const UserList = Loadable(lazy(() => import('../pages/dashboard/UserList')));
// const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
// const UserCreate = Loadable(lazy(() => import('../pages/dashboard/UserCreate')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Portfolio = Loadable(lazy(() => import('../pages/Portfolio')));
// const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
// const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
// const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
// const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
// const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
// const Market = Loadable(lazy(() => import('../pages/Market')));
// const Sell = Loadable(lazy(() => import('../pages/Sell')));
// const WalletAssets = Loadable(lazy(() => import('../pages/WalletAssets')));
