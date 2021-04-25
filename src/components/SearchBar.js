import React, {useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('');

const onSubmit = (event) =>{
    //prevent the refresh of the page when key press enter
    event.preventDefault();
    //our parent component is told what the current search term is
    onFormSubmit(term);
}

return(
    <div className="search bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
            <div className="field">
                <label>
                   Video search 
                </label>
                <input 
                onChange={(event) => setTerm(event.target.value)}
                type="text" 
                value={term}/>
            </div>
        </form>
    </div>
)
}

export default SearchBar;