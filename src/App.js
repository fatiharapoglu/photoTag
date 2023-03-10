import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Leaderboard from "./components/Leaderboard";
import Main from "./components/Main";
import Snackbar from "./components/Snackbar";

const App = () => {
    const [selectedScene, setSelectedScene] = useState("ps1");
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
    const [snackbarText, setSnackbarText] = useState("");
    const [snackbarColor, setSnackbarColor] = useState("success");

    const handleSnackbar = (text, color = "success") => {
        setIsSnackbarOpen(true);
        if (color === "success") {
            setSnackbarColor("success");
        } else {
            setSnackbarColor("error");
        }
        setSnackbarText(text);
    };

    useEffect(() => {
        if (isSnackbarOpen === false) return;
        setTimeout(() => {
            setIsSnackbarOpen(false);
        }, 3000);
    }, [isSnackbarOpen]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/photoTag/" element={<Main setSelectedScene={setSelectedScene} />} />
                <Route
                    path="/photoTag/game"
                    element={<Game selectedScene={selectedScene} handleSnackbar={handleSnackbar} />}
                />
                <Route
                    path="/photoTag/leaderboard"
                    element={
                        <Leaderboard
                            selectedScene={selectedScene}
                            setSelectedScene={setSelectedScene}
                        />
                    }
                />
                <Route path="/photoTag/about" element={<About />} />
            </Routes>
            <Footer />
            {isSnackbarOpen && (
                <Snackbar snackbarText={snackbarText} snackbarColor={snackbarColor} />
            )}
        </>
    );
};

export default App;
