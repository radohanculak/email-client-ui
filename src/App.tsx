import Sidebar from './components/Sidebar/Sidebar';
import EmailListBar from './components/EmailListBar/EmailListBar';
import MainSection from './components/MainSection/MainSection';

export const App = () => {
  return (
    <body>
      <main className="d-flex flex-nowrap">
        <Sidebar />
        <EmailListBar />
        <MainSection />
      </main>
    </body>
  );
};

export default App;
