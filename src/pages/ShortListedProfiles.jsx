import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { profiles } from "../data/profilesData";
import ProfileListPage from "./ProfileListPage";
// import { getShortListedProfilesService } from "../services/api.service"; // ❌ API later

const ShortListedProfiles = () => {
  // 🔹 API version (future use)
  /*
  const [profiles, setProfiles] = useState([]);

  const fetchShortListedProfiles = async () => {
    try {
      const res = await getShortListedProfilesService();
      const shortlisted = res.data.shortlistedProfiles.map(
        (item) => item.user
      );
      setProfiles(shortlisted);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShortListedProfiles();
  }, []);
  */

  // ✅ TEMP: data.js se shortlist
  const shortlistedProfiles = profiles.filter(
    (item) => item.status === "shortlisted"
  );

  return (
    <ProfileListPage
      title="Shortlisted Profiles"
      profiles={shortlistedProfiles}
      showBtns={true}
    />
  );
};

export default ShortListedProfiles;
