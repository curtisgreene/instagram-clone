import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3000'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <Header />
        <section>
          <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
          <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
        </section>
      </div>
      </ApolloProvider>
    );
  }
}
export default App;
