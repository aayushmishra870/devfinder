// SearchBar component - handles GitHub username input and form submission
function SearchBar({ onSearch }) {

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault()
    const username = e.target.username.value.trim()
    if (username) onSearch(username)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-xl">
      {/* Username input field */}
      <input
        type="text"
        name="username"
        placeholder="🔍  Enter GitHub username..."
        className="flex-1 px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 outline-none focus:border-purple-400 focus:bg-white/15 transition text-sm backdrop-blur-sm"
      />
      {/* Submit button */}
      <button
        type="submit"
        className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-2xl transition text-sm shadow-lg shadow-purple-900/50"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar