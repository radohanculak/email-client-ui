import SearchBar from '../SearchBar/SearchBar';
import EmailPreview from '../EmailPreview/EmailPreview';

export const EmailListBar = () => {
  const kek = 40;
  return (
    <div className="d-flex flex-column align-items-stretch flex-shrink-1 bg-white" style={{ width: '380px' }}>
      <SearchBar />

      <div className="list-group list-group-flush border-bottom scrollarea">
        {[...Array(kek)].map(() => (
          <EmailPreview
            text="Lorem ipsum sit dolor amet. Some placeholder content in a paragraph below the heading and date."
            receivedAt="14.01.2023"
            subject="Important"
          />
        ))}
      </div>
    </div>
  );
};

export default EmailListBar;
