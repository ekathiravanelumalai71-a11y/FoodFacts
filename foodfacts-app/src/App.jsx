import { useState } from 'react'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (query) => {
    setLoading(true)
    setSearched(true)

    try {
      const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&json=1&page_size=10`

      const response = await fetch(url)
      const data = await response.json()

      const filteredProducts = data.products.filter(
        (p) => p.product_name && p.product_name.trim() !== '',
      )

      setResults(filteredProducts)
    } catch (error) {
      console.error('Something went wrong:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1>🥗 FoodFacts</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {!loading && !searched && (
        <p>Search for a food above to see its nutrition info.</p>
      )}

      {!loading && searched && results.length === 0 && (
        <p>No results found. Try another search.</p>
      )}

      {!loading && results.length > 0 && <FoodList products={results} />}
    </div>
  )
}

export default App
