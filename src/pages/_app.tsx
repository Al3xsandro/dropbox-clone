import GlobalStyles from '../styles/GlobalStyles.module';
import SideMenu from '../components/SideMenu';
import MenuForm from '../components/MenuForm';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
