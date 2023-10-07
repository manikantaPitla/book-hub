import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import BookDetail from './components/BookDetail'
import NotFound from './components/NotFound'
import BookShelves from './components/BookShelves'

const App = () => (
  <div className="main">
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/books/:id" component={BookDetail} />
      <ProtectedRoute exact path="/book-shelves" component={BookShelves} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
