import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const RouterWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        /*这里的routes有什么用？{...props}有什么用？他两难道不相等吗？*/
        <route.component {...props} routes={route.routes} />
    )} />)

const Sandwiches = () => <h2>sandwiches</h2>
const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/tacos/bus">Bus</Link></li>
            <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>
        {routes.map((route, i) => (
            /*这里的{...route}又是什么用？*/
            <RouterWithSubRoutes key={i} {...route} />
        ))}
    </div>
)
const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>
const routes = [
    {
        path: '/sandwiches',
        component: Sandwiches
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                path: '/tacos/bus',
                component: Bus
            },
            {
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
]
class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/tacos">Tacos</Link>
                        </li>
                        <li>
                            <Link to="/sandwiches">Sandwiches</Link>
                        </li>
                    </ul>
                    {routes.map((route, i) => (
                        <RouterWithSubRoutes key={i} {...route} />
                    ))}
                </div>
            </Router>
        );
    }
}


export default App;