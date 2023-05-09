import React from "react";
import Header from "./assets/components/header/Header";
import Nav from "./assets/components/nav/Nav";
import NoPage from "./assets/components/noPage/NoPage";
import Contact from "./assets/components/contact/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skill from "./assets/components/skill/Skill";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Skill />
      <Contact />
      <Nav />
      <Routes>
        <Route path="/" element={<header />}>
          <Route index element={<header />} />
          <Route path="NoPage" element={<NoPage />} />
          <Route path="skill" element={<Skill />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
