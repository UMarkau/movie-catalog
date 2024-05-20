import "./Pagination.css";

interface IProps {
  currentPage: number;
  onChange: (page: number) => void;
  totalResults?: number;
}

export const Pagination = ({ currentPage, onChange, totalResults }: IProps) => {
  if (!totalResults) return <></>;

  let pages = Math.round(totalResults / 10);

  if (totalResults % 10 > 0) {
    pages++;
  }

  const pagesArr = Array.from(Array(pages), (_, i) => i + 1);

  return (
    <div className="pagination">
      {pagesArr.map((page) => (
        <button
          className={page === currentPage ? "active-page-number" : ""}
          onClick={() => onChange?.(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};
