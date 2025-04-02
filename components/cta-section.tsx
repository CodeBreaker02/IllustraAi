import SectionWrapper from "./section-wrapper";

export default function CtaSection() {
  return (
    <SectionWrapper className="relative overflow-hidden bg-primary/10">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('/noise.svg')] bg-repeat bg-[length:200px_200px]"></div>

      <div className="relative z-10">
        <div className="text-center mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Photos?
          </h2>
          <p className="text-xl mb-10 text-foreground/80">
            Join thousands of users who are already creating magical
            illustrations with IllustraAI
          </p>

          <a
            href="#pricing"
            className="inline-block rounded-full bg-primary px-8 py-4 text-center font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all"
          >
            Start Creating Today
          </a>

          <p className="mt-6 text-sm text-foreground/60">
            No credit card required to try our free plan
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
