import "./UserDropdown.css";

export interface IUserDropdownProps {
  name: string;
  onDropdownItemSelect?: (value: string) => void;
}

const OPTIONS = ["option 1", "option 2", "option 3"];

export const UserDropdown = ({
  name,
  onDropdownItemSelect,
}: IUserDropdownProps) => {
  return (
    <div className="dropdown">
      <span>{name}</span>
      <div className="dropdown-content">
        {OPTIONS.map((opt) => (
          <button onClick={() => onDropdownItemSelect?.(opt)} key={opt}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};
