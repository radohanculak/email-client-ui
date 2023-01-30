import Sidebar from './components/Sidebar/Sidebar';
import EmailListBar from './components/EmailListBar/EmailListBar';
import MainSection from './components/MainSection/MainSection';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from './recoil/atoms';
import LogIn from './components/LogIn/LogIn';

export const App = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  return (
    <main className="d-flex flex-nowrap justify-content-center">
      {isLoggedIn ? (
        <>
          <Sidebar />
          <EmailListBar />
          <MainSection />
        </>
      ) : (
        <LogIn />
      )}
    </main>
  );
};

export default App;
