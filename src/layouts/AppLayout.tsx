import { Outlet, NavLink } from 'react-router-dom'
import './AppLayout.css'

const AppLayout = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <nav>
          <h2 style={{ color: '#fff', marginBottom: '2rem' }}>ProsjektHub</h2>
          <ul style={navListStyle}>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#646cff' : '#fff',
                })}
              >
                Tournament
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#646cff' : '#fff',
                })}
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/training"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#646cff' : '#fff',
                })}
              >
                Training
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  ...navLinkStyle,
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#646cff' : '#fff',
                })}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={mainContentStyle}>
        <Outlet />
      </main>
    </div>
  )
}

const sidebarStyle: React.CSSProperties = {
  width: '200px',
  backgroundColor: '#1a1a1a',
  padding: '20px',
  overflow: 'auto',
  borderRight: '1px solid #444',
}

const navListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
}

const navLinkStyle: React.CSSProperties = {
  display: 'block',
  padding: '10px 0',
  textDecoration: 'none',
  color: '#fff',
  transition: 'color 0.3s ease',
}

const mainContentStyle: React.CSSProperties = {
  flex: 1,
  padding: '40px',
  overflow: 'auto',
  backgroundColor: '#242424',
}

export default AppLayout
