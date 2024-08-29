export default function Caret({theme = 'default'}) {

  const themeColors = {
    default: '#DED9C4',
    red: '#ffffff',
    green: '#A0BFC2',
  };

  const color = themeColors[theme] || themeColors['default'];

  return (
    <svg className="group-hover:translate-x-1 transition" width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.51458 1.01472L9.99986 9.5L1.51458 17.9853" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
