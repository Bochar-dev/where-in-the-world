import { IoSearch } from 'react-icons/io5';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

const Search = ({search, setSearch}) => {
    return (
        <InputWrapper>
            <IoSearch />
            <Input onChange={(evt) => setSearch(evt.target.value)} value={search}/>
        </InputWrapper>
    );
};

export default Search;