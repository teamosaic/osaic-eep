export function EnhancementLink({ children, key }) {
  return (
    <div className="p-6 bg-white rounded-default mb-3" key={key}>
      { children }
    </div>
  )
}
