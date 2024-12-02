import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="grow bg-secondary">
      <Outlet />
    </div>
  );
};

export default index;
