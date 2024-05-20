import "./Search.css";

export interface ISearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search = ({ onChange }: ISearchProps) => {
  return <input type="text" onChange={onChange} className="search" />;
};
