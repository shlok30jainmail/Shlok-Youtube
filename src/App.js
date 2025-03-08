// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head'
import store from './utils/store'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Watchpage from './components/WatchPage';
// import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';
import Demo from './components/Demo';

function App() {
  return (

    <Provider store={store}>
    <div className="">
      <Head/>
       <Outlet/>
    </div>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children :[
      {
        path:"/",
        element:<Body/>,
        children:[
          {
             path:"/",
             element:<MainComponent/>
          },
          {
            path:"/watch",
            element:<Watchpage/>
          },
          {
            path:"/demo",
            element:<Demo/>
          },
        ],
      },
      
    ],
  },

  
])

export default App;
