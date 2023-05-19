import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {
  const handleLogout=async()=>{
    try {
      await signOut(auth)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div>
      <div className="flex justify-between navbar bg-base-100">
        <a className="text-xl font-bold underline normal-case">Gallery🌄</a>
        <button className="btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
