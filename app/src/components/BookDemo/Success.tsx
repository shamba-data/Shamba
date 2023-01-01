import { FaGlobeAfrica } from "react-icons/fa";
import {
  AiFillCheckCircle,
  AiFillClockCircle,
  AiOutlineCalendar,
} from "react-icons/ai";

export default function Success({ date }) {
  return (
    <section className="mt-[2rem] flex flex-col items-center justify-center">
      <h3 className="text-2xl font-medium text-green">Shamba Data</h3>
      <div className="mt-3 flex space-x-2">
        <h3 className="text-lg font-medium text-gold">Confirmed</h3>
        <AiFillCheckCircle size={25} fill="#46783E" />
      </div>
      <p className="mt-3 text-lg">
        You have succesfully scheduled a meeting with Shamba Data
      </p>
      <div>
        <div className="mt-3 flex space-x-2">
          <AiFillClockCircle size={25} fill="#46783E" />
          <p>45 Min</p>
        </div>

        <div className="mt-3 flex space-x-2">
          <AiOutlineCalendar size={25} fill="#46783E" />
          <p>{date}</p>
        </div>
        <div className="mt-3 flex space-x-2">
          <FaGlobeAfrica size={25} fill="#46783E" />
          <p>Central Africa Time</p>
        </div>
      </div>

      <p className="mt-3 text-lg font-medium text-green">
        A calendar Invite has been sent to your email
      </p>
    </section>
  );
}
