import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationForm from './components/Registration/RegistrationForm';
import Home from './components/Home';
import RestaurantList from './components/Restaurant/RestaurantList';
import RestaurantDetail from './components/Restaurant/RestaurantDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/restaurants" element={<RestaurantList />} />
                <Route path="/restaurants/:id" element={<RestaurantDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
