import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')
  const [validationError, setValidationError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!query.trim()) {
      setValidationError('Please enter food name')
      return
    }

    if (query.trim().length < 2) {
      setValidationError('Minimum 2 characters required')
      return
    }

    setValidationError('')
    onSearch(query)
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {validationError && (
        <p className="validation-error">{validationError}</p>
      )}
    </div>
  )
}

export default SearchBar