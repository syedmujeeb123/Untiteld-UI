import logo from "../Components/images/logo.svg";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt={logo} />
      <p className="font-bold">Untitled UI</p>
    </div>
  );
}

export default Logo;
