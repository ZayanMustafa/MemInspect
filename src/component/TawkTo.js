'use client'; // Required for Script component
import Script from 'next/script';

export default function TawkTo() {
  return (
    <Script strategy="lazyOnload" id="tawk-to">
      {`
        var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/68062aa06d34aa190b0564a3/1ipc1d1rr';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
      `}
    </Script>
  );
}