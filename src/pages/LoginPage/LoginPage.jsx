import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Background from '../../components/Background/Background';
import Header from '../../components/Header/Header';

const LoginPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <>
      <Background>
        <Header localPage="LoginPage" />
        <Container>
          {isLoading && <Loader />}
          <LoginForm />
        </Container>
      </Background>
    </>
  );
};
export default LoginPage;
