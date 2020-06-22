/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";

import styles from "./App.module.css";
import Graph from "./Graph";
import LineChart from "./LineChart";
import SimulationSettings from "./SimulationSettings";
import { SICK, RECOVERED, DEAD } from "./constants";
import { useInterval, randomChoice } from "./utils";
import { nextSimulationTick, getInitialGraph } from "./simulation";

const INITIAL_SIMULATION_STATE = {
  tick: 0,
  agentsPerHouse: 10,
  houses: 50,
  busStations: 5,
  hospitals: 3,
  supermarkets: 5,
  schools: 3,
  initialSickAgents: 10,
};

const INITIAL_GRAPH = getInitialGraph(INITIAL_SIMULATION_STATE);

function App() {
  const [simulationState, setSimulationState] = useState(
    INITIAL_SIMULATION_STATE
  );
  const [nodes, setNodes] = useState(INITIAL_GRAPH.nodes);
  const [edges, setEdges] = useState(INITIAL_GRAPH.edges);
  const [historicalSickCount, setHistoricalSickCount] = useState([]);
  const [historicalRecoveredCount, setHistoricalRecoveredCount] = useState([]);
  const [historicalDeadCount, setHistoricalDeadCount] = useState([]);
  const [loading, setLoading] = useState(true);

  const graphRef = useRef(null);

  useInterval(() => {
    if (loading) {
      return;
    }

    const { nodes: _nodes, edges: _edges, state } = nextSimulationTick(
      simulationState,
      nodes,
      edges
    );

    setSimulationState(state);

    setHistoricalSickCount(
      historicalSickCount.concat(
        nodes.filter(({ state }) => state === SICK).length
      )
    );

    setHistoricalRecoveredCount(
      historicalRecoveredCount.concat(
        nodes.filter(({ state }) => state === RECOVERED).length
      )
    );

    setHistoricalDeadCount(
      historicalDeadCount.concat(
        nodes.filter(({ state }) => state === DEAD).length
      )
    );
  }, 1000);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  const onNodeClick = (nodeId) => {
    return () => {
      const node = nodes.find(({ id }) => nodeId === id);
      if (node.type !== "venue") {
        return;
      }
      node.locked = !node.locked;
    };
  };

  const onSettingChange = (key) => (event) => {
    setSimulationState({ ...simulationState, [key]: event.target.value });
  };

  const onRestartButtonClick = () => {
    const { nodes, edges } = getInitialGraph(simulationState);
    setLoading(true);
    setNodes(nodes);
    setEdges(edges);
    setHistoricalDeadCount([]);
    setHistoricalRecoveredCount([]);
    setHistoricalSickCount([]);
    setSimulationState({ ...simulationState, tick: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>CoronaSim: Simulating Coronavirus Escalation with the Application of SIR Modeling</h3>
        <h2>A virtualized experiment to analyze the spread of a pathogen over a modeled community</h2>
      </div>
      <div className={styles.simulation}>
        <div className={styles.samples}>
          <span className={styles.sampleSusceptible}>Susceptible</span>
          <span className={styles.sampleInfected}>Infected</span>
          <span className={styles.sampleRecovered}>Recovered</span>
          <i>Click on a building to qurantine</i>
        </div>
        {!loading && (
          <Graph
            width={
              Math.round(
                nodes.filter(({ type }) => type === "venue").length / 6
              ) * 110
            }
            height={700}
            tick={simulationState.tick}
            nodes={nodes}
            edges={edges}
            onNodeClick={onNodeClick}
            ref={graphRef}
          />
        )}
      </div>
      <div className={styles.section}>
        <div className={styles.stats}>
          <h3>Stats</h3>
          <div className={styles.population}>
            Population: {nodes.filter(({ type }) => type === "agent").length}{" "}
            <br />
            Dead: {nodes.filter(({ state }) => state === DEAD).length} <br />
            Recovered: {
              nodes.filter(({ state }) => state === RECOVERED).length
            }{" "}
            <br />
            Sick: {nodes.filter(({ state }) => state === SICK).length} <br />
          </div>
          <LineChart
            width={300}
            height={270}
            data={[
              { color: "red", points: historicalSickCount },
              { color: "green", points: historicalRecoveredCount },
              { color: "black", points: historicalDeadCount },
            ]}
          />
        </div>
        <div className={styles.simulationSettings}>
          <h3>Settings</h3>
          <SimulationSettings
            simulationState={simulationState}
            onSettingChange={onSettingChange}
            onRestartButtonClick={onRestartButtonClick}
          />
        </div>

      </div>
      <div className={styles.pageInfo}>
        <div className={styles.section}>
          <h1>Docs</h1>
          <p>These elements are modifiable by the user to further specify circumstanital conditions: </p>
          <ul>
            <li>
                Initial sick agents: number of intial sick people (randomly dispersed through homes)
            </li>
            <br/>
            <li>
                Agents per building: number of people per home
            </li>
            <br/>
            <li>
                Houses: number of houses
            </li>
            <br/>
            <li>
                Bus stations: number of bus stations
            </li>
            <br/>
            <li>
                Hospitals: number of hospitals
            </li>
            <br/>
            <li>
                Supermarkets: number of supermarkets
            </li>
            <br/>
            <li>
                Schools: number of schools
            </li>
          </ul>
          <h2>Regions</h2>
          <p>
            Each region has distinctive characteristics extracted from the region's respective Demographic Transition Model (DTM). Elements are scaled logarithimically for simulation and SIR modeling while factoring modified user input.
          </p>
          <ul>
            <li>
              <a href="/react-coronasim/na/">
                North America (NA)
              </a>
            </li>
            <li>
              <a href="/react-coronasim/sa/">
                South America (SA)
              </a>
            </li>
            <li>
              <a href="/react-coronasim/eu/">
                Europe (EU)
              </a>
            </li>
            <li>
              <a href="/react-coronasim/as/">
                Asia (AS)
              </a>
            </li>
            <li>
              <a href="/react-coronasim/af/">
                Africa (AF)
              </a>
            </li>
            <li>
              <a href="/react-coronasim/oc/">
                Oceania (OC)
              </a>
            </li>
          </ul>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default App;
