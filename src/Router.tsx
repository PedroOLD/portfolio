import { ApolloProvider } from "@apollo/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { cliente } from "./lib/Cliente";


export function Router () {
    return (
        <ApolloProvider client={ cliente }>
            <BrowserRouter>
                <Routes>
                    <Route  path="/" element={<Navigate to="/pedro-henrique" />} />
                    <Route path="/:slug" element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
}