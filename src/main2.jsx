import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Parent from "./Day-28/Hooks Example/useCallbackParent";
// import A from "./Day-28/Hooks Example/useContext/Acomp";
// import CountContext from "./Day-28/Hooks Example/useContext/UseContext";
// import B from "./Day-28/Hooks Example/useContext/Bcomp";
// import UseEffectComponent from "./Day-28/compare effect/useLayoutEffect";
// import UseLayoutEffectComponent from "./Day-28/compare effect/useEffect";
// import EffectExample from "./Day-28/compare effect/useLayoutEffect";
// import FormTask from "./Day-28/Form validation task/form";
// import ParentMemo from "./reactMemoParent";
import CreateContext from "./contextApiexample/context";
// import AComponent from "./contextApiexample/AFile";
// import BContext from "./contextApiexample/BFile";
// import Parent from "./useCallback/parent";
import ParentMemo from "./reactMemoParent";
import CallMemo from "./useMemo/useMemo2";
import Parent from "./Day-28/useMemo/parentUseMemo";
import Example from "./reactLifecycle";
import ActiveSession from "./MultipleDeviceLoginProject/src/components/activeSessions";
import ApiCalling from "./apicalling";
import InstagramPost from "./Instagram create/component/InstagramPostList";
// import ApiCall from "./Day-28/Api call by axios/apiCall";
// import Login from "./MultipleDeviceLoginProject/Authentication/SignIn/SignIn";
// import Product from "./Fetch Pr'oduct/Pages/Products/Products.layout";
// import Cart from "./Fetch Product/Pages/Cart/Cart.Layout";
// import Signin from "./Fetch Product/Pages/Authentication/SignIn/SignIn";
// import Signup from "./Fetch Product/Pages/Authentication/SignUp/SignUp";
// import ProtectedRoutes from "./Fetch Product/ProtectedRoutes/ProtectedRoutes";
// import HighComp from "./Fetch Product/HOC/Hoc";
// import Parent from "./Day-28/state and props parent";
// import Controlled from "./Day-28/controlled and uncontrolled/controlled components";
// import Uncontrolled from "./Day-28/controlled and uncontrolled/un-controlled components";
// import Conditional from "./Day-28/Conditional rendering/conditionalRendering";
// import ApiCalling from "./Day-28/Api call by axios/apiCall";
// import ParentCount from "./Day-28/Use memo and callback/parentMemo";
// import ReactMemoParent from "./Day-28/React.memo/react.memoParent";
// import ParentMemo from "./Day-28/useMemo/parentUseMemo";
// import SearchTask from "./Day-28/search bar using js with add to cart/To-do Form";
// import ToDOForm from "./Day-28/search bar using js with add to cart/To-do Form";
// import TestComp from "./Day-28/Default Props/defaultProps2";
// import Counter from "./Day-28/Hooks Example/useState";
// import CallApi from "./Day-28/Hooks Example/useEffect";
// import Parent from "./Day-28/Hooks Example/useCallbackParent";
// import InfiniteCounter from "./Day-25/setinterval";
// import ChangeColor from "./Day-25/changeColor";
// import Home from "./../../../../react2/src/Pages/home";
// import Contact from "./Day-20/contact";
// import About from "./About";
// import AmazonProductDetails from "./Day-20/amazon-product";
// import NotFound from "./Day-20/404-layout";
// import WithoutUseMemo from "./Day-22/without-memo";
// import WithUseMemo from "./Day-22/with-memo";
// import UseRefWithQueryParameter from "./Day-23/3.using_queryParameter_in_useRef";
import "./index.css";
const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  // {
  //   path: "/Acontext",
  //   element: <ACont />,
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/color/:colorKey",
  //   element: <AmazonProductDetails />,
  // },
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
  // {
  //   path: "/prop-drill",
  //   element: (
  //     <>
  //       <A />
  //       <hr />
  //       <AWithContext />
  //     </>
  //   ),
  // },
  // {
  //   path: "/withoutmemo",
  //   element: <WithoutUseMemo />,
  // },
  // {
  //   path: "/withmemo",
  //   element: <WithUseMemo />,
  // },
  // {
  //   path: "/useRefQuery",
  //   element: <UseRefWithQueryParameter />,
  // },
  // {
  //   path: "/infinite",
  //   element: <InfiniteCounter />,
  // },
  // {
  //   path: "/color",
  //   element: <ChangeColor />,
  // },
  // {
  //   path: "/product",
  //   element: (
  //     <ProtectedRoutes>
  //       <Product />
  //     </ProtectedRoutes>
  //   ),
  // },
  // {
  //   path: "/cart",
  //   element: (
  //     <ProtectedRoutes>
  //       <Cart />
  //     </ProtectedRoutes>
  //   ),
  // },
  // {
  //   path: "/signin",
  //   element: (
  //     <HighComp>
  //       <Signin />
  //     </HighComp>
  //   ),
  // },
  // {
  //   path: "/",
  //   element: (
  //     <HighComp>
  //       <Signup />
  //     </HighComp>
  //   ),
  // },
  // {
  //   path: "/",
  //   element: <ParentMemo />,
  // },
  // {
  //   path: "/",
  //   element: <FormTask />,
  // },
  // {
  //   path: "/",
  //   element: <EffectExample />,
  // },
  // {
  //   path: "/",
  //   element: <TestComp />,
  // },
  // {
  //   path: "/",
  //   element: <A />,
  // },
  // {
  //   path: "/",
  //   element: <UseLayoutEffectComponent />,
  // },
  // {
  //   path: "/",
  //   element: <UseEffectComponent />,
  // },
  // {
  //   path: "/b",
  //   element: <B />,
  // },
  // {
  //   path: "/",
  //   element: <Parent />,
  // },
  // {
  //   path: "/",
  //   element: <CallApi />,
  // },
  // {
  //   path: "/",
  //   element: <Counter />,
  // },
  // {
  //   path: "/",
  //   element: <ToDOForm />,
  // },
  // {
  //   path: "/",
  //   element: <ReactMemoParent />,
  // },
  // {
  //   path: "/",
  //   element: <ApiCalling />,
  // },
  // {
  //   path: "/",
  //   element: <Conditional />,
  // },
  // {
  //   path: "/",
  //   element: <Uncontrolled />,
  // },
  // {
  //   path: "/",
  //   element: <Controlled />,
  // },
  // {
  //   path: "/",
  //   element: <Parent />,
  // },
  {
    path: "/instagrampost",
    element: <InstagramPost />,
  },
  // {
  //   path: "/apicall",
  //   element: <ApiCalling />,
  // },
  // {
  //   path: "/activesession",
  //   element: <ActiveSession />,
  // },
  // {
  //   path: "/Example",
  //   element: <ApiCall />,
  // },
  // {
  //   path: "/CallMemo",
  //   element: <Parent />,
  // },
  // {
  //   path: "/parent",
  //   element: <ParentMemo />,
  // },
  // {
  //   path: "/parent",
  //   element: <Parent />,
  // },
  // {
  //   path: "/context",
  //   element: <AComponent />,
  // },
]);

createRoot(document.getElementById("root")).render(
  <>
    {/* <CountContext> */}
    <CreateContext>
      <ToastContainer autoClose="2000" pauseOnHover={false} />
      <RouterProvider router={router} />
    </CreateContext>
    {/* </CountContext> */}
  </>
);
