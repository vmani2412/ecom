'use client'

import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
  
export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  return (
    <div className="flex">
      Dashboard
    </div>
  );
}
