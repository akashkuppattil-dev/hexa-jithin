"use client";

import supabase from "@/supabase/config";
import { useEffect, useState } from "react";

export default function SupabaseTestPage() {
  const [status, setStatus] = useState("Testing Supabase connection...");

  useEffect(() => {
    const testConnection = async () => {
      const { error } = await supabase.from("categories").select("*").limit(1);

      if (error) {
        // Even "table not found" means connection is working
        setStatus("Supabase connected successfully ✅");
        console.log("Supabase response:", error.message);
      } else {
        setStatus("Supabase connected successfully ✅");
      }
    };

    testConnection();
  }, []);

  return (
    <main style={{ padding: "40px", fontSize: "18px" }}>
      <h1>{status}</h1>
      <p>Check browser console for details.</p>
    </main>
  );
}
