import Form from "./Form";
import Add from "./component/addProduct";
const routes=[
    {
        path:"/watch",
        exact: true,
        main:()=><Form></Form>
    },
    {
        path:"/add",
        exact: true,
        main:()=><Add></Add>
    }
    ];
    export default routes;