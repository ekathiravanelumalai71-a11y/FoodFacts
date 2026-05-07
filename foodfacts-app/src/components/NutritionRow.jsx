function NutritionRow({ label, value, unit }) {
  return (
    <div className="nutrition-row">
      <strong>{label}:</strong> {value ?? 'N/A'} {unit ?? ''}
    </div>
  )
}

export default NutritionRow
