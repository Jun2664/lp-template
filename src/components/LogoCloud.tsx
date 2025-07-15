import React from 'react';

interface LogoCloudProps {
  logos: Array<{
    name: string;
    svg: React.ReactNode;
  }>;
}

export const LogoCloud: React.FC<LogoCloudProps> = ({ logos }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      {logos.map((logo, index) => (
        <div
          key={index}
          className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-200"
          aria-label={`${logo.name}のロゴ`}
        >
          {logo.svg}
        </div>
      ))}
    </div>
  );
};