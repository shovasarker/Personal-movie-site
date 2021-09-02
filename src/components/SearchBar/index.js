import React, { useState, useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
// Image 
import searchIcon from '../../images/search-icon.svg';

// Styles
import { Wrapper, Content } from './SearchBar.styles';


const SearchBar = ({ setSearchTerm }) => {

    const [state, setState] = useState('');

    // Mutable State
    const initial = useRef(true);

    useEffect(() => {

        // useRef used so that Initialy without change it doesn't Render or serch for item
        if (initial.current) {
            initial.current = false;
            return;
        }

        // After Every Changes in the SearchBar It will trigger in 500ms
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        // it will maintain that the search is one time in every Change
        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input
                    type="text"
                    placeholder="Search Movie"
                    onChange={event => setState(event.currentTarget.value)}
                    value={state}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func
}


export default SearchBar;