const Stats = () => {
  return (
    <section className="bg-slate-900 text-white py-16 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-500">1992</h3>
          <p className="text-slate-400 font-medium">Year Incorporated</p>
        </div>

        
        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-500">30+</h3>
          <p className="text-slate-400 font-medium">Years Experience</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-500">150+</h3>
          <p className="text-slate-400 font-medium">Projects Delivered</p>
        </div>

        <div className="space-y-2">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-500">100%</h3>
          <p className="text-slate-400 font-medium">Client Satisfaction</p>
        </div>

      </div>
    </section>
  )
}
export default Stats;