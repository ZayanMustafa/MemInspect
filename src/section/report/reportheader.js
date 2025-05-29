'use client'
import Head from 'next/head';

export const ReportHeader = () => {
  return (
    <>
      <Head>
        <title>Sample Reports | MEM INSPECT</title>
      </Head>

      <section className="bg-dark-600 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">SAMPLE INSPECTION REPORT</h1>
          <div className="w-24 h-0.5 bg-white mb-8"></div>
          <p className="text-2xl text-gray-300 max-w-3xl">
            See what our comprehensive vehicle inspection reports include
          </p>
        </div>
      </section>
    </>
  );
};