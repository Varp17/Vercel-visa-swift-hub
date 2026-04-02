import { Briefcase, MapPin, Building, Users } from "lucide-react";

const CareerOutcomes = () => {
  const sectors = [
    {
      icon: Briefcase,
      title: "Healthcare",
      description: "Work in UK NHS, Australian hospitals, Canadian healthcare systems.",
      jobs: ["Registered Nurse", "Healthcare Assistant", "Medical Practitioner"],
    },
    {
      icon: Users,
      title: "Caregiving",
      description: "High demand in the UK, Ireland, and European countries.",
      jobs: ["Care Worker", "Senior Carer", "Support Worker"],
    },
    {
      icon: Building,
      title: "Medical Services",
      description: "Lab services, pharmacy, and allied health sectors globally.",
      jobs: ["Lab Technician", "Pharmacist", "Medical Admin"],
    },
    {
      icon: MapPin,
      title: "International",
      description: "UK, Canada, Australia, NZ, Ireland, UAE, and Singapore.",
      jobs: ["UK NHS", "Canadian PR", "Australia Migration"],
    },
  ];

  const countries = [
    { name: "United Kingdom", flag: "🇬🇧", opportunities: "NHS, Private Healthcare, Care Homes" },
    { name: "Canada", flag: "🇨🇦", opportunities: "Provincial Healthcare, Medical Facilities" },
    { name: "Australia", flag: "🇦🇺", opportunities: "State Hospitals, Aged Care, Clinics" },
    { name: "New Zealand", flag: "🇳🇿", opportunities: "DHB Positions, Rest Homes" },
    { name: "Ireland", flag: "🇮🇪", opportunities: "HSE, Private Hospitals" },
    { name: "UAE", flag: "🇦🇪", opportunities: "Premium Hospitals, Clinics" },
  ];

  return (
    <section id="careers" className="bg-background py-6 md:py-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Career Outcomes
          </span>
          <h2 className="mb-3 font-heading text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
            Unlock Global Job Opportunities
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Our certifications open doors to international career opportunities.
          </p>
        </div>

        {/* Sectors Grid — 2 cols on mobile, 4 on desktop */}
        <div className="mb-8 md:mb-12 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                <sector.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-bold text-foreground md:text-base">{sector.title}</h3>
              <p className="mb-3 text-xs text-muted-foreground hidden md:block">{sector.description}</p>
              <div className="space-y-0.5">
                {sector.jobs.map((job) => (
                  <div key={job} className="text-xs font-medium text-primary">
                    • {job}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Countries */}
        <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/10 to-secondary/50 p-6 md:p-10">
          <h3 className="mb-6 text-center font-heading text-xl font-bold text-foreground md:text-2xl">
            Countries Where You Can Work
          </h3>
          <div className="grid gap-3 grid-cols-2 md:grid-cols-3">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex items-center gap-3 rounded-xl bg-card p-3 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <span className="text-2xl md:text-3xl">{country.flag}</span>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate">{country.name}</h4>
                  <p className="text-xs text-muted-foreground truncate hidden sm:block">{country.opportunities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOutcomes;
