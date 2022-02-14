import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Homepage = lazy(() => import("./views/Homepage"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path ="/" element={<Homepage />}/>
      </Routes>
    </Suspense>
  );
};

export default App;
