import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </header>

      <main className="dashboard-main">
        <div className="card">
          <h2>@Aastha</h2>
          <p>Followers: 1,204</p>
        </div>
        <div className="card">
          <h2>@ProjectHandle</h2>
          <p>Followers: 5,890</p>
        </div>
        <div className="card">
          <h2>@SocialHub</h2>
          <p>Followers: 15,910</p>
        </div>
      </main>

      <section className="analytics-section">
        <div className="top-kpis">
          <div className="kpi-card">CTR<br /><span>43.03%</span><p>+2.59%</p></div>
          <div className="kpi-card">ROAS<br /><span>168%</span><p>+1.60%</p></div>
          <div className="kpi-card">Ad Spend<br /><span>$9,800</span><p>+0.79%</p></div>
        </div>

        <div className="analytics-grid">
          <div className="table-card">
            <h3>Paid Actions</h3>
            <table>
              <thead>
                <tr><th>City</th><th>Impressions</th><th>Reach</th><th>CTR</th></tr>
              </thead>
              <tbody>
                <tr><td>New York</td><td>345,032</td><td>53,643</td><td>34.29%</td></tr>
                <tr><td>Vilnius</td><td>935,821</td><td>42,689</td><td>83.12%</td></tr>
                <tr><td>London</td><td>293,843</td><td>38,835</td><td>34.02%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bar-chart-placeholder">
            <h3>Reach</h3>
            <div className="bar-chart">
              {[120, 160, 200, 140, 180, 150, 170, 130].map((value, i) => (
                <div key={i} className="bar" style={{ height: value / 2 + "px" }}></div>
              ))}
            </div>
          </div>

          <div className="line-chart-placeholder">
            <h3>Paid Actions</h3>
            <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>(chart placeholder)</p>
          </div>

          <div className="activity-summary">
            <h3>Activity</h3>
            <ul>
              <li>Sessions: <span>20,545</span></li>
              <li>Likes: <span>12,200</span></li>
              <li>Users: <span>10,845</span></li>
              <li>Impressions: <span>34,942</span></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
