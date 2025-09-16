export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 space-y-6">
      <h1 className="text-4xl font-bold">whodumped.com</h1>

      <p className="text-white/70">
        Live dashboards showing wallets dumping HNT
      </p>

      <div className="aspect-video border border-white/20 rounded-xl overflow-hidden">
        <iframe
          src="https://semanticgrid.ai/q/9549e7fb-955a-4138-ac55-d6e0aba2a4d6"
          title="HNT Dumpers Dashboard"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </main>
  );
}

