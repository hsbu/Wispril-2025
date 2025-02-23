import React from 'react';

const LinktreePage = () => {
  const links = [
    { title: "Main Page", url: "https://wisudaitb.id" },
    { title: "Instagram", url: "https://www.instagram.com/paradewisudaitb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" }, 
    { title: "Twitter", url: "https://x.com/paradewisudaitb" },
    { title: "Tiktok", url: "https://www.tiktok.com/@paradewisudaitb?is_from_webapp=1&sender_device=pc" }   
  ];

  return (
    <div className="min-h-screen bg-[#030033] flex flex-col items-center py-12 px-4">
      <div className="mb-8 text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#f96209] via-[#f395d5] to-[#6f00a5] mb-4 mx-auto"/>
        <h1 className="text-2xl font-bold text-white mb-2"> Parade Wisuda April ITB 2025</h1>
        <p className="text-gray-400">@hsbu</p>
      </div>

      {}
      <div className="w-full max-w-md space-y-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="block w-full p-4 text-center text-white 
                     bg-gradient-to-r from-[#f96209] to-[#6f00a5]
                     rounded-lg
                     transform transition-all duration-200
                     hover:translate-y-[-2px] hover:shadow-lg
                     active:translate-y-[1px] active:shadow-inner
                     hover:shadow-[#f395d5]/20"
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinktreePage;