import ProfileHeader from "../components/Profile/ProfileHeader";
import TopArtists from "../components/Profile/TopArtists.jsx";
import TopTracks from "../components/Profile/TopTracks.jsx";
const Profile = () => {

  return (
    <section id="profile-section">
      <ProfileHeader />
      <TopArtists />
      <TopTracks />
    </section>
  )
}

export default Profile;