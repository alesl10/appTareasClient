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
    <Footer className="bg-primary/70 " container>
      <div className="w-full">
        <div className="grid  w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
          </div>
          <div className="grid  grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div >
              <Footer.Title className="text-secondary" title="about" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">Flowbite</Footer.Link>
                <Footer.Link className="text-secondary" href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-secondary" title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">Github</Footer.Link>
                <Footer.Link className="text-secondary" href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-secondary" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-secondary" href="#">Privacy Policy</Footer.Link>
                <Footer.Link className="text-secondary" href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright className="text-secondary" href="#" by="Flowbite™" year={2022} />
          <div className="mt-4  flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon className="text-secondary" href="#" icon={BsFacebook} />
            <Footer.Icon className="text-secondary" href="#" icon={BsInstagram} />
            <Footer.Icon className="text-secondary" href="#" icon={BsTwitter} />
            <Footer.Icon className="text-secondary" href="#" icon={BsGithub} />
            <Footer.Icon className="text-secondary" href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;