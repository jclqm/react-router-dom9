import React, { Component } from 'react'
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom'

const About = () => <h2>About</h2>
const Company = () => <h2>Company</h2>
// const User = ({ match }) => (
//     <div>
//         <h2>User: { match.params.user }</h2>
//     </div>
// )
const User = (param) => {
    const { match } = param
    return (
        <div>
            <h2>User: { match.params.user }</h2>
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{ display: 'flex' }}>
                    <div style={{ width: '200px' }}>
                        <ul>
                            <li><Link to="/about">About Us (static)</Link></li>
                            <li><Link to="/company">company (static)</Link></li>
                            <li><Link to="/kim">Kim (dynamic)</Link></li>
                            <li><Link to="/chris">Chris (dynamic)</Link></li>
                        </ul>
                    </div>
                    <div style={{ flex: 1 }}>
                        <Switch>
                            <Route path="/about" component={ About } />
                            <Route path="/company" component={ Company } />
                            <Route path="/:user" component={ User } />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;