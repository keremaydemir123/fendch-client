import React from 'react';

function TagList({ tags }: { tags: string[] }) {
  const logos: { src: string; alt: string }[] = [];

  const LOGOS_DIR = '/logos';

  tags?.forEach((tag) => {
    switch (tag) {
      case 'redux':
        logos.push({ src: `${LOGOS_DIR}/redux.svg`, alt: 'redux' });
        break;
      case 'tailwindcss':
        logos.push({
          src: `${LOGOS_DIR}/tailwindcss.svg`,
          alt: 'tailwindcss',
        });
        break;
      case 'javascript':
        logos.push({ src: `${LOGOS_DIR}/js.png`, alt: 'js' });
        break;
      case 'html':
        logos.push({ src: `${LOGOS_DIR}/html.svg`, alt: 'html' });
        break;
      case 'css':
        logos.push({ src: `${LOGOS_DIR}/css.svg`, alt: 'css' });
        break;
      case 'angular':
        logos.push({ src: `${LOGOS_DIR}/angular.png`, alt: 'angular' });
        break;
      case 'react':
        logos.push({ src: `${LOGOS_DIR}/react.svg`, alt: 'react' });
        break;
      case 'vue':
        logos.push({ src: `${LOGOS_DIR}/vue.svg`, alt: 'vue' });
        break;
      case 'bootstrap':
        logos.push({ src: `${LOGOS_DIR}/bootstrap.svg`, alt: 'bootstrap' });
        break;
      default:
        break;
    }
  });

  return (
    <div className="flex items-center gap-2 bg-opacity-20 py-[6px] px-2 rounded-lg justify-center">
      {logos.map((logoObj) => {
        const { src, alt } = logoObj;

        return <img key={src} src={src} alt={alt} className="w-6 h-6" />;
      })}
    </div>
  );
}

export default TagList;
