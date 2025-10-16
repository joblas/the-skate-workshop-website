export default function StatsSection() {
  const stats = [
    { value: '30+', label: 'Years Coaching' },
    { value: '400+', label: 'Tricks Database' },
    { value: '40%', label: 'Time Recovery' },
    { value: '$200+', label: 'Session Value' },
  ]

  return (
    <section className="py-16 bg-black border-y border-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
