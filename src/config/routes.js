//LayOut
import LayoutAdmin from '../layouts/LayoutAdmin'; 
import LayoutBasic from '../layouts/LayoutBasic'; 

//AdminPages 
import AdminHome from '../pages/Admin';
import AdminSignIn from '../pages/Admin/SignIn';

//Otras Paginas
import Contact from '../pages/Contact';
import Home from '../pages/Home';

//Error Pages
import Error404 from '../pages/Error404'; 


//Array que contiene todas nuestras rutas 
const routes =  [    
    {
        //Paginas Administrador.   
        path: "/admin", // cuando la URL sea /admin
        exact: false, 
        component: LayoutAdmin, // va cargar el componente 
        routes: [
            {
                path: "/admin",
                exact:true,
                component:AdminHome
            },
            {
                path: "/admin/login",
                exact:true,
                component:AdminSignIn
            },
            {
                component: Error404
            }
        ]
    },
    {
        //Paginas basicas
        path: "/",
        exact:false,
        component:LayoutBasic,
        routes: [
            {
                path: "/",
                exact:true,
                component: Home
            },
            {
                path: "/contact",
                exact:true,
                component: Contact 
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;
