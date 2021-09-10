import React from 'react';
import Leaderboard from 'react-native-leaderboard';

this.state = {
  data: [
      {userName: 'Joe', highScore: 52},
      {userName: 'Jenny', highScore: 120},
  ]}

export default function Topthree() {
  return (
    <div>
      <Leaderboard 
        data={this.state.data} 
        sortBy='highScore' 
        labelBy='userName'/>
    </div>
  )
}
