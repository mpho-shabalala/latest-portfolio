// src/pages/AboutMePage.jsx
import Header from "../assets/components/shared/header";

export default function AboutMePage() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This page contains information about you, your background, and experience.
        </p>
      </main>
    </>
  );
}
