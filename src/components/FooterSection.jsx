import React from "react";
import { companyInfos, legals, downloads, helpCenters } from "../constants";
import { FaRegCopyright } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <footer className="bg-tertiary py-10 flex flex-col gap-5 h-full">
      <div className="bodyContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white/70">
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">COMPANY</h1>
          {companyInfos.map((companyInfo, index) => (
            <h1 key={index} className="text-sm">
              {companyInfo}
            </h1>
          ))}
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">HELP CENTER</h1>
          {helpCenters.map((helpCenter, index) => (
            <h1 key={index} className="text-sm">
              {helpCenter}
            </h1>
          ))}
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">LEGAL</h1>
          {legals.map((legal, index) => (
            <h1 key={index} className="text-sm">
              {legal}
            </h1>
          ))}
        </div>
        {/* 4 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">DOWNLOAD</h1>
          {downloads.map((download, index) => (
            <h1 key={index} className="text-sm">
              {download}
            </h1>
          ))}
        </div>
      </div>
      <hr className="border-t border-t-footerText/50" />
      <div className="flex justify-center items-center gap-2 text-white/70">
        <FaRegCopyright className="text-sm" />
        <p className="text-sm">2025</p>
        <a className="text-sm hover:underline hover:decoration-primary hover:text-primary" href="https://github.com/teajhaney" target="_blank" rel="noreferrer"> Github @teajhaney</a>

      </div>
    </footer>
  );
};

export default FooterSection;
