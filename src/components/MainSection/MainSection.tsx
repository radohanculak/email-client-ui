import MainSectionUpperBar from '../MainSectionUpperBar/MainSectionUpperBar';
import InputArea from '../InputArea/InputArea';
import MainSectionControls from '../MainSectionControls/MainSectionControls';

export const MainSection = () => {
  return (
    <div className="d-flex flex-column align-items-stretch flex-grow-1 bg-white">
      <MainSectionUpperBar />
      <InputArea />
      <MainSectionControls />
    </div>
  );
};

export default MainSection;
