import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'よくある質問',
};

const faqs = [
  {
    question: "海士の本氣米（あまのほんきまい）とは何ですか？",
    answer: "島根県隠岐郡海士町で育てられたブランド米です。隠岐牛の完熟堆肥といわがき春香の牡蠣殻粉末を土づくりに利用し、甘くてもっちりした食感が特徴です。"
  },
  {
    question: "どこで作られていますか？",
    answer: "島根県の離島、海士町（あまちょう）の豊かな自然と水に恵まれた田んぼで作られています。"
  },
  {
    question: "土づくりには何を使っていますか？",
    answer: "海士町の特産品である「隠岐牛」の完熟堆肥と、ブランド岩牡蠣「いわがき春香」の牡蠣殻粉末を使用しています。島の資源を循環させる独自の農業です。"
  },
  {
    question: "どこで購入できますか？",
    answer: "公式オンラインショップ（BASE）にて、単品、食べ比べセット、ギフト、定期便などを販売しております。"
  }
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-4xl font-serif font-bold mb-12 text-text-main">よくある質問</h1>
      
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-6 md:p-8 border border-text-main/10">
            <h2 className="text-xl font-bold mb-4 flex gap-4 text-text-main">
              <span className="text-gold">Q.</span>
              {faq.question}
            </h2>
            <div className="flex gap-4 opacity-90 leading-loose">
              <span className="text-sea-green font-bold">A.</span>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <p className="mb-6 opacity-80">その他のお問い合わせ、販売に関するご質問は公式ショップをご覧ください。</p>
        <a href="https://honkimai.thebase.in/" target="_blank" rel="noopener noreferrer" className="inline-block bg-deep-green text-white px-8 py-4 hover:bg-text-main transition-colors text-sm tracking-widest font-bold">
          公式ショップ（BASE）へ ↗
        </a>
      </div>
    </div>
  );
}
