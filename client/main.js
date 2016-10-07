import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageList: []
    };
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => 
        this.setState({ imageList: response.data.data })
      );
  }

  render() {
    return (
      <div>
        <ImageList images={this.state.imageList}/>
      </div>
    );
  }
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});



