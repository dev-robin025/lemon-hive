import update from "immutability-helper";
import { FC, useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { SlOrganization } from "react-icons/sl";
import IConference from "../../interfaces/conference";
import Locations from "./Locations";
import NavItem from "./NabItem";
import Organizer from "./Organizer";
import Schedule from "./Schedule";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";

interface IProps {
  activeNav: String;
  setActiveNav: (id: String) => void;
  conference: IConference;
}

interface INavItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

const navigators = [
  { id: "speakers", label: "Speakers ", icon: <FiUsers /> },
  { id: "organizer", label: "Organizer", icon: <SlOrganization /> },
  { id: "location", label: "Location ", icon: <BiCurrentLocation /> },
  { id: "schedule", label: "Schedule", icon: <AiOutlineSchedule /> },
  { id: "sponsors", label: "Sponsors", icon: <FaHandshake /> },
];

const Sidebar: FC<IProps> = ({ setActiveNav, activeNav, conference }) => {
  const [navItems, setNavItems] = useState<INavItem[]>(navigators);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setNavItems((navItems: INavItem[]) =>
      update(navItems, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, navItems[dragIndex] as INavItem],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (navItem: INavItem, index: number) => {
      return (
        <NavItem key={navItem.id} index={index} id={navItem.id} moveCard={moveCard}>
          <div
            onClick={() => setActiveNav(activeNav === navItem.id ? "" : navItem.id)}
            className="space-y-3 "
          >
            <div
              className={`p-3 rounded-lg cursor-pointer flex items-center gap-5 text-xl font-bold ${
                activeNav === navItem.id
                  ? "bg-primary text-white shadow-lg"
                  : "border border-[#ECECEC] shadow-md"
              }`}
            >
              <span
                className={`text-primary p-3 text-2xl ${
                  navItem.id === activeNav && "bg-white rounded-lg text-primary"
                }`}
              >
                {navItem.icon}
              </span>{" "}
              {navItem.label}
            </div>
            {navItem.id === activeNav ? (
              <div className="bg-[url('/con-detail-bg.png')] px-4 py-5 rounded-lg space-y-3 hidden tablet:block mobile:px-3 mobile:py-3">
                {activeNav === "speakers" && <Speakers speakers={conference?.speakers} />}
                {activeNav === "organizer" && <Organizer organizer={conference.organizer} />}
                {activeNav === "location" && <Locations locations={conference.locations} />}
                {activeNav === "schedule" && <Schedule schedules={conference.schedules} />}
                {activeNav === "sponsors" && <Sponsors sponsors={conference.sponsors} />}
              </div>
            ) : null}
          </div>
        </NavItem>
      );
    },
    [activeNav, conference, moveCard, setActiveNav]
  );

  return (
    <div className="w-[365px] tablet:w-full">
      <DndProvider backend={HTML5Backend}>
        <div className="space-y-5">{navItems.map((item, key) => renderCard(item, key))}</div>
      </DndProvider>
    </div>
  );
};

export default Sidebar;
