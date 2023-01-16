import React, { useEffect, useState } from "react";
import jsonData from "./data/data.json";
import "./App.scss";

interface IProject {
  name: string;
  img_name: string;
  link: string;
  is_private: boolean;
}

interface IData {
  pet_project: IProject[];
  real_project: IProject[];
}

function App() {
  const [data, setData] = useState<IData>({
    pet_project: [],
    real_project: [],
  });

  useEffect(() => {
    setData(JSON.parse(JSON.stringify(jsonData)));
  }, []);

  return (
    <div className="App">
      <div className="creator">
        <div className="creator-avatar">
          <img src={require("./assets/img/avatar.png")} alt="img" />
        </div>
        <div className="creator-title">
          <p>Hieu Nguyen</p>
          <p>
            <a
              href="https://meu-solutions.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @MeU Solutions
            </a>{" "}
            - Software Engineer
          </p>
        </div>
      </div>

      <h3>Real projects I had worked</h3>
      <div className="card-container">
        {data.real_project.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              {item.is_private ? (
                <div className="private-project-title-container">
                  <div className="private-project-title">
                    <p>This image of project is private</p>
                    <p>Based on the company's privacy policy</p>
                  </div>
                </div>
              ) : (
                <img src={require(`./assets/img/${item.img_name}`)} alt="img" />
              )}
            </div>
            <div className="card-title">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3>Pet Projects</h3>
      <div className="card-container">
        {data.pet_project.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={require(`./assets/img/${item.img_name}`)} alt="img" />
            </div>
            <div className="card-title">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
