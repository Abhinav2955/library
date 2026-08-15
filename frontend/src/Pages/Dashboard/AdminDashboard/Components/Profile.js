import React, { useContext } from 'react'
import "../AdminDashboard.css"
import { AuthContext } from '../../../../Context/AuthContext'

function Profile() {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <p className="dashboard-option-title">My Profile</p>
            <div className="dashboard-title-line"></div>
            <div className="member-profile-content" id="profile@admin">
                <div className="user-details-topbar">
                    <img className="user-profileimage" src="./assets/images/Profile.png" alt=""></img>
                    <div className="user-info">
                        <p className="user-name">{user?.userFullName}</p>
                        <p className="user-id">{user?.userType === "Student" ? user?.admissionId : user?.employeeId}</p>
                        <p className="user-email">{user?.email}</p>
                        <p className="user-phone">{user?.mobileNumber}</p>
                    </div>
                </div>
                <div className="user-details-specific">
                    <div className="specific-left">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <p style={{ display: "flex", flex: "0.5", flexDirection: "column" }}>
                                <span style={{ fontSize: "18px" }}>
                                    <b>Age</b>
                                </span>
                                <span style={{ fontSize: "16px" }}>
                                    {user?.age}
                                </span>
                            </p>
                            <p style={{ display: "flex", flex: "0.5", flexDirection: "column" }}>
                                <span style={{ fontSize: "18px" }}>
                                    <b>Gender</b>
                                </span>
                                <span style={{ fontSize: "16px" }}>
                                    {user?.gender}
                                </span>
                            </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
                            <p style={{ display: "flex", flex: "0.5", flexDirection: "column" }}>
                                <span style={{ fontSize: "18px" }}>
                                    <b>DOB</b>
                                </span>
                                <span style={{ fontSize: "16px" }}>
                                    {user?.dob}
                                </span>
                            </p>
                            <p style={{ display: "flex", flex: "0.5", flexDirection: "column" }}>
                                <span style={{ fontSize: "18px" }}>
                                    <b>Address</b>
                                </span>
                                <span style={{ fontSize: "16px" }}>
                                    {user?.address}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="specific-right">
                        <div style={{ display: "flex", flexDirection: "column", flex: "0.5" }}>
                            <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}><b>Role</b></p>
                            <p style={{ fontSize: "25px", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px" }}>Admin</p>
                        </div>
                        <div className="dashboard-title-line"></div>
                        <div style={{ display: "flex", flexDirection: "column", flex: "0.5" }}>
                            <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}><b>User Type</b></p>
                            <p style={{ fontSize: "25px", fontWeight: "500", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "15px" }}>{user?.userType}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile