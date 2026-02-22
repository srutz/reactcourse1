
export function Main() {
  return (
    <div className="h-1 grow relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
            React Powerworkshop
          </h1>

          {/* Subtitle */}
          <h2 className="text-4xl md:text-5xl font-semibold text-white/90">
            Exercises
          </h2>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="h-2 w-2 rounded-full bg-purple-400"></div>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mt-8">
            Welcome to the interactive exercise collection
          </p>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
}
