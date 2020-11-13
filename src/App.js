import "./App.css";

const data = [
  {
    city: "Bangkok",
    video: "",
    holiday: {
      mon: ["https://ca.slack-edge.com/T07SJTGPR-U08G7756V-ef69c8ddfd91-512"],
      tue: [
        "https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512",
        "https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512",
      ],
      wed: [],
      thu: [],
      fri: ["https://ca.slack-edge.com/T07SJTGPR-UMVHC4XPW-eac5cdcfcdcd-512"],
    },
    wfh: {
      mon: [
        "https://ca.slack-edge.com/T07SJTGPR-U08G63PQC-06ac15cf64b1-512",
        "https://ca.slack-edge.com/T07SJTGPR-U0A3LM5E2-289dfe1e55cc-512",
        "https://ca.slack-edge.com/T07SJTGPR-UMVHC4XPW-eac5cdcfcdcd-512",
        "https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512",
        "https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512",
      ],
      tue: [],
      wed: [
        "https://ca.slack-edge.com/T07SJTGPR-U08G63PQC-06ac15cf64b1-512",
        "https://ca.slack-edge.com/T07SJTGPR-U0A3LM5E2-289dfe1e55cc-512",
        "https://ca.slack-edge.com/T07SJTGPR-UMVHC4XPW-eac5cdcfcdcd-512",
        "https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512",
        "https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512",
      ],
      thu: [
        "https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512",
        "https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512",
      ],
      fri: [
        "https://ca.slack-edge.com/T07SJTGPR-U08G63PQC-06ac15cf64b1-512",
        "https://ca.slack-edge.com/T07SJTGPR-U0A3LM5E2-289dfe1e55cc-512",
        "https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512",
        "https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512",
      ],
    },
  },
];

function Calenday(props) {
  const date = new Date();
  return (
    <div className="container">
      <div className="panel-title">
        <div className="pull-left">
          <span>Who's Out?</span>
          <h1>{props.city}</h1>
        </div>
        <div className="pull-right">☀️ {date.toLocaleTimeString()}</div>
      </div>
      <div className="panel-weekly">
        <div className="col col-title">
          <div className="row">
            <span>🌴</span>
            <h3>Holiday</h3>
          </div>
          <div className="row">
            <span>🏠</span>
            <h3>WFH</h3>
          </div>
        </div>

        <div className="col">
          <div className="row">
            <span className="date">MON 9</span>
            <div className="avatar-list">
              {props.holiday.mon.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="avatar-list">
              {props.wfh.mon.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="col">
          <span className="date">TUE 10</span>
          <div className="row">
            <div className="avatar-list">
              {props.holiday.tue.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="avatar-list">
              {props.wfh.tue.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="col">
          <span className="date">WED 11</span>
          <div className="row">
            <div className="avatar-list">
              {props.holiday.wed.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="avatar-list">
              {props.wfh.wed.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="col">
          <span className="date">THU 12</span>
          <div className="row">
            <div className="avatar-list">
              {props.holiday.thu.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="avatar-list">
              {props.wfh.thu.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="col">
          <span className="date">FRI 13</span>
          <div className="row">
            <div className="avatar-list">
              {props.holiday.fri.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="avatar-list">
              {props.wfh.fri.map((image) => (
                <div
                  className="avatar"
                  style={{ backgroundImage: `url("${image}")` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return data.map((d) => {
    return <Calenday {...d} />;
  });
}

export default App;
