import '@/styles/globals.css';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Router from 'next/router';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <ToastContainer position='top-center'/>
    </>
  );
}

export default App;