import React, {useState} from 'react';

const AddUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [statusMessage, setStatusMessage] = useState('');

    const handleNameFieldChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    }

    const handleAgeFieldChange = (event) => {
        event.preventDefault();
        setAge(event.target.value);
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();
        setStatusMessage('');

        let user = {
            'name': name,
            'age': age
        };

        try {
            fetch("http://localhost:3100/users", {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(user)
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    setStatusMessage('User ' + user.name + ' created');
                });
        } catch (err) {
            // Remediation logic
            setStatusMessage('There was an error creating the user');
        }
    }

    return(
        <div className="flex flex-col items-center justify-center">
            <div className="lg:w-1/5 md:w-2/5 w-2/5">
                <label className="mt-6">Name</label>
                <input
                    type="text"
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm"
                    placeholder=""
                    value={name}
                    onChange={(e) => handleNameFieldChange(e)}
                />
                <label className="mt-6">Age</label>
                <input
                    type="text"
                    className="mt-1 w-full rounded-xl border-gray-300 shadow-sm"
                    placeholder=""
                    value={age}
                    onChange={(e) => handleAgeFieldChange(e)}
                />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCreateUser}>
                    Create User
                </button>
                <p className="text-red-900">
                    { statusMessage }
                </p>
            </div>

        </div>
    );
};

export default AddUser
