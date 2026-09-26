const faqs = [
  {
    question: "How Much Do Your Services Cost?",
    answer: "We charge based on the size of your premises and how long we believe it will take us to complete your job.",
  },
  {
    question: "Can I Book Online?",
    answer:
      "To get a quote complete our quick quote form and we will send you a written quote. If we need to have a look at the premises we will get in touch once you have completed the form.",
  },
  {
    question: "How Can I Pay?",
    answer: "We accept the following payment methods: Debit/Credit, Cash, Cheque, ETransfer.",
  },
];

export function FaqList() {
  return (
    <div className="border border-neutral-300">
      {faqs.map((item, index) => (
        <details key={item.question} open={index === 0} className="group border-b border-neutral-300 last:border-b-0">
          <summary className="flex cursor-pointer list-none items-center gap-3 px-4 py-3.5 text-base font-medium text-black marker:content-none [&::-webkit-details-marker]:hidden">
            <span className="w-4 text-center text-neutral-600 group-open:hidden" aria-hidden="true">
              +
            </span>
            <span className="hidden w-4 text-center text-neutral-600 group-open:inline" aria-hidden="true">
              −
            </span>
            {item.question}
          </summary>
          <div className="border-t border-neutral-200 px-5 py-5 pl-11">
            <p className="m-0">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
