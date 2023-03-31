import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, UserContextType } from "../../globalState";

import { BackIcon } from "../icons";
import OtherUserInfo from "./OtherUserInfo";
import ProfileCard from "./ProfileCard";
import "./UserDetails.scss";

const UserDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [tab, setTab] = useState<number>(0);

  const { loading, users, userDetails, updateUser, getUser } = useContext(
    UserContext
  ) as UserContextType;

  const fetchUser = () => {
    getUser(Number(params.id));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handlAction = (val: string, userId: string | undefined) => {
    if (userId) {
      updateUser(userId, users, val);
      navigate(-1);
    }
  };

  return (
    <div className="userDetails">
      <div className="back">
        <button type="button" onClick={() => navigate(-1)}>
          <BackIcon /> Back to Users
        </button>
      </div>
      <div className="pageHead">
        <h3>User Details</h3>
        <div>
          <button
            type="button"
            onClick={() => handlAction("blacklisted", userDetails?.id)}
          >
            Blacklist User
          </button>
          <button
            type="button"
            onClick={() => handlAction("active", userDetails?.id)}
          >
            Activate User
          </button>
        </div>
      </div>
      <ProfileCard
        userDetails={userDetails}
        loading={loading}
        switchTab={(val) => setTab(val)}
        tab={tab}
      />
      <OtherUserInfo userDetails={userDetails} loading={loading} tab={tab} />
    </div>
  );
};

export default UserDetails;
