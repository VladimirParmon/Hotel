import logo from "app/assets/logo.png";

export function Loader() {
  return (
    <div className="loader">
      <img alt="loading..." src={logo} className="loader__image" />
    </div>
  );
}
