import React from 'react';
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.groups = [
      { id: 1, title: 'group 1' },　{ id: 2, title: 'group 2' },　{ id: 3, title: 'group 3' },
      { id: 4, title: 'group 4' },　{ id: 5, title: 'group 5' },　{ id: 6, title: 'group 6' },
      ];
  
    this.items = [
      {id: 1, group: 1, title: 'item 1', start_time: moment(), end_time: moment().add(1, 'hour')},
      {id: 2, group: 2, title: 'item 2', start_time: moment().add(-0.5, 'hour'),end_time: moment().add(0.5, 'hour')},
      {id: 3, group: 1, title: 'item 3', start_time: moment().add(2, 'hour'), end_time: moment().add(3, 'hour')}
    ]

    // Elementに対するrefを作成し、render内のElementに登録
    this.myRef = React.createRef();
    
  }

  componentDidMount() {
    // Didmount後にリスナーを登録
    this.myRef.current.addEventListener('touchstart', (e)=>{
      if (e.touches.length >= 2){
        e.preventDefault()
      }
    },{passive:false})  // {passive: false}を指定しないとe.preventDefault()は有効になってくれない
  }

  render(){
    return <div>
        <div ref={this.myRef}> 
            <Timeline
                groups={this.groups}
                items={this.items}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
            />
        </div>
    </div>
  }
}

export default App;
