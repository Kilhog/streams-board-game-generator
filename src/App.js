import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import _ from "lodash";

const getNumbersDraw = () => {
  let allAvailable = [..._.range(1, 31), ..._.range(11, 20), '⭐️'];
  return _.take(_.shuffle(allAvailable), 20);
};

function App() {
  const [current, setCurrent] = useState(0);
  const [numbersDraw, setNumbersDraw] = useState(getNumbersDraw());

  const reset = () => {
    setNumbersDraw(getNumbersDraw());
    setCurrent(0);
  };

  return (
    <div className="App">
      <div className="header">
        <Button variant="contained" color="secondary" onClick={() => reset()}>
          Générer une nouvelle série
        </Button>
      </div>

      <div className="content">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card variant="outlined" style={{ width: 400, height: 150 }}>
            <CardContent>
              {current >= numbersDraw.length && <span>Fini</span>}
              {current < numbersDraw.length && (
                <div>
                  <div style={{ fontSize: 30 }}>{numbersDraw[current]}</div>
                  <div style={{ fontSize: 10 }}>
                    {current + 1}/{numbersDraw.length}
                  </div>
                </div>
              )}
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setCurrent(current + 1)}
              >
                Nombre suivant
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
