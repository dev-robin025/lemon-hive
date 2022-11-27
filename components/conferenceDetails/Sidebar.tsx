import { useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { SlOrganization } from "react-icons/sl";

const navigators = [
  { id: "1", label: "Speakers ", icon: <FiUsers /> },
  { id: "5", label: "Organizer", icon: <SlOrganization /> },
  { id: "2", label: "Location ", icon: <BiCurrentLocation /> },
  { id: "3", label: "Schedule", icon: <AiOutlineSchedule /> },
  { id: "4", label: "Sponsors", icon: <FaHandshake /> },
];

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState("1");

  return (
    <div className="w-[365px] tablet:w-full">
      <div className="space-y-5">
        {navigators.map((item) => (
          <div key={item.id} onClick={() => setActiveNav(item.id)} className="space-y-3 ">
            <div
              className={`p-3 rounded-lg cursor-pointer flex items-center gap-5 text-xl font-bold ${
                activeNav === item.id ? "bg-primary text-white shadow-md" : "border shadow"
              }`}
            >
              <span
                className={`text-primary p-3 text-2xl ${
                  item.id === activeNav && "bg-white rounded-lg text-primary"
                }`}
              >
                {item.icon}
              </span>{" "}
              {item.label}
            </div>
            {item.id === activeNav ? (
              <div className="bg-[url('/con-detail-bg.png')] px-4 py-5 rounded-lg space-y-3 hidden tablet:block">
                <div className="bg-white p-5 rounded-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque numquam
                  laudantium accusantium, libero voluptates eveniet, repudiandae nostrum corporis
                  dolor.
                </div>
                <div className="bg-white p-5 rounded-lg">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque numquam
                  laudantium accusantium, libero voluptates eveniet, repudiandae nostrum corporis
                  dolor.
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
