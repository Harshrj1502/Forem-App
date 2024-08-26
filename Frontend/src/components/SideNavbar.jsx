
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaBahai } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { FaPatreon } from "react-icons/fa6";

function SideNavbar() {
  let about = [
    { name: "FAQ", icons: <FaRegQuestionCircle /> },
    { name: "Backer perks", icons: <FaBahai /> },
    { name: "Contact Us", icons: <IoMdContact /> },
    { name: "Recent News", icons: <FaRegNewspaper /> },
    { name: "Game Data", icons: <FaDatabase /> },
  ];

  let development = [
    { name: "Roadmap", icons: <FaRoad /> },
    { name: "Changelog", icons: <FaClipboardList /> },
  ];
  let legal = [
    { name: "Terms of service", icons: <FaNewspaper /> },
    { name: "Privacy Policy", icons: <FaNewspaper /> },
    { name: "Review Policy", icons: <FaNewspaper /> },
  ];

  let social = [
    { name: "Discord", icons: <FaDiscord /> },
    { name: "Patreon", icons: <FaPatreon /> },
    { name: "Twitter", icons: <FaTwitter /> },
    { name: "Threads", icons: <FaThreads /> },
  ];

  return (
    <>
      <div className=" w-[30vw] justify-center flex flex-col items-center">
        <div className="">
          <span>About</span>
          <ul className="list-group">
            {about.map((items) => (
              <li>
                {items.name}
                <span>{items.icons}</span>
              </li>
            ))}
          </ul>
        </div>
        <div ClassName="Develop">
          <span>Development</span>
          <ul className="list-group">
            {development.map((items) => (
              <li>
                {items.name}
                <span>{items.icons}</span>
              </li>
            ))}
          </ul>
        </div>
        <div ClassName="legal">
          <span>legal</span>
          <ul className="list-group">
            {legal.map((items) => (
              <li>
                {items.name}
                <span>{items.icons}</span>
              </li>
            ))}
          </ul>
        </div>
        <div ClassName="Develop">
          <span>Social</span>
          <ul className="list-group">
            {social.map((items) => (
              <li>
                {items.name}
                <span>{items.icons}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default SideNavbar;