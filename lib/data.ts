import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/chat_app.png";
import rmtdevImg from "@/public/crypto_tracker.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated From Government Engineering College Modasa",
    location: "Modasa, India",
    description:
      "Earned a Bachelor's degree in Computer Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Freelance Full Stack Developer",
    location: "US-Remote",
    description:
      "Began my career during the COVID-19 pandemic, working as a freelance web developer at Dev Engineering.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Ahmedabad, India",
    description:
      "I'm now a full-stack developer working at Cognisun. My stack includes React, Node, TypeScript, Tailwind and MySql. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chat App using Socket.io",
    description: "A socket chat app is a real-time messaging tool for multiple users to communicate via a web interface.",
    tags: ["React", "Node.js", "MySql", "Material Ui", "REDUX", "Socket.io"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Crypto Tracker",
    description:
      "Created a cryptocurrency tracker with a listing page for all coins and a details page displaying current prices and market capitalization in either rupees or USD.",
    tags: ["React", "TypeScript", "Tailwind", "Redux", "Axios"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Node", "MYSQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "Material Ui",
  "MySql",
  "Framer Motion",
] as const;
