import React, { useEffect, useState } from 'react';
import Firstsearchuser from './Firstsearchuser';
import { Search } from 'lucide-react';
import Aftersearchuser from './Aftersearchuser';

function Userhome() {
    const firstSearch = sessionStorage.getItem('first_search');
    const [isSearched, setIsSearched] = useState(false);
    useEffect(()=>{
        if(firstSearch){
            setIsSearched(true);
        }else{
            setIsSearched(false);
        }
    })
  return (
    <>
        {
            !isSearched &&
            <Firstsearchuser/>
        }
        {
            isSearched &&
            <Aftersearchuser/>
        }
    </>
  )
}

export default Userhome