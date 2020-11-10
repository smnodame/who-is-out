import './App.css';

const data = [
  {
    city: 'Bangkok',
    video: 'https://www.w3schools.com/howto/rain.mp4',
    holiday: {
      mon: [
        'https://ca.slack-edge.com/T07SJTGPR-U0A3LM5E2-289dfe1e55cc-512',
        'https://ca.slack-edge.com/T07SJTGPR-U08G7756V-ef69c8ddfd91-512',
        'https://ca.slack-edge.com/T07SJTGPR-UMVHC4XPW-eac5cdcfcdcd-512'
      ],
      tue: [
        'https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512',
        'https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512'
      ],
      wed: [],
      thur: [],
      fri: []
    },
    wfh: {
      mon: [],
      tue: [],
      wed: [],
      thur: [
        'https://ca.slack-edge.com/T07SJTGPR-ULR70D8GH-87e881223f02-512',
        'https://ca.slack-edge.com/T07SJTGPR-U01BLP0CH5Y-8a41cad1be4b-512'
      ],
      fri: []
    }
  }
]

function Calenday(props) {
  const date = new Date() 
  return (
    <div className='background'>
      <video autoPlay muted loop>
        <source src={props.video} type='video/mp4' />
      </video>
      <div className='overlay'>
        <div className='content'>
          <div className='header'>
            <h1>{props.city}</h1>
            <h4>{date.toLocaleTimeString()}</h4>
          </div>
          <table style={{ width: '80%'}}>
            <tr style={{ height: 110 }}>
              <th style={{ width: '15%'}}></th>
              <th style={{ width: '15%'}}>Monday</th>
              <th style={{ width: '15%'}}>Tuesday</th>
              <th style={{ width: '15%'}}>Wednesday</th>
              <th style={{ width: '15%'}}>Thursday</th>
              <th style={{ width: '15%'}}>Friday</th>
            </tr>
            <tr>
              <td>
                Holiday
              </td>
              <td>
                {
                  props.holiday.mon.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.holiday.tue.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.holiday.wed.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.holiday.thur.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.holiday.fri.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
            </tr>
            <tr>
              <td>
                WFH
              </td>
              <td>
                {
                  props.wfh.mon.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.wfh.tue.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.wfh.wed.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.wfh.thur.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
              <td>
                {
                  props.wfh.fri.map((image) => (
                    <div className='avatar' style={{ backgroundImage: `url("${image}")`}}>
                    </div>
                  ))
                }
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

function App() {
  const date = new Date() 
  return data.map((d) => {
    return <Calenday {...d} />
  })
}

export default App;
