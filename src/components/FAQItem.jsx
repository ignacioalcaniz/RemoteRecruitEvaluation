import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-5">

      {/* QUESTION */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="font-medium text-slate-800">
          {question}
        </span>

        <span className="text-xl text-primary">
          {open ? "−" : "+"}
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-slate-500 text-sm leading-6">
          {answer}
        </p>
      </div>

    </div>
  );
}