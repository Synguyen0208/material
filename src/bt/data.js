import React from 'react';		

import AllProduct from'./diplay';
import Add from'./Add';
const routes=[  {
    path:'/',
    exact:true,
    main:()=> <AllProduct /> 
},
{
    path:'/add',
    exact:true,
    main:()=> <Add /> 
}
];
export default routes;	