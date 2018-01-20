import React, { Component } from 'react';



class CurrentDate extends Component {
  constructor() {
          super();

          var today = new Date(),
              date = today.getFullYear() + ' - ' + (today.getMonth() + 1) + ' - ' + today.getDate();

          this.state = {
              date: date
          }
      }

      render() {
          var dateStyle = {
            fontFamily: 'impact fantasy',
            fontWeight: '900',
            textShadow: '2px 2px 4px red',
            margin: '0px 0px 0px 10px'
          };
          return (
              <div style={dateStyle} className='date'>
                  {this.state.date}
              </div>
    )};
}

export default CurrentDate;
