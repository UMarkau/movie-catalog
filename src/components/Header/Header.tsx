import {
  Search,
  UserDropdown,
  ISearchProps,
  IUserDropdownProps,
} from "./components";

import "./Header.css";

interface IProps extends ISearchProps, IUserDropdownProps {}

export const Header = ({ name, onChange, onDropdownItemSelect }: IProps) => {
  return (
    <header className="header">
      <h1>Movie Catalog</h1>
      <Search onChange={onChange} />
      <UserDropdown name={name} onDropdownItemSelect={onDropdownItemSelect} />
    </header>
  );
};
