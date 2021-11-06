import Header from "../components/Header";
import Content from "../components/Login";
import Footer from "../components/Footer";

function Login() {
  return (
    <>
      <Header isRegister={false} />
      <Content />
      <Footer />
    </>
  );
}

export default Login;
