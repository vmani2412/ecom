import Login from "./login/page";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <div className="menu-item">
        <Link href={`/dashboard/`}>Dashboard</Link>
        <Link href={`/login/`}>Login</Link>
        <Link href={`/register/`}>Register</Link>
      </div>
      <div className="Login">
        <Login />
      </div>
    </div>
  );
}
   