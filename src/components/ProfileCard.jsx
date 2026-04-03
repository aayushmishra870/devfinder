// ProfileCard component - displays GitHub user profile information
function ProfileCard({ user }) {

  // Format the join date to readable format
  const joinDate = new Date(user.created_at).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="mt-8 w-full rounded-3xl p-6 border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">

      {/* Top Section - Avatar and basic info */}
      <div className="flex gap-5 items-start">
        <img
          src={user.avatar_url}
          alt="avatar"
          className="w-24 h-24 rounded-2xl border-2 border-purple-500/50 shadow-lg"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-white">{user.name || user.login}</h2>
          <a href={user.html_url} target="_blank" className="text-purple-400 text-sm hover:underline">
            @{user.login}
          </a>
          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {user.bio || "No bio yet."}
          </p>
        </div>
      </div>

      {/* Stats Section - Repos, Followers, Following */}
      <div className="flex justify-around mt-6 bg-white/5 rounded-2xl py-4 border border-white/10">
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{user.public_repos}</p>
          <p className="text-xs text-gray-400 mt-1">Repos</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{user.followers}</p>
          <p className="text-xs text-gray-400 mt-1">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{user.following}</p>
          <p className="text-xs text-gray-400 mt-1">Following</p>
        </div>
      </div>

      {/* Extra Info - Location, Twitter, Website, Join Date */}
      <div className="mt-5 space-y-2 text-sm text-gray-300">
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <span>📍</span>
          <span>{user.location || "Not available"}</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <span>🐦</span>
          <span>{user.twitter_username ? "@" + user.twitter_username : "Not available"}</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <span>🌐</span>
          <span className="text-purple-400 truncate">{user.blog || "Not available"}</span>
        </div>
        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
          <span>📅</span>
          <span>Joined {joinDate}</span>
        </div>
      </div>

    </div>
  )
}

export default ProfileCard