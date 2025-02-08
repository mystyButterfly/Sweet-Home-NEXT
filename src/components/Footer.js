export default function Footer() {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    padding: '5px 0',
    color: 'white',
    backgroundImage: `url('/assets/wood.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <footer style={footerStyle}>
      <p>© Sweet Home 2024</p>
    </footer>
  );
}
