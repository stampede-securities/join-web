import React, { Component } from 'react'
import {
  Container,
  Logo,
  Header,
  Description,
  LearnMore,
  Forms,
} from './styles'
import { withRouter } from 'react-router-dom'
import qs from 'qs'
import axios from 'axios'

import logo from './logo-stampede-sticky.svg'
import TextInput from '../../components/TextInput'
import Button from '../../components/Button'
import client from '../../client'

class Form extends Component {
  constructor(props) {
    super(props)
    const { code } = qs.parse(props.location.search.slice(1))

    const id = this.props.location.search.slice(1)
    this.state = {
      nameError: false,
      emailError: false,
      name: '',
      email: '',
      refCode: code || '',
      wanted_id: id,//'38i0QcGQ9hu8PMk4QObUTj',
      accessToken: '',
      addedSongs: []
    }
    this.login = this.login.bind(this)
    Pages = Pages.bind(this)
    this.addSong = this.addSong.bind(this)
    //this.followPlaylist = this.followPlaylist.bind(this)
  }



  /*renderSuccess() {

  }*/



  componentDidMount()  {

      /* origin would need to change for non local */
      var accepted_origin = "http://localhost:3000/";

      var hash = {};

      window.location.hash.replace(/^#\/?/, '').split('&').forEach(function(kv) {
          var spl = kv.indexOf('=');
          if (spl != -1) {
              hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl+1));
          }
      });

      if (hash.access_token) {
          window.opener.postMessage(JSON.stringify({
              type:'access_token_spotify',
              access_token: hash.access_token,
              expires_in: hash.expires_in || 0
          }), accepted_origin);
          window.close();
      }

  };

  /* Function to login and either add song or check library for it based on button clicked */

  login(checkingFirst, callback) {
      var CLIENT_ID = 'e8100912617041169c8df1349a5a6be1';
      /* would need to change redirect for non local */
      var REDIRECT_URI = 'http://localhost:3000/';
      function getLoginURL(scopes) {
          return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
      }

      /* Callback to check if song in library from first page */
      const followPlaylist = (accessToken) => {
          //var wanted_id = "3h3pOvw6hjOvZxRUseB7h9,79esEXlqqmq0GPz0xQSZTV,2WyRfGeHo97VC5mP1BBSzr";
          var wanted_id = this.state.wanted_id
          this.setState({foundPlaylist: false})
          this.setState({donePlaylist: false})
          this.setState({accessToken: accessToken})
          var found = false;
          axios.get('https://api.spotify.com/v1/me/tracks/contains?ids='+wanted_id,
                  {'headers': {'Authorization': 'Bearer ' + accessToken}})
                  .then((response => {
                    console.log(response.data);
                    if (response.data[0] == true) {
                      this.setState({foundPlaylist: true})
                      this.setState({donePlaylist: true})
                      console.log('found in your music')
                      this.setState(prevState => ({
                          addedSongs: [...prevState.addedSongs, wanted_id]
                      }))
                      console.log(this.state.addedSongs)
                    }
                    else {
                      axios.get('https://api.spotify.com/v1/me',
                                {'headers': {'Authorization': 'Bearer ' + accessToken}})
                            .then((response => {
                                console.log(response.data);
                                axios.get('https://api.spotify.com/v1/users/' + response.data.id + '/playlists',
                                          {'headers': {'Authorization': 'Bearer ' + accessToken}})
                                      .then((response2 => {
                                          console.log(response2.data);
                                          for (var i = 0; i < response2.data.items.length; i++) {
                                              axios.get('https://api.spotify.com/v1/playlists/' + response2.data.items[i].id+ '/tracks',
                                                        {'headers': {'Authorization': 'Bearer ' + accessToken}})
                                                    .then((response3 => {
                                                        console.log(response3.data);
                                                        for (var j = 0; j < response3.data.items.length; j++) {
                                                            var id = response3.data.items[j].track.id;
                                                            if (id == wanted_id) {
                                                                console.log("FOUND IT");
                                                                this.setState({foundPlaylist: true})
                                                                this.setState({donePlaylist: true})
                                                                this.setState(prevState => ({
                                                                    addedSongs: [...prevState.addedSongs, wanted_id]
                                                                }))
                                                                console.log(this.state.addedSongs)
                                                                found = true;
                                                                console.log(found);
                                                                console.log(this.state.foundPlaylist)
                                                            }
                                                        }
                                                    }))
                                          }
                                          this.setState({donePlaylist: true})
                                      }))
                                console.log('done');
                                console.log(found);
                            }))
                          .catch((error) => { console.log(error);})
                    }

                  }))
        }

        /* Callback to add song to library from first page */
        const addSong = (accessToken) => {
            console.log('adding')
            var wanted_id = this.state.wanted_id
            if (this.state.accessToken == '') {
              this.setState({accessToken: accessToken})
            }
            console.log(this.state.accessToken)
            axios({
              method: 'put',
              url: 'https://api.spotify.com/v1/me/tracks?ids='+wanted_id,
              headers: {'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + this.state.accessToken}

            })
            .then(response => {
              this.setState({foundPlaylist: true})
              this.setState({donePlaylist: true})
              this.setState(prevState => ({
                  addedSongs: [...prevState.addedSongs, wanted_id]
              }))
              console.log(this.state.addedSongs)
              console.log('did it!')
            })
            .catch (function (error) {
              console.log(error);
            });
        }


      var url = getLoginURL([
          'playlist-modify-public','user-library-modify', 'playlist-modify-private','user-library-read'
      ]);
      console.log(url);
      console.log('rr');

      var width = 450,
          height = 730,
          left = (window.screen.width / 2) - (width / 2),
          top = (window.screen.height / 2) - (height / 2);

      window.addEventListener("message", function(event) {
          var hash = JSON.parse(event.data);
          console.log(hash.type);
          if (hash.type == 'access_token_spotify') {
              if (checkingFirst) {
                var result = followPlaylist(hash.access_token);
              } else {
                var result = addSong(hash.access_token);
              }


          }
      }, false);
      //console.log(this.state.foundPlaylist);
      var w = window.open(url,
                          'Spotify',
                          'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                         );

  }

  /*Function to add song to library after already logging in & confirming it is not already there */
  addSong (accessToken) {
      console.log('adding')
      var wanted_id = this.state.wanted_id
      if (this.state.accessToken == '') {
        this.setState({accessToken: accessToken})
      }
      console.log(this.state.accessToken)
      axios({
        method: 'put',
        url: 'https://api.spotify.com/v1/me/tracks?ids='+wanted_id,
        headers: {'Accept': 'application/json',
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + this.state.accessToken}

      })
      .then(response => {
        this.setState({foundPlaylist: true})
        this.setState(prevState => ({
            addedSongs: [...prevState.addedSongs, wanted_id]
        }))
        console.log(this.state.addedSongs)
        console.log('did it!')
      })
      .catch (function (error) {
        console.log(error);
      });
  }




  render() {
    return <Pages found={this.state.foundPlaylist} done={this.state.donePlaylist}/>
  }
}

function Pages (props) {
  const found = props.found;
  const done = props.done;
  const iframeStyle = {
    marginTop: '10px',
  };
  //<LearnMore target="_blank" href="https://www.stampedelive.com/learn">
  //  Learn more
//  </LearnMore>
  if (!found && !done) {
    return (
      <Container>
        <Logo src={logo} />
        <Header>Earn Credits through Spotify</Header>
        <Description>
          Check if the below song is in your Spotify playlist, or add it to your library
          to earn Stampede credits!
        </Description>

        <iframe style={iframeStyle} src={"https://open.spotify.com/embed/track/"+this.state.wanted_id}
                width="300"
                height="380"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media">
        </iframe>
        <Button sticky style={iframeStyle} onClick={this.login.bind(this, true)} text="Check for Song" />
        <Button sticky style={iframeStyle} onClick= {this.login.bind(this, false)} text="Add to Library" />
      </Container>
    );
  }
  else if (done && !found) {
    return (
      <Container>
        <Logo src={logo} />
        <Header>Earn Credits through Spotify</Header>
        <Description>
          This song was not found in your Spotify library. Would you like to add it?
        </Description>
        <Button sticky style={iframeStyle} onClick= {this.addSong} text="Add to Library" />

      </Container>

    );
  }
  else {
    return (
      <Container>
        <Logo src={logo} />
        <Header> Success!</Header>
        <Description>
          Great job, this song is in your Spotify library and you have earned 1 credit. Continue to stampedelive.com.
        </Description>
      </Container>
    );
  }
}

export default withRouter(Form)
