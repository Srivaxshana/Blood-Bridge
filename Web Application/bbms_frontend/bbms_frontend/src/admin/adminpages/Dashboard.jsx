// // // Dashboard.jsx
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./Dashboard.css";

// // const Dashboard = () => {
// //     const [donors, setDonors] = useState([]);
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         bloodType: "",
// //         contactNo: "",
// //         address: ""
// //     });

// //     useEffect(() => {
// //         fetchDonors();
// //     }, []);

// //     const fetchDonors = async () => {
// //         const response = await axios.get("http://localhost:8081/api/donors/");
// //         setDonors(response.data);
// //     };

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         await axios.post("http://localhost:8081/api/donors/create", formData);
// //         fetchDonors();
// //     };

// //     return (
// //         <div className="dashboard-container">
// //             <h2>Edit Donors</h2>
// //             <form onSubmit={handleSubmit} className="form-container">
// //                 <input type="text" name="name" placeholder="Name" onChange={handleChange} />
// //                 <input type="text" name="bloodType" placeholder="Blood Type" onChange={handleChange} />
// //                 <input type="text" name="contactNo" placeholder="Contact No" onChange={handleChange} />
// //                 <input type="text" name="address" placeholder="Address" onChange={handleChange} />
// //                 <button type="submit" className="add-button">Add Donor</button>
// //             </form>
// //             <table>
// //                 <thead>
// //                     <tr>
// //                         <th>ID</th>
// //                         <th>Name</th>
// //                         <th>Blood Type</th>
// //                         <th>Contact No</th>
// //                         <th>Address</th>
// //                     </tr>
// //                 </thead>
// //                 <tbody>
// //                     {donors.map((donor) => (
// //                         <tr key={donor.id}>
// //                             <td>{donor.id}</td>
// //                             <td>{donor.name}</td>
// //                             <td>{donor.bloodType}</td>
// //                             <td>{donor.contactNo}</td>
// //                             <td>{donor.address}</td>
// //                         </tr>
// //                     ))}
// //                 </tbody>
// //             </table>
// //             <div className="button-container">
// //                 <button className="update-button">Update Donor</button>
// //                 <button className="delete-button">Delete Donor</button>
// //                 <button className="details-button">Donor Details</button>
// //                 <button className="cancel-button">Cancel</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Dashboard;


// // Dashboard.jsx
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Dashboard.css";
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//     const [donors, setDonors] = useState([]);
//     const [selectedDonor, setSelectedDonor] = useState(null);
//     const [formData, setFormData] = useState({
//         name: "",
//         bloodType: "",
//         contactNo: "",
//         address: ""
//     });
//     const [isEditing, setIsEditing] = useState(false);
//     const [showDetails, setShowDetails] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         fetchDonors();
//     }, []);

//     const fetchDonors = async () => {
//         const response = await axios.get("http://localhost:8081/api/donors/");
//         setDonors(response.data);
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (isEditing) {
//             await axios.put(`http://localhost:8081/api/donors/${selectedDonor.id}`, formData);
//         } else {
//             await axios.post("http://localhost:8081/api/donors/create", formData);
//         }
//         fetchDonors();
//         setIsEditing(false);
//         setFormData({ name: "", bloodType: "", contactNo: "", address: "" });
//     };

//     const handleDelete = async () => {
//         if (selectedDonor) {
//             await axios.delete(`http://localhost:8081/api/donors/${selectedDonor.id}`);
//             fetchDonors();
//             setSelectedDonor(null);
//         }
//     };

//     return (
//         <div className="dashboard-container">
//             <h2>Edit Donors</h2>
//             <form onSubmit={handleSubmit} className="form-container">
//                 <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//                 <input type="text" name="bloodType" placeholder="Blood Type" value={formData.bloodType} onChange={handleChange} />
//                 <input type="text" name="contactNo" placeholder="Contact No" value={formData.contactNo} onChange={handleChange} />
//                 <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
//                 <button type="submit" className="add-button">{isEditing ? "Update Donor" : "Add Donor"}</button>
//             </form>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Blood Type</th>
//                         <th>Contact No</th>
//                         <th>Address</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {donors.map((donor) => (
//                         <tr key={donor.id} onClick={() => setSelectedDonor(donor)}>
//                             <td>{donor.id}</td>
//                             <td>{donor.name}</td>
//                             <td>{donor.bloodType}</td>
//                             <td>{donor.contactNo}</td>
//                             <td>{donor.address}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <div className="button-container">
//                 <button className="update-button" onClick={() => { setIsEditing(true); setFormData(selectedDonor); }}>Update Donor</button>
//                 <button className="delete-button" onClick={handleDelete}>Delete Donor</button>
//                 <button className="details-button" onClick={() => setShowDetails(true)}>Donor Details</button>
//                 <button className="cancel-button" onClick={() => setSelectedDonor(null)}>Logout</button>

//             </div>
//             {showDetails && selectedDonor && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h3>Donor Details</h3>
//                         <p>Name: {selectedDonor.name}</p>
//                         <p>Blood Type: {selectedDonor.bloodType}</p>
//                         <p>Contact No: {selectedDonor.contactNo}</p>
//                         <p>Address: {selectedDonor.address}</p>
//                         <button onClick={() => setShowDetails(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [donors, setDonors] = useState([]);
    const [selectedDonor, setSelectedDonor] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        bloodType: "",
        contactNo: "",
        address: ""
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        fetchDonors();
    }, []);

    const fetchDonors = async () => {
        const response = await axios.get("http://localhost:8081/api/donors/");
        setDonors(response.data);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await axios.put(`http://localhost:8081/api/donors/${selectedDonor.id}`, formData);
        } else {
            await axios.post("http://localhost:8081/api/donors/create", formData);
        }
        fetchDonors();
        setIsEditing(false);
        setFormData({ name: "", bloodType: "", contactNo: "", address: "" });
    };

    const handleDelete = async () => {
        if (selectedDonor) {
            await axios.delete(`http://localhost:8081/api/donors/${selectedDonor.id}`);
            fetchDonors();
            setSelectedDonor(null);
        }
    };

    const handleLogout = () => {
        setSelectedDonor(null);
        navigate('/');  // Redirects to home page after logout
    };

    return (
        <div className="dashboard-container">
            <h2>Edit Donors</h2>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="bloodType"
                    placeholder="Blood Type"
                    value={formData.bloodType}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="contactNo"
                    placeholder="Contact No"
                    value={formData.contactNo}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <button type="submit" className="add-button">
                    {isEditing ? "Update Donor" : "Add Donor"}
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Blood Type</th>
                        <th>Contact No</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {donors.map((donor) => (
                        <tr
                            key={donor.id}
                            onClick={() => setSelectedDonor(donor)}
                            className={selectedDonor && selectedDonor.id === donor.id ? "selected" : ""}
                        >
                            <td>{donor.id}</td>
                            <td>{donor.name}</td>
                            <td>{donor.bloodType}</td>
                            <td>{donor.contactNo}</td>
                            <td>{donor.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="button-container">
                <button
                    className="update-button"
                    onClick={() => {
                        setIsEditing(true);
                        setFormData(selectedDonor);
                    }}
                >
                    Update Donor
                </button>
                <button className="delete-button" onClick={handleDelete}>
                    Delete Donor
                </button>
                <button
                    className="details-button"
                    onClick={() => setShowDetails(true)}
                >
                    Donor Details
                </button>
                <button className="cancel-button" onClick={handleLogout}>
                    Logout
                </button>
            </div>

            {showDetails && selectedDonor && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Donor Details</h3>
                        <p>Name: {selectedDonor.name}</p>
                        <p>Blood Type: {selectedDonor.bloodType}</p>
                        <p>Contact No: {selectedDonor.contactNo}</p>
                        <p>Address: {selectedDonor.address}</p>
                        <button onClick={() => setShowDetails(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
