const Stats = () => {
  const stats = [
    {
      number: "4+",
      label: "Years Active",
      description: "Since 2020"
    },
    {
      number: "50+",
      label: "Completed Projects",
      description: "Diverse Portfolio"
    },
    {
      number: "100+",
      label: "Satisfied Clients",
      description: "Public & Private"
    },
    {
      number: "24/7",
      label: "Support Available",
      description: "Always Ready"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-construction-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-construction transition-all duration-300 group-hover:-translate-y-2">
                <div className="text-4xl lg:text-5xl font-bold text-construction-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-construction-dark mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-construction-gray">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;