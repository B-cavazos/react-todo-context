import React, { createContext, useState, useEffect } from 'react';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    /* state for input form */
    const [inputText, setInputText] = useState('');

    /* state for todo items */
    const [todos,setTodos] = useState([{
        id: null,
        task:'',
        completed: false,

    }]); 

    /* inputTextHandler */
    const inputTextHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    /* submitHandler */
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos(...todos, {
            id: Date.now(),
            task: inputText, 
            completed: false
        });
        setInputText('');
    };

/* useEffect for button? */


  return (
    <AppContext.Provider value={{inputTextHandler, submitHandler}}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };