import React, {useState} from 'react';

const SearchUser = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSearchUser(event) {
        event.preventDefault();
        setErrorMessage('');

        try {
            fetch('http://localhost:3100/users')
                .then(response => response.json())
                .then(data => {
                    setSearchResults(data);
                });
        } catch (err) {
            // Remediation logic
            setErrorMessage('There was an error searching for the user');
        }
    }

    return(
        <div className="flex items-center justify-center ">
            <div className="grid grid-flow-row auto-rows-max">
                <div className="flex border-2 border-gray-200 rounded">
                    <input type="text" className="px-4 py-2 w-80" placeholder="Search...">
                    </input>
                    <button className="px-4 text-white bg-gray-600" onClick={handleSearchUser}>
                        Search
                    </button>

                </div>
                <div>
                    <table className="table-auto">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                        </thead>
                        <tbody>
                        {searchResults.map((user) => {
                            return(
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SearchUser;
