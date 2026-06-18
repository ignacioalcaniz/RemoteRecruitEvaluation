import { useState } from "react";

export default function FAQ() {
  const data = [
    {
      q: "Do I have to sign a long-term contract?",
      a: "Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Salvage jean shorts 90’s, Vice American Apparel try-hard food truck Shoreditch flap lomo Wes Anderson. Art party"
    },
    {
      q: "Can I pay for a whole year?",
      a: "Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui."
    },
    {
      q: "What if I need help?",
      a: "Actually beard single-origin coffee, twee 90’s PBR Echo Park sartorial try-hard freegan Portland ennui. Salvage jean shorts 90’s."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-20 md:py-28 px-6 md:px-20">

      <div className="max-w-5xl mx-auto animate-fade-up">

        {/* TITLE */}
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-8 md:mb-10 text-center md:text-left">
          Common Questions
        </h2>

        {/* QUESTIONS */}
        <div className="space-y-4">

          {data.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`
                  border rounded-xl p-4 md:p-5 cursor-pointer
                  transition-all duration-300
                  hover:shadow-md hover:scale-[1.01]
                  ${isOpen ? "shadow-md" : ""}
                `}
              >

                {/* QUESTION */}
                <div className="flex justify-between items-center gap-4">

                  <h3 className="font-semibold text-sm md:text-base text-slate-900">
                    {item.q}
                  </h3>

                  <span
                    className={`
                      text-slate-400 text-xl flex-shrink-0
                      transition-transform duration-300
                      ${isOpen ? "rotate-180" : ""}
                    `}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                </div>

                {/* ANSWER (smooth reveal) */}
                <div
                  className={`
                    grid transition-all duration-300 ease-in-out
                    ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}
                  `}
                >
                  <p className="overflow-hidden text-slate-500 text-xs md:text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center md:justify-start mt-8 md:mt-10">

          <button className="
            px-5 md:px-6 py-3
            border border-sky-400 text-sky-700
            rounded-xl font-medium
            hover:bg-sky-50 hover:scale-105 transition
            text-sm md:text-base
          ">
            More Questions
          </button>

        </div>

      </div>

    </section>
  );
}