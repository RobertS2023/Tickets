import React, { useEffect } from "react";
import MyChart from "../components/chart";
import Tickets from "./tickets";
function Home() {
  return (
    <>
      <section className="overview">
        <div className="ticket-overview">
          <div className="ticket-overview-center">
            <div className="overview-1">
              <h4>21%</h4>
              <h4>Unnassigned Tickets</h4>
            </div>
          </div>
        </div>
        <div className="ticket-overview">
          <div className="ticket-overview-center">
            <div className="overview-2">
              <h4>30</h4>
              <h4>Unressolved Tickets</h4>
            </div>
          </div>
        </div>
        <div className="ticket-overview overview-three">
          <div className="ticket-overview-center">
            <div className="overview-3">
              <h4>1</h4>
              <h4>Urgent Ticket</h4>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <div className="clients-center">
          <div className="resolved-clients">
            <h4 className="clients-percent">81%</h4>
            <h4 className="clients-text">Resolved Clients</h4>
          </div>
          <div className="new-clients">
            <h4 className="clients-percent">6%</h4>
            <h4 className="clients-text">New v. Returning Clients</h4>
          </div>
        </div>
      </section>
      <section className="chart">
        <div className="chart-title">
          <h4>Resolution Overview:</h4>
        </div>
        <div className="chart-center">
          <MyChart />
        </div>
      </section>
    </>
  );
}

export default Home;
