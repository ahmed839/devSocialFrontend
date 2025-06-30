import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchConnections from "../thunks/fetchConnections";

const Connections = () => {
  const dispatch = useDispatch();
  const connectionData = useSelector((store) => store.connection);
  console.log("connection Data comes from connection", connectionData);
  useEffect(() => {
    dispatch(fetchConnections());
  }, [dispatch]);
  if (!connectionData || connectionData.length === 0)
    return <p>No connection Found</p>;
  return (
    <div className="flex justify-center py-11">
      <ul className="list bg-base-100 rounded-box shadow-md w-96 text-center">
        {connectionData.map((data) => {
          const { photoUrl, firstName, age, about } = data;
          return (
            <li className="list-row">
              <div>
                <img className="size-20 rounded-box" src={photoUrl} />
              </div>
              <div>
                <div>{firstName}</div>
                <div>{age}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {about}
                </div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M6 3L20 12 6 21 6 3z"></path>
                  </g>
                </svg>
              </button>
              <button className="btn btn-square btn-ghost">
                <svg
                  className="size-[1.2em]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </g>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Connections;
