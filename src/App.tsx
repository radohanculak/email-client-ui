import Sidebar from './components/Sidebar/Sidebar';
import EmailListBar from './components/EmailListBar/EmailListBar';
import MainSection from './components/MainSection/MainSection';
import { RecoilRoot } from 'recoil';

export const App = () => {
  return (
    <body>
      <main className="d-flex flex-nowrap">
        <RecoilRoot>
          <Sidebar />
          <EmailListBar />
          <MainSection />
        </RecoilRoot>
      </main>
    </body>
  );
};

export default App;
