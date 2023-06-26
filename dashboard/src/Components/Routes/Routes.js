import {BrowserRouter,Routes, Route}
const Routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routes;