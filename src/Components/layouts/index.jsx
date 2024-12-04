import { Outlet } from "react-router-dom";

const index = () => {
  return (
    <div className="grow ">
      <Outlet />
    </div>
  );
};

export default index;
