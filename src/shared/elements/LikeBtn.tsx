type LikeBtnProps = {
  like: boolean;
  onClick: () => void;
};

export const LikeBtn = ({ like, onClick }: LikeBtnProps) => {
  return (
    <button
      className={`like-btn${like ? ' active' : ''}`}
      onClick={onClick}
      >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={like ? "#0A5EDC" : "none"}
        stroke="#93979F"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21C12 21 4 13.5 4 8.5C4 5.5 6.5 3 9.5 3C11.04 3 12.5 4 13 5.09C13.5 4 14.96 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"/>
      </svg>
    </button>
  )}