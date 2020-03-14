import {useEffect} from 'react';
import useLocalStorage from  './useLocalStorage';

const useDarkMode = (initialValue) =>{

const [darkMode, setDarkMode] = useLocalStorage('dark-mode', initialValue);
//This if else code block will render everytim ethe app rerender, and it would be wasteful. So put that in useEffect hook and add a dependency array.  Now the darkmode will change when we want it to change.The rendering of this code block depends on the value darkMode and it will changewhen value of darkMode changes(means, darkMode is true or false)
useEffect(()=>{
    if(darkMode){
            document.body.classList.add('dark-mode');
        }else{
            document.body.classList.remove('dark-mode')
        }
}, [darkMode]);    
return[darkMode, setDarkMode];
}


export default useDarkMode


