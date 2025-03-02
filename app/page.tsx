// pages/index.js
"use client";

import Head from "next/head";
import { useState } from "react";
import {
  ChevronRight,
  CheckCircle,
  Trophy,
  FileText,
  Users,
  Briefcase,
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Head>
        <title>emergeAI | AI-Powered Hiring Platform</title>
        <meta
          name="description"
          content="Revolutionize your hiring process with emergeAI - where talent meets opportunity through AI-powered assessments"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
                emergeAI
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Testimonials
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Login
              </a>
              <a
                href="/signup"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-4 py-2 rounded-md font-medium transition-all"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Find the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
                    perfect talent
                  </span>{" "}
                  with AI-powered assessments
                </h1>
                <p className="text-xl text-gray-600">
                  emergeAI revolutionizes recruitment by objectively ranking
                  candidates based on their skills and performance, not just
                  their resumes.
                </p>
                <div className="pt-4">
                  <form
                    className="flex flex-col sm:flex-row gap-3"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white px-6 py-3 rounded-md font-medium transition-all flex items-center justify-center"
                    >
                      Get Started <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-1" />
                    <span>Free trial</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-1" />
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-100 transform rotate-1 z-10 relative">
                  <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-4 rounded-md mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                      <Trophy className="h-5 w-5 text-amber-500 mr-2" /> Top
                      Frontend Developers
                    </h3>
                    <div className="mt-4 space-y-3">
                      {[
                        {
                          name: "Alex Chen",
                          score: 95,
                          skills: ["React", "TypeScript", "Next.js"],
                        },
                        {
                          name: "Jamie Rivera",
                          score: 92,
                          skills: ["Vue", "JavaScript", "CSS"],
                        },
                        {
                          name: "Sam Washington",
                          score: 88,
                          skills: ["Angular", "TypeScript", "SCSS"],
                        },
                      ].map((candidate, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white p-3 rounded-md shadow-sm border border-gray-100"
                        >
                          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white h-8 w-8 rounded-full flex items-center justify-center font-bold mr-3">
                            {idx + 1}
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium">{candidate.name}</h4>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {candidate.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-emerald-600">
                              {candidate.score}
                            </div>
                            <div className="text-xs text-gray-500">Score</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 -right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                How emergeAI Works
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform uses AI to objectively assess candidates and match
                them with the perfect opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-emerald-100 h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  1. Upload Resume
                </h3>
                <p className="text-gray-600">
                  Candidates create a profile and upload their CV. Our AI
                  analyzes their experience and skills.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                  <Trophy className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  2. Take Assessments
                </h3>
                <p className="text-gray-600">
                  Candidates complete domain-specific challenges designed to
                  test their actual abilities and problem-solving skills.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 h-14 w-14 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  3. Get Hired
                </h3>
                <p className="text-gray-600">
                  Companies browse domain-specific leaderboards to find
                  pre-vetted candidates who've proven their skills.
                </p>
              </div>
            </div>

            <div className="mt-16 flex justify-center">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 max-w-3xl">
                <h3 className="font-semibold text-lg text-blue-800 mb-3">
                  For Recruiters
                </h3>
                <p className="text-blue-700 mb-4">
                  Access leaderboards of pre-assessed candidates who have proven
                  their abilities. Save time and resources by focusing on
                  candidates who have already demonstrated their skills.
                </p>
                <a
                  href="/recruiters"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium"
                >
                  Learn more about our recruiter tools{" "}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 bg-gradient-to-br from-slate-50 to-slate-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose emergeAI
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform transforms the hiring process for both candidates
                and recruiters
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      For Candidates
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Showcase your actual skills through interactive assessments",
                        "Earn badges and certifications to boost your profile",
                        "Compare your performance with peers on domain-specific leaderboards",
                        "Get discovered by top companies looking for your specific skillset",
                        "Access personalized learning recommendations to improve your skills",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a
                        href="/candidates"
                        className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-md font-medium transition-colors"
                      >
                        Sign up as a candidate{" "}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      For Recruiters
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Access pre-vetted candidates who have demonstrated their abilities",
                        "Save time with AI-powered matching based on your specific requirements",
                        "Compare candidates objectively using standardized assessment scores",
                        "Reduce bias in your hiring process with skill-based evaluation",
                        "Track candidate engagement and interest in your opportunities",
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <a
                        href="/recruiters"
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition-colors"
                      >
                        Sign up as a recruiter{" "}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                What Our Users Say
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how emergeAI has transformed the hiring process for
                companies and candidates alike
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                    JD
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Jane Doe</h4>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "emergeAI helped me showcase my actual coding skills beyond
                  what my resume could convey. Within two weeks, I had three
                  interview offers from companies that were a perfect match for
                  my abilities."
                </p>
                <div className="flex mt-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-emerald-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                    MS
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Michael Smith</h4>
                    <p className="text-sm text-gray-600">
                      HR Director, TechGrowth
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "As a hiring manager, emergeAI has completely transformed our
                  recruitment process. We've reduced our time-to-hire by 60% and
                  the quality of candidates has improved dramatically. The
                  domain-specific leaderboards are a game-changer."
                </p>
                <div className="flex mt-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-blue-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                    AR
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Aisha Rodriguez</h4>
                    <p className="text-sm text-gray-600">Data Scientist</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The AI assessments on emergeAI are challenging but fair. I
                  love how the platform gamifies the job search process -
                  earning badges and climbing the leaderboard kept me motivated
                  while job hunting."
                </p>
                <div className="flex mt-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold">10,000+</div>
                <div className="mt-2 text-emerald-100">Skilled Candidates</div>
              </div>
              <div>
                <div className="text-4xl font-bold">500+</div>
                <div className="mt-2 text-emerald-100">Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold">25+</div>
                <div className="mt-2 text-emerald-100">Skill Domains</div>
              </div>
              <div>
                <div className="text-4xl font-bold">85%</div>
                <div className="mt-2 text-emerald-100">Placement Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-12 shadow-xl text-center text-white relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10 -ml-32 -mb-32"></div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
                Join emergeAI today and discover the future of skill-based
                recruitment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <a
                  href="/recruiter-signup"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all"
                >
                  For Recruiters
                </a>
                <a
                  href="/candidate-signup"
                  className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-md font-medium transition-all"
                >
                  For Candidates
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold text-white mb-4">emergeAI</div>
              <p className="mb-4">
                Revolutionizing tech recruitment through AI-powered skill
                assessments and gamification.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Platform
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} emergeAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
