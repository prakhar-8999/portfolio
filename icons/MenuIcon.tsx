import {colors} from "@/libs/colors";

const MenuIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="hidden sm:block"
        style={{fill: "rgba(0, 0, 0, 1)", transform: "", msFilter: ""}}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="block sm:hidden"
        style={{fill: colors.primary, transform: "", msFilter: ""}}
      >
        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
      </svg>
    </>
  );
};

export default MenuIcon;
