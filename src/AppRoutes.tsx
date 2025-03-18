import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import ProtectedRoute from "./auth/ProtectedRoutes";
import ManageRestaurantPage from "./pages/ManageRestaurantPage";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailsPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element = {<Layout showHero><HomePage /></Layout>} />
            <Route path="/auth-callback" element={<AuthCallbackPage />} />
            <Route path="/search/:city" element={ <Layout showHero={false}> <SearchPage/> </Layout>} />
            <Route path="/detail/:restaurantId" element={ <Layout showHero={false}> <DetailPage/> </Layout>} />
            <Route element={<ProtectedRoute /> }>
                <Route path="/user-profile" element = {<Layout><UserProfilePage/></Layout>} />
                <Route path="/manage-resturant" element = {<Layout><ManageRestaurantPage/></Layout>} />
            </Route>
            <Route path="*" element = {<Navigate to="/"/>} />
        </Routes>
    ) 
} 

export default AppRoutes; 