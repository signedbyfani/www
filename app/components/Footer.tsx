'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [visitorTime, setVisitorTime] = useState<string>('');
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      // Visitor's local time
      const localTime = new Date();
      setVisitorTime(localTime.toLocaleTimeString());

      // IST time (UTC+5:30)
      const istOptions: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      setIstTime(localTime.toLocaleString('en-US', istOptions));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const siteMap = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Visual Feed', href: '/visual-feed' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/fanindra-m/' },
    { name: 'Behance', href: 'https://www.behance.net/imfanindra' },
    { name: 'Twitter', href: 'https://x.com/signedbyfani' },
    { name: 'GitHub', href: 'https://github.com/signedbyfani' },
  ];

  return (
    <footer className="max-w-[900px] mx-auto mb-16 animate-in p-5 sm:p-4 fade-in-0 duration-300">
      <div className="bg-secondary rounded-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-sm text-secondary">
              Pages
            </h3>
            <ul className="mt-4 space-y-2">
              {siteMap.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-secondary">
              Social Links
            </h3>
            <ul className="mt-4 space-y-2">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm"
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
        <div className="mt-8 border-t border-secondary pt-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col space-y-2 text-sm text-secondary">
              <p>Your Time: {visitorTime}</p>
              <p>My Time (UTC+5:30): {istTime}</p>
            </div>
            <p className="mt-4 md:mt-0 text-sm text-primary">
              &copy; {new Date().getFullYear()} Fanindra Maharana. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 