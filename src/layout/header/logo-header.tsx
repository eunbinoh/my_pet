import { useState } from "react";

type HeaderProps = {
  hasHeadTab?: boolean;
  tabTitles?: string[];
  handleTab?: (tabIndex: number) => void;
  targetTab?: number;
};

const header: React.FC<HeaderProps> = ({ hasHeadTab, tabTitles, handleTab, targetTab }) => {
  const [ activeTab, setActiveTab ] = useState<number>(targetTab ?? 0);

  const clickTabs = (tabIndex: number) => {
    handleTab ? handleTab(tabIndex) : null;
    setActiveTab(tabIndex);
  }

  return (
    <>
      <div className='header-area'>
        <div className='logo'></div>
      </div>

      { hasHeadTab && tabTitles && (
        <div className='header-tabs'>
          { 
            tabTitles.map((tab, index) => (
              <button 
                key={index}
                className={ activeTab === index ? 'active' : ''} 
                onClick={ () => clickTabs(index) }
              >
                { tab }
              </button>
            ))
          }
        </div>
      )}
    </>
  )
}
export default header;