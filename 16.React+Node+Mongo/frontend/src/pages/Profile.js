import { useEffect, useState } from "react";

function Profile() {
  const [userdata, setUserdata] = useState({ name: "", email: "" });

  useEffect(() => {
    const email = localStorage.getItem("userEmail"); // ✅ Get saved email

    fetch(`http://localhost:5000/profile/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserdata({ name: data.name, email: data.email });
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>UserName: {userdata.name}</p>
      <p>Email: {userdata.email}</p>
    </div>
  );
}

export default Profile;
