export default function Page() {
  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-20 text-citrus-blue">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight tracking-tight text-citrus-blue">
          That Morning Trick You Just Saw? Here&apos;s What It Actually Is.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-xl mx-auto">
          And why women over 35 are calling it <i>the first thing that&apos;s actually worked.</i>
        </p>
      </section>

      {/* Curiosity Close Section */}
      <section className="mb-12">
        <div className="bg-blue-50/50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
          <p className="text-lg md:text-xl leading-relaxed text-gray-800">
            The morning trick is just one capsule with morning coffee. The citrus compound from the video is already measured and concentrated into a daily supplement called <strong>CitrusBurn™</strong>. No routine. No prep. Just take it when you wake up.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12 space-y-6">
        <div className="bg-white rounded-xl p-6 border-l-4 border-citrus-orange shadow-md flex flex-col gap-3 relative">
          <div className="flex gap-1 text-citrus-orange mb-1">
            {/* 5 Stars */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <p className="font-medium text-gray-800 text-lg sm:text-xl italic">
            &quot;I take it with my coffee every morning. Within two weeks the afternoon energy crashes just... stopped.&quot;
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-citrus-blue">- Elizabeth V, 62</span>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              Verified Buyer
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border-l-4 border-citrus-orange shadow-md flex flex-col gap-3 relative">
          <div className="flex gap-1 text-citrus-orange mb-1">
            {/* 5 Stars */}
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <p className="font-medium text-gray-800 text-lg sm:text-xl italic">
            &quot;I wasn&apos;t expecting much. But my jeans were looser within a week.&quot;
          </p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-bold text-citrus-blue">- Tasha M, 41</span>
            <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
              </svg>
              Verified Buyer
            </span>
          </div>
        </div>
      </section>

      {/* Curiosity Open Section */}
      <section className="mb-12">
        <div className="prose prose-lg text-gray-800 max-w-none">
          <p className="text-xl mb-4 font-semibold text-citrus-blue">
            But here&apos;s what most women don&apos;t realise...
          </p>
          <p className="text-lg leading-relaxed mb-4">
            There&apos;s a specific biological reason women over 35 stop responding to diet and exercise. It has nothing to do with willpower.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Scientists from Harvard and the University of Barcelona identified exactly what causes it. CitrusBurn™ was built around this research.
          </p>
          <p className="text-lg leading-relaxed font-bold bg-yellow-100 p-2 inline-block rounded">
            The full explanation is worth reading.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-16 flex flex-col items-center">
        <a
          href="https://787924pa-0t1usg5uk2py81l-u.hop.clickbank.net"
          className="inline-flex items-center justify-center gap-2 bg-citrus-orange hover:bg-[#e04f33] text-white text-xl md:text-2xl font-bold py-5 px-8 md:px-12 rounded-full shadow-[0_8px_20px_rgba(250,94,65,0.4)] hover:shadow-[0_12px_25px_rgba(250,94,65,0.5)] transition-all transform hover:-translate-y-1 w-full sm:w-auto"
        >
          See How CitrusBurn™ Works
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </a>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-green-600">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
          </svg>
          180-day money back guarantee - full refund, no questions asked.
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 pt-8 text-center">
        <p className="text-xs text-gray-500 max-w-lg mx-auto">
          This site is not affiliated with CitrusBurn™. Results may vary. This page contains affiliate links.
        </p>
      </footer>
    </main>
  );
}
