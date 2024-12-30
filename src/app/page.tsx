import AuthorCard from "@/components/AuthorCard";
import Feature from "@/components/Feature";
// import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
// import NavBar from "@/components/NavBar";
import React from "react";
import ContactPage from "./contact/page";


export default function Home() {
  return (
    <div>

      
      <Feature/>
      <Mega />
      <AuthorCard />
      <ContactPage/>
      
    </div>

  );
}
