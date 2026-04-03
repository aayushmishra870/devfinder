function RepoCard({ repo }) {
  return (
    <div className="bg-[#161b22] border border-gray-700/50 hover:border-blue-500/50 rounded-xl p-4 transition">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-blue-400 truncate text-sm">
          {repo.name}
        </p>
        <div className="flex gap-3 text-xs text-gray-500 shrink-0 ml-2">
          <span>⭐ {repo.stargazers_count}</span>
          <span>🍴 {repo.forks_count}</span>
        </div>
      </div>
      {repo.description && (
        <p className="text-xs text-gray-500 mt-1 truncate">
          {repo.description}
        </p>
      )}
      {repo.language && (
        <span className="inline-block mt-2 text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-1 rounded-full">
          {repo.language}
        </span>
      )}
    </div>
  )
}

function RepoList({ repos }) {
  if (repos.length === 0) return null

  return (
    <div className="w-full mt-5 mb-10">
      <h3 className="text-gray-300 font-semibold text-sm mb-3 uppercase tracking-widest">
        📁 Top Repositories
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  )
}

export default RepoList