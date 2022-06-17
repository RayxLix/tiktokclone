import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import NotFound from "./pages/NotFound";
import { DefaultLayout } from "~/components/LayOut";
import { Fragment } from "react";
import { HeaderOnly } from "./components/LayOut";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((item, index) => {
            const Page = item.component;
            // const LayOut = item.LayOut === null ? Fragment : DefaultLayout;
            let LayOut = DefaultLayout;
            if (item.LayOut) {
              LayOut = item.LayOut;
            } else if (item.LayOut === null) {
              LayOut = Fragment;
            } else {
            }
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <LayOut>
                    <Page />
                  </LayOut>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
