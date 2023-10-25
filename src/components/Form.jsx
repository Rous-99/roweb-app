import React, {useState} from "react";
import Contact from "./Contact.jsx";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase.js";


const Form = () =>{

    const addMessage = async (messageObject) => {
        await addDoc(collection(db, "messages"),messageObject);
        console.log('new message');
        // console.log('object',messageObject);
    }

    return(
        <Contact addMessage={addMessage}/>
    )
}

export default Form;