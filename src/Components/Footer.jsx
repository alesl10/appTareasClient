import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterComponent = () => {
  return (
    <Footer className="bg-primary/90 " container>
      <div className="w-full">
        <div className="grid  w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              src="/pngegg.png"
              alt="Logo Tareas"
              name="TareasApp"
            />
          </div>
          <div className="grid  grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-secondary" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">
                  Alexis López
                </Footer.Link>
                <Footer.Link className="text-secondary" href="#">
                  Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-secondary" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">
                  Github
                </Footer.Link>
                <Footer.Link className="text-secondary" href="#">
                  Linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-secondary" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-secondary" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            className="text-secondary"
            href="#"
            by="Alexis Lopez"
            year={2024}
          />
          <div className="mt-4  flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              className="text-secondary"
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="text-secondary"
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon className="text-secondary" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-secondary" href="#" icon={BsGithub} />
            <Footer.Icon
              className="text-secondary"
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
