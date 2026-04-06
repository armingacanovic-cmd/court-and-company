"use client";

import { useState } from "react";

type Review = {
  name: string;
  firma: string;
  ort: string;
  text: string;
  stars: number;
  initial: string;
  kritik?: string;
  antwort?: string;
};

export default function ReviewCard({ review }: { review: Review }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-cream rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-forest text-cream font-bold text-sm flex items-center justify-center flex-shrink-0">
          {review.initial}
        </div>
        <div>
          <p className="font-bold text-anthracite text-sm">{review.name}</p>
          <p className="text-anthracite/50 text-xs">{review.firma}</p>
        </div>
      </div>

      {/* Sterne */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(review.stars)].map((_, i) => (
          <span key={i} className="text-lime text-sm">★</span>
        ))}
        {[...Array(5 - review.stars)].map((_, i) => (
          <span key={i} className="text-anthracite/20 text-sm">★</span>
        ))}
      </div>

      {/* Text */}
      <p className="text-anthracite/70 text-sm leading-relaxed">&ldquo;{review.text}&rdquo;</p>
      {review.kritik && (
        <p className="text-anthracite/50 text-xs mt-2 italic">{review.kritik}</p>
      )}
      <p className="text-anthracite/30 text-xs mt-3">{review.ort}</p>

      {/* Antwort aufklappbar */}
      {review.antwort && (
        <div className="mt-4">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 text-xs font-semibold text-forest hover:text-lime transition-colors"
          >
            <span className={`transition-transform duration-300 ${open ? "rotate-90" : ""}`}>▶</span>
            {open ? "Antwort verbergen" : "Antwort von Court & Company"}
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-40 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          >
            <div className="bg-forest/8 border-l-2 border-forest rounded-r-xl p-3">
              <p className="text-xs font-bold text-forest mb-1">Court & Company</p>
              <p className="text-xs text-anthracite/65 leading-relaxed">{review.antwort}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
