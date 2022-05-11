import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react'
import Layout from './Layout';

const HomePage = lazy(() => import('./pages/HomePage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
