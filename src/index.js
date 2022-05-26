import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserList from "./components/UserList/UserList";
import UserDetail from "./components/UserDetail/UserDetail";
import AlbumsUser from "./components/AlbumsUser/AlbumsUser";
import Albums from "./components/Albums/Albums";
import PhotosAlbum from "./components/PhotosAlbum/PhotosAlbum";
import Logout from "./components/Logout/Logout";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import { Provider } from "react-redux";
import { store } from "./features/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/albums/users" element={<AlbumsUser />} />
        <Route path="/albums/:idUser" element={<Albums />} />
        <Route path="/user/:idUser" element={<UserDetail />} />
        <Route path="/albums/photos/:idAlbum" element={<PhotosAlbum />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
