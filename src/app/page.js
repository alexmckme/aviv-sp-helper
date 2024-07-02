'use client'

import Image from "next/image";
import styles from "./page.module.css";

import { supabase } from "@/lib/supabase"

export default function Home() {

    async function logout() {
        const { error } = await supabase.auth.signOut()
    }

  return (
      <div>
        <div>Logged in !</div>
        <button onClick={logout}>Se déconnecter</button>
          <h2>Bienvenue sur Aviv BP Helper !</h2>
          <p>Ce site est conçu afin de vous permettre d'accéder plus facilement à certaines informations, sous une forme autre que des fichiers Google Sheets ou des rapports Salesforce</p>
          <p>Ce projet est une expérimentation, en constante évolution. Les feedbacks sont bienvenus !</p>
      </div>

  );
}
