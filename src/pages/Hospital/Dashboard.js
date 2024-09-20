import React from 'react';
import './Dashboard.css' ;


function DashboardHospital ()  {
  return (
    <div className="hospital-dashboard">
      <h1>Hospital Dashboard</h1>
      <p>Welcome to the Hospital Dashboard!</p>
      <section>
        <h2>Overview</h2>
        <p>Manage your hospital's operations efficiently.</p>
      </section>
      <section>
        <h2>Patient Management</h2>
        <p>View and manage patient records, appointments, and histories.</p>
        <button className="action-button">View Patients</button>
      </section>
      <section>
        <h2>Insurance Claims</h2>
        <p>Track and manage insurance claims for patients.</p>
        <button className="action-button">Manage Claims</button>
      </section>
      <section>
        <h2>Reports</h2>
        <p>Generate reports for hospital performance and patient care.</p>
        <button className="action-button">Generate Reports</button>
      </section>
    </div>
  );
};

export default DashboardHospital;
