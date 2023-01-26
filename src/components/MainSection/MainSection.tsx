import MainSectionUpperBar from '../MainSectionUpperBar/MainSectionUpperBar';
import InputArea from '../InputArea/InputArea';
import EmailViewArea from '../EmailViewArea/EmailViewArea';
import { Routes, Route, useParams } from 'react-router-dom';

export const MainSection = () => {
  return (
    <div className="d-flex flex-column align-items-stretch justify-content-between flex-grow-1 bg-white">
      <MainSectionUpperBar />
      <Routes>
        <Route path="email/:id" element={<EmailViewArea />} />
        <Route path="compose/" element={<InputArea />} />
        <Route path="*" element={<InputArea />} />
      </Routes>
    </div>
  );
};

export default MainSection;
