export default function Footer() {
  return (
    <footer className='footer bg-dark text-white py-3'>
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Copyright</span>
      </div>
    </footer>
  )
}
