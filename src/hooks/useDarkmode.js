import {useState} from 'react';

//we are not using JSX here so no need to import react like we always do

const useLocalStorage = (key, initialValue) =>{       //we will need an extra peace of info--key, to store our initialValue
// const [storedValue, setStoredValue] = useState(initialValue) //we donot want to store initialValue as stored value in our custom hook, what if we already have a value  in our localStorage , we would consider that as our initial value. We can accomplish that using callback function(useState permit that) and returning the final value.
const [storedValue, setStoredValue] = useState(()=>{
    const item = window.localStorage.getItem(key)
    if (item){
        return JSON.parse(item)   //if the item exists, means: there was somelocalStorage and we want to use that else initial value
    }else{
        return initialValue
    } 
    //we can use ternary instead of if/else statement
    // return (item ?  JSON.parse(item): initialValue)  
 });
    const setValue = value =>{
    setStoredValue(value);
    window.localStorage.setItem(key,JSON.stringify(value))
 }
     return [storedValue, setValue]
}

// useLocalStorage(key, initialValue)-------->[value. setValue]

export default useLocalStorage;



