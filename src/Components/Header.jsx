import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { UseAuth } from "../Context/AuthContext";

const Header = () => {
  const { user } = UseAuth();

  return (
    <Navbar className=" bg-primary/70 text-secondary" fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Tareas App
        </span>
      </Navbar.Brand>

      {user != null ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user.nombre} - {user.apellido}
              </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : (
        ""
      )}
      <Navbar.Collapse >
        <Navbar.Link className=" font-semibold" href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link className=" font-semibold" href="#">Pendientes</Navbar.Link>
        <Navbar.Link className=" font-semibold" href="#">Finalizadas</Navbar.Link>
        <Navbar.Link className=" font-semibold" href="#">Desistidas</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
