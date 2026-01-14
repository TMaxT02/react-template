import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="min-h-screen flex items-center justify-center">
                        <h1 className="text-3xl font-semibold">Hello World</h1>
                    </div>
                }
            />
        </Routes>
    );
}

export default App;
