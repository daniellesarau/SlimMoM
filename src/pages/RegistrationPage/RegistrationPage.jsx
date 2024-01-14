import Container from '../../components/Container/Container';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Loader from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import Background from '../../components/Background/Background';
import Header from '../../components/Header/Header';

const RegistrationPage = () => {
  const isLoading = useSelector(authSelectors.getIsLoading);

  return (
    <Background>
      <Header localPage="RegistrationPage" />

      <Container>
        {isLoading && <Loader />}
        <RegistrationForm />
      </Container>
    </Background>
  );
};
export default RegistrationPage;
