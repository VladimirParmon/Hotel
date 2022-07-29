import { useLocation } from "react-router-dom";

export function SingleApartmentPage() {
  const routerInfo = useLocation();
  console.log(routerInfo);
  return <p>Single page works!</p>;
}
