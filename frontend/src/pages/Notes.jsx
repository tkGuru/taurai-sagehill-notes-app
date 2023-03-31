import React, { useEffect } from "react";
import Layout from "./Layout";
import NotesList from "../components/NotesList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { getUser } from "../features/authSlice";

const Notes = () => {
  //const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);


  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  
  return (
    <Layout>
      <NotesList />
    </Layout>
  );
};

export default Notes;
