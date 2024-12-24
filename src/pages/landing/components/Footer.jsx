import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div>
        <div className="text-[16px] mb-6">
          <p>
            Questions? <a href="#" className="text-gray-400 hover:underline">Contact us.</a>
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[14px] text-gray-400">
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Investor Relations</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Speed Test</a>
          <a href="#" className="hover:underline">Help Center</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
          <a href="#" className="hover:underline">Legal Notices</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Ways to Watch</a>
          <a href="#" className="hover:underline">Corporate Information</a>
          <a href="#" className="hover:underline">Only on Netflix</a>
          <a href="#" className="hover:underline">Media Center</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>
        <div className="mt-6">
          <select
            className="bg-black border border-gray-400 text-white py-2 px-4 text-sm"
            aria-label="Language Selector"
          >
            <option value="en">English</option>
            <option value="az">Azərbaycan</option>
          </select>
        </div>
        <div className="mt-4 text-xs text-gray-400">
          <p>Netflix Azerbaijan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
