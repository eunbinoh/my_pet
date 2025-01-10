import { ReactNode } from 'react';

interface ContentsProps {
  children: ReactNode;
}

const Contents = ({children}: ContentsProps) => {
  return (
    <div className="contents">{children}content</div>
  )
}
export default Contents;