import SearchBar from "./components/SearchBar"
import ProfileCard from "./components/ProfileCard"
import RepoList from "./components/RepoList"
import Loader from "./components/Loader"
import useGithub from "./hooks/useGithub"

// Main App component - entry point of DevFinder
function App() {
  const { user, repos, loading, error, fetchUser } = useGithub()

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">

      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-white tracking-tight drop-shadow-lg">
          Dev<span className="text-purple-400">Finder</span> 🚀
        </h1>
        <p className="text-gray-400 mt-3 text-sm tracking-wide">
          Search any GitHub user instantly
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={fetchUser} />

      {/* How to use - shown only when no user is searched yet */}
      {!user && !loading && !error && (
        <div className="mt-8 w-full max-w-xl">
          <p className="text-center text-gray-400 text-xs uppercase tracking-widest mb-4">
            How it works
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
              <p className="text-2xl mb-2">🔍</p>
              <p className="text-white text-xs font-semibold">Search</p>
              <p className="text-gray-400 text-xs mt-1">Enter any GitHub username</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
              <p className="text-2xl mb-2">👤</p>
              <p className="text-white text-xs font-semibold">Explore</p>
              <p className="text-gray-400 text-xs mt-1">View profile, bio and stats</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
              <p className="text-2xl mb-2">📁</p>
              <p className="text-white text-xs font-semibold">Discover</p>
              <p className="text-gray-400 text-xs mt-1">Browse top repositories</p>
            </div>
          </div>

          {/* Example usernames to try */}
          <div className="mt-5 text-center">
            <p className="text-gray-500 text-xs mb-3">Try searching for:</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {["torvalds", "gaearon", "sindresorhus"].map((name) => (
                <button
                  key={name}
                  onClick={() => fetchUser(name)}
                  className="px-3 py-1 bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/30 text-purple-300 text-xs rounded-full transition"
                >
                  @{name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && <Loader />}

      {/* Error Message */}
      {error && (
        <div className="mt-6 bg-red-900/30 border border-red-500/50 text-red-400 px-6 py-3 rounded-2xl text-sm backdrop-blur-sm">
          ❌ {error}
        </div>
      )}

      {/* Profile and Repos - shown after successful search */}
      {user && (
        <div className="w-full max-w-xl">
          <ProfileCard user={user} />
          <RepoList repos={repos} />
        </div>
      )}

    </div>
  )
}

export default App