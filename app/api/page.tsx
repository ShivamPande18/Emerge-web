"use client";

import React from "react";
import axios from "axios";

// const API_URL = "https://shivampande.pythonanywhere.com/";
// const API_URL = "http://127.0.0.1:5000/";
const API_URL = "https://emerge-node-backend.onrender.com/";
const AI_URL = "https://python-api-u0yt.onrender.com/";

export default function Demo() {
  async function apiCall(inputString: string) {
    const response = await fetch(AI_URL + "process", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input_string: inputString }),
    });

    if (!response.ok) {
      console.error("Error:", response.statusText);
      return;
    }

    const data = await response.json();
    console.log("Response:", data.result);
  }

  async function nodeCall() {
    try {
      const response = await axios.post(API_URL + "add", {
        uid: "12345",
        username: "shivampande",
        email: "shivam@example.com",
      });

      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  function handlePress() {
    apiCall("shivam Pande");
    // nodeCall();
  }

  return (
    <>
      <button
        onClick={handlePress}
        className="bg-black text-white hover:cursor-pointer"
      >
        TEST
      </button>
    </>
  );
}
