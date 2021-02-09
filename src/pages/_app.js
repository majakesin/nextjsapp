import Navbar from "../component/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;
