import React from "react";
import { Route, Routes } from "react-router-dom";

// Import all your components here
import Home1 from "./pages/homePages/Home1";
import Home2 from "./pages/homePages/Home2";
import Home3 from "./pages/homePages/Home3";
import Home4 from "./pages/homePages/Home4";
import Home5 from "./pages/homePages/Home5";
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ChefPage from "./pages/innerPages/ChefPage";
import ChefDetails from "./pages/innerPages/ChefDetails";
import ReservationPage from "./pages/innerPages/ReservationPage";
import ContactPage from "./pages/innerPages/ContactPage";
import AboutUsPageDark from "./pages/innerPages/AboutUsDark";
import ChefPageDark from "./pages/innerPages/ChefPageDark";
import ChefDetailsDark from "./pages/innerPages/ChefDetailsDark";
import ReservationPageDark from "./pages/innerPages/ReservationPageDark";
import ContactPageDark from "./pages/innerPages/ContactPageDark";
import FoodMenuPage from "./pages/menuPages/FoodMenuPage";
import FoodMenu2Page from "./pages/menuPages/FoodMenu2Page";
import FoodMenu3Page from "./pages/menuPages/FoodMenu3Page";
import FoodMenuPageDark from "./pages/menuPages/FoodMenuPageDark";
import FoodMenu2PageDark from "./pages/menuPages/FoodMenu2PageDark";
import FoodMenu3PageDark from "./pages/menuPages/FoodMenu3PageDark";
import BlogStandardPage from "./pages/blogPages/BlogStandardPage";
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";
import Blog2ColumnPage from "./pages/blogPages/Blog2ColumnPage";
import Blog3ColumnPage from "./pages/blogPages/Blog3ColumnPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebarPage";
import BlogStandardPageDark from "./pages/blogPages/BlogStandardPageDark";
import BlogWithSidebarPageDark from "./pages/blogPages/BlogWithSidebarPageDark";
import Blog2ColumnPageDark from "./pages/blogPages/Blog2ColumnPageDark";
import Blog3ColumnPageDark from "./pages/blogPages/Blog3ColumnPageDark";
import BlogSinglePageDark from "./pages/blogPages/BlogSinglePageDark";
import BlogSingleWithSidebarPageDark from "./pages/blogPages/BlogSingleWithSidebarPageDark";
import ShopPage from "./pages/shopPages/ShopPage";
import ShopSinglePage from "./pages/shopPages/ShopSinglePage";
import ShopSingle2Page from "./pages/shopPages/ShopSingle2Page";
import ShopPageDark from "./pages/shopPages/ShopPageDark";
import ShopSinglePageDark from "./components/shop/ShopSinglePageContent";
import ShopSingle2PageDark from "./pages/shopPages/ShopSingle2PageDark";
import NotFoundDarkPage from "./components/notFound/NotFoundDarkPage";
import NotFoundPage from "./components/notFound/NotFoundPage";

// Import the missing components
import SingleFoodCategoryV3 from "./components/food/SingleFoodCategoryV3";
import MealClasses from "./components/food/MealClasses";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/home-2" element={<Home2 />}></Route>
        <Route path="/home-3" element={<Home3 />}></Route>
        <Route path="/home-4" element={<Home4 />}></Route>
        <Route path="/home-5" element={<Home5 />}></Route>

        <Route path="/about-us" element={<AboutUsPage />}></Route>
        <Route path="/chef" element={<ChefPage />}></Route>
        <Route path="/chef-details/:id" element={<ChefDetails />}></Route>
        <Route path="/reservation" element={<ReservationPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>

        <Route path="/about-us-dark" element={<AboutUsPageDark />}></Route>
        <Route path="/chef-dark" element={<ChefPageDark />}></Route>
        <Route
          path="/chef-details-dark/:id"
          element={<ChefDetailsDark />}
        ></Route>
        <Route
          path="/reservation-dark"
          element={<ReservationPageDark />}
        ></Route>
        <Route path="/contact-dark" element={<ContactPageDark />}></Route>

        <Route path="/food-menu" element={<FoodMenuPage />}></Route>
        <Route path="/food-menu-2" element={<FoodMenu2Page />}></Route>
        <Route path="/food-menu-3" element={<FoodMenu3Page />}></Route>

        <Route path="/food-menu-dark" element={<FoodMenuPageDark />}></Route>
        <Route path="/food-menu-2-dark" element={<FoodMenu2PageDark />}></Route>
        <Route path="/food-menu-3-dark" element={<FoodMenu3PageDark />}></Route>

        <Route path="/blog-standard" element={<BlogStandardPage />}></Route>
        <Route
          path="/blog-with-sidebar"
          element={<BlogWithSidebarPage />}
        ></Route>
        <Route path="/blog-2-column" element={<Blog2ColumnPage />}></Route>
        <Route path="/blog-3-column" element={<Blog3ColumnPage />}></Route>
        <Route path="/blog-single/:id" element={<BlogSinglePage />}></Route>
        <Route
          path="/blog-single-with-sidebar/:id"
          element={<BlogSingleWithSidebarPage />}
        ></Route>

        <Route
          path="/blog-standard-dark"
          element={<BlogStandardPageDark />}
        ></Route>
        <Route
          path="/blog-with-sidebar-dark"
          element={<BlogWithSidebarPageDark />}
        ></Route>
        <Route
          path="/blog-2-column-dark"
          element={<Blog2ColumnPageDark />}
        ></Route>
        <Route
          path="/blog-3-column-dark"
          element={<Blog3ColumnPageDark />}
        ></Route>
        <Route
          path="/blog-single-dark/:id"
          element={<BlogSinglePageDark />}
        ></Route>
        <Route
          path="/blog-single-with-sidebar-dark/:id"
          element={<BlogSingleWithSidebarPageDark />}
        ></Route>

        <Route path="/shop" element={<ShopPage />}></Route>
        <Route path="/shop-single" element={<ShopSinglePage />}></Route>
        <Route path="/shop-single-2" element={<ShopSingle2Page />}></Route>

        <Route path="/shop-dark" element={<ShopPageDark />}></Route>
        <Route
          path="/shop-single-dark"
          element={<ShopSinglePageDark />}
        ></Route>
        <Route
          path="/shop-single-2-dark"
          element={<ShopSingle2PageDark />}
        ></Route>

        <Route path="/not-found-dark" element={<NotFoundDarkPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>

        <Route path="/food-category" element={<SingleFoodCategoryV3 />} ></Route>

        {/* Route for MealClasses based on meal_type_id */}
        <Route
          path="/subscription-details/:meal_type_id"
          element={<MealClasses />}> </Route>
       
      </Routes>
    </>
  );
};

export default Routers;
