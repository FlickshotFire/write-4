function StatsSection() {
  const stats = [
    { number: "0", label: "Articles Published" },
    { number: "0", label: "Video Tutorials" },
    { number: "0", label: "Monthly Readers" },
    { number: "0", label: "Tech Topics" },
  ];

  return (
    <section className="py-16 border-t border-border" data-testid="stats-section">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl" data-testid={`stat-card-${index}`}>
              <div className="text-3xl font-bold gradient-text">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatsSection };
export default StatsSection;
