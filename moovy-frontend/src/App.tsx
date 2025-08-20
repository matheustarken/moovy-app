import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './pages/Search';
import Library from './pages/Library';
import { Container, AppBar, Toolbar, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Search
          </Button>
          <Button color="inherit" component={Link} to="/library">
            My Library
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
