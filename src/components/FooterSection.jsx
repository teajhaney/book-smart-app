import React from "react";
import { companyInfos, legals, downloads, helpCenters } from "../constants";

const FooterSection = () => {
  return (
    <footer className="bg-tertiary py-10">
      <div className="bodyContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-footerText/50">
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">COMPANY</h1>
          {companyInfos.map((companyInfo) => (
            <h1 className="text-sm">{companyInfo}</h1>
          ))}
        </div>
        {/* 2 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">HELP CENTER</h1>
          {helpCenters.map((helpCenter) => (
            <h1 className="text-sm">{helpCenter}</h1>
          ))}
        </div>
        {/* 3 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">LEGAL</h1>
          {legals.map((legal) => (
            <h1 className="text-sm">{legal}</h1>
          ))}
        </div>
        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold">DOWNLOAD</h1>
          {downloads.map((download) => (
            <h1 className="text-sm">{download}</h1>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
