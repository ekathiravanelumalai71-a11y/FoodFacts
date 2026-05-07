import React from 'react'

class ClassFoodCard extends React.Component {
  handleClick = () => {
    const { product, onClick } = this.props

    if (onClick) onClick(product)
  }

  render() {
    const { product } = this.props

    if (!product) return null

    const { product_name, brands, nutriments, image_small_url } = product

    return (
      <div className="food-card" onClick={this.handleClick}>
        <img
          src={image_small_url ? image_small_url : 'https://via.placeholder.com/150'}
          alt={product_name}
        />

        <h2>{product_name || 'Unknown Product'}</h2>

        <p>
          <strong>Brand:</strong> {brands || 'Unknown'}
        </p>

        <p>Calories: {nutriments?.['energy-kcal_100g'] ?? 'N/A'} kcal</p>
      </div>
    )
  }
}

export default ClassFoodCard
