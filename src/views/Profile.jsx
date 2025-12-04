import { useNavigate } from "react-router";
import { useUser } from "../hooks/apiHooks.js";
import { useEffect, useState } from "react";
import { useUserContext } from "../hooks/contextHooks.js";
import { useLocation } from "react-router";

const Profile = () => {
  //const [user, setUser] = useState({});
  const { user } = useUserContext();
  const { getUserByToken } = useUser();

  useEffect(() => {}, [user]);

  console.log("profile view with user: ", user);

  return (
    <div>
      <h2 className="relative top-0 w-fit h-auto py-4 justify-left flex bg-gradient-to-r from-blue-400 via-white-500 to-red-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        Profile View
      </h2>
      {user && (
        <div className="font-extrabold">
          <div className="w-full my-auto py-6 flex flex-col justify-center gap-2">
            <div className="w-full flex sm:flex-row flex-col gap-2 justify-center">
              <div className="w-full">
                <dl className="[&_dt]:text-blue-400 divide-y divide-gray-300 [&_dd]:text-white
                [&>div]:flex-col [&>div]:p-3
                ">
                  <div>
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Username
                    </dt>
                    <dd>{user.username}</dd>
                  </div>

                  <div>
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Email
                    </dt>
                    <dd>{user.email}</dd>
                  </div>

                  <div>
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      Created At
                    </dt>
                    <dd>{user.created_at}</dd>
                  </div>

                  <div>
                    <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">
                      User Level
                    </dt>
                    <dd>{user.level_name}</dd>
                  </div>
                </dl>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
