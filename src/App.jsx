import "./App.css";

// React-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Faq from "./pages/help/Faq";
import Form from "./pages/help/Form";
import Articles from "./pages/articles/Articles";
import ArticlesDetail from "./pages/articles/ArticlesDetail";
import PageNotFound from "./pages/PageNotFound";

// Layouts
import RootLayout from "./layouts/RootLayout";
import ContactLayout from "./layouts/ContactLayout";
import ArticlesLayout from "./layouts/ArticlesLayout";

function App() {
  // MAIN APP
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="faq" element={<Faq />} />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="articles" element={<ArticlesLayout />}>
          <Route index element={<Articles />} />
          <Route path=":id" element={<ArticlesDetail />} />
        </Route>

        {/* PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
