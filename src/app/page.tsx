export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to BrainPatch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Intelligent, LLM-powered learning platform that creates personalised courses based on
            individual knowledge gaps and learning needs.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dynamic Knowledge Assessment
            </h2>
            <p className="text-gray-600">
              Multi-layered evaluation system that quickly identifies knowledge gaps through
              intelligent questioning and adaptive assessment techniques.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Personalised Course Generation
            </h2>
            <p className="text-gray-600">
              LLM-driven curriculum creation tailored to individual needs, focusing on areas where
              learners need the most improvement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Adaptive Learning Modules</h2>
            <p className="text-gray-600">
              Content that adjusts based on real-time performance and understanding, with
              progressive revelation of concepts building on confirmed knowledge.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Privacy-First AI</h2>
            <p className="text-gray-600">
              In-browser LLM execution ensures your learning data never leaves your device,
              providing intelligent features while maintaining complete privacy.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Initial Focus: ReactJS Mastery
            </h3>
            <p className="text-gray-600 mb-6">
              Our MVP focuses on ReactJS developers and learners, providing a comprehensive
              assessment and learning system for modern React development.
            </p>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Start Your Assessment
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
