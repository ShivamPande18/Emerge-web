"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { IoGrid } from "react-icons/io5";
import {
  FaUser,
  FaUserFriends,
  FaChartBar,
  FaPencilAlt,
  FaLinkedin,
  FaGithub,
  FaPlus,
  FaHeart,
  FaMedal,
} from "react-icons/fa";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sticky Sidebar */}
      <div className="w-16 md:w-64 bg-white h-screen sticky top-0 left-0 shadow-md z-10">
        {/* Logo Area */}
        <div className="p-4 border-b flex items-center justify-center md:justify-start">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-500 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div className="hidden md:flex ml-3 items-center">
              <span className="text-blue-500 font-bold text-xl">emerge</span>
              <div className="w-6 h-6 rounded-full bg-purple-500 ml-1 flex items-center justify-center">
                <span className="text-white text-xs">+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="py-4">
          <ul>
            <li className="mb-2">
              <Link
                href="#"
                onClick={() => setActiveTab("profile")}
                className={`flex items-center p-2 mx-2 rounded-md ${
                  activeTab === "profile"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaUser className="w-5 h-5" />
                <span className="hidden md:block ml-3">Profile</span>
                {activeTab === "profile" && (
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                onClick={() => setActiveTab("attributes")}
                className={`flex items-center p-2 mx-2 rounded-md ${
                  activeTab === "attributes"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaHeart className="w-5 h-5" />
                <span className="hidden md:block ml-3">Job Matches</span>
                {activeTab === "attributes" && (
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                onClick={() => setActiveTab("community")}
                className={`flex items-center p-2 mx-2 rounded-md ${
                  activeTab === "community"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaUserFriends className="w-5 h-5" />
                <span className="hidden md:block ml-3">Community</span>
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="#"
                onClick={() => setActiveTab("leaderboard")}
                className={`flex items-center p-2 mx-2 rounded-md ${
                  activeTab === "leaderboard"
                    ? "bg-purple-100 text-purple-600"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                <FaMedal className="w-5 h-5" />
                <span className="hidden md:block ml-3">Leaderboard</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Error Banner */}
        <div className="mb-4 bg-red-50 border border-red-200 rounded-md p-3 text-red-700 flex items-center">
          <div className="mr-2 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-500">!</span>
          </div>
          <div>
            <p className="text-red-500 font-medium">Auto-fill Failed</p>
            <p className="text-sm">
              Don't worry, this one AI took a coffee break! Your profile
              couldn't be auto-filled this time.
            </p>
            <p className="text-sm">
              No worries, just fill it out and we'll work our magic to find the
              best matches tailored just for you!
            </p>
          </div>
          <button className="ml-auto text-red-700">×</button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Profile Photo and Links */}
          <div className="bg-white rounded-md shadow p-6 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-gray-400 text-xs">Edit</span>
            </div>
            <p className="font-medium mb-4">John Doe</p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-gray-600"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white rounded-md shadow p-6">
            <h3 className="font-semibold mb-4">About Me</h3>
            <textarea
              className="w-full h-32 p-2 border border-gray-200 rounded-md text-gray-600"
              placeholder="Write about yourself..."
            ></textarea>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-md shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Languages</h3>
              <button className="text-gray-400">
                <FaPencilAlt size={14} />
              </button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">Hindi</p>
                <p className="text-gray-400 text-sm">Proficient</p>
              </div>
              <div className="text-purple-500">✓</div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded-md shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Education</h3>
              <button className="text-gray-400">
                <FaPencilAlt size={14} />
              </button>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-medium">My School</p>
                <p className="text-gray-400 text-sm">Grade: 100%</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Skills - Full Width */}
          <div className="bg-white rounded-md shadow p-6 md:col-span-2">
            <h3 className="font-semibold mb-4">Skills</h3>
            <div className="mb-4">
              <input
                type="text"
                className="w-full p-2 border border-gray-200 rounded-md"
                placeholder="Search your skills"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                Figma
              </span>
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                HTML
              </span>
              <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                React
              </span>
            </div>
          </div>

          {/* Work Experience - Full Width */}
          <div className="bg-white rounded-md shadow p-6 md:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Work Experience</h3>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">This Company</p>
                  <p className="text-gray-400 text-sm">2018 - 2019</p>
                  <p className="text-gray-600 text-sm mt-1">General Founder</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="/api/placeholder/48/48"
                    alt="Company logo"
                    className="w-12 h-12 rounded-full mr-2"
                  />
                  <button className="text-gray-400">
                    <FaPencilAlt size={14} />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="font-medium">Responsibility</p>
                <ul className="list-decimal pl-5 text-sm text-gray-600 mt-1">
                  <li>Found new things</li>
                  <li>Saw new things</li>
                </ul>
              </div>

              <div className="mt-4">
                <p className="font-medium">Skills:</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="bg-white p-4 rounded-md shadow mb-4 md:col-span-2">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Projects</h3>
            </div>
            <div className="border-b pb-3 mb-3">
              <div className="flex justify-between">
                <div className="font-medium">This Project</div>
                <button className="text-gray-400">✏️</button>
              </div>
              <div className="text-sm text-gray-500">Personal Project</div>
              <div className="mt-2">
                <div className="font-medium">Responsibility</div>
                <div className="text-sm pl-2">
                  <div>1. Created Design</div>
                  <div>2. Built UI/UX</div>
                </div>
                <div className="font-medium mt-2">Skills:</div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center py-2 text-purple-500">
              <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-2">
                +
              </span>
            </button>
          </div>

          {/* Certification */}
          <div className="bg-white p-4 rounded-md shadow mb-4 md:col-span-2">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Certification / Courses</h3>
              <button className="text-gray-400">✏️</button>
            </div>
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium">My Cert</div>
            </div>
            <button className="w-full flex items-center justify-center py-2 text-purple-500">
              <span className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-500 mr-2">
                +
              </span>
            </button>
          </div>

          {/*  */}
        </div>
        <div className="p-4 text-center text-sm text-gray-500 mt-8 mb-4">
          <div className="flex justify-center space-x-4 mb-2">
            <span>Learn</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
            <span>Lorem Ipsum</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            facere.
          </p>
        </div>
      </div>
    </div>
  );
}
