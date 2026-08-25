import type { LegalDoc } from "@/lib/legalContent";

const LegalDocument = ({ doc }: { doc: LegalDoc }) => {
  return (
    <article className="bg-background">
      <div className="container-custom py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            {doc.intro.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {doc.sections.map((section, i) => (
            <section key={i} className="space-y-3">
              {section.heading && (
                <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                  {section.heading}
                </h2>
              )}
              {section.paras.map((para, j) => (
                <p key={j} className="text-muted-foreground leading-relaxed">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default LegalDocument;
