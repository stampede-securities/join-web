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
    this.state = {
      nameError: false,
      emailError: false,
      name: '',
      email: '',
      refCode: code || '',
    }
    this.login = this.login.bind(this)
    //this.followPlaylist = this.followPlaylist.bind(this)
  }

  /*renderSuccess() {

  }*/



  componentDidMount()  {

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
      console.log(this.state.foundPlaylist)

  };

  login(callback) {
      var CLIENT_ID = 'e8100912617041169c8df1349a5a6be1';
      var REDIRECT_URI = 'http://localhost:3000/';
      function getLoginURL(scopes) {
          return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID +
            '&redirect_uri=' + encodeURIComponent(REDIRECT_URI) +
            '&scope=' + encodeURIComponent(scopes.join(' ')) +
            '&response_type=token';
      }
      const followPlaylist = (accessToken) => {
          var wanted_id = "3ZrxDW8SSPZkGPwDggS9zh";
          this.setState({foundPlaylist: false})
          var found = false;
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
                                                    found = true;
                                                    console.log(found);
                                                }
                                            }
                                        }))
                              }
                              return false;
                          }))
                    console.log('done');
                    console.log(found);
                }))
              .catch((error) => { console.log(error);})
        }


      var url = getLoginURL([
          'playlist-modify-public'
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
              var result = followPlaylist(hash.access_token);

          }
      }, false);
      //console.log(this.state.foundPlaylist);
      var w = window.open(url,
                          'Spotify',
                          'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left
                         );

  }

  handleChangeInfo = event => {
    event.preventDefault()
    const { value, id } = event.target
    this.setState({
      [id]: value,
    })

    const errorId = `${id}Error`
    this.setState({ [errorId]: !value })
    this.setState({ errorMessage: false })
  }

  createUser = async () =>
    this.state.name &&
    this.state.email &&
    client
      .post('/users', {
        name: this.state.name,
        email: this.state.email,
        signUpRefCode: this.state.refCode || 'ANON',
      })
      .then(user => {
        console.log(user)
        this.props.history.push('/share', { code: user.refCode })
      })
      .catch(err => {
        console.error(err)
        alert('Problem signing up for email')
      })

  function

  render() {
    return (
      <Container>
        <Logo src={logo} />
        <Header>Invest In What You Know</Header>
        <Description>
          Stampede is a next generation equity crowdfunding company for the
          entertainment industry that allows fans to invest in their favorite
          music artists and other creators. Stampede is not another reward or
          donations crowdfunding site. Instead of donating money to a creator in
          exchange for a small gift or token, Stampede allows you to become an
          investor. As an investor, you earn a royalty share of the revenue
          streams from the project.
        </Description>
        <LearnMore target="_blank" href="https://www.stampedelive.com/learn">
          Learn more
        </LearnMore>
        <Header>Join Keros Club</Header>
        <Description>
          Sign up now to be a part of our elite program and get early access to
          deals and other exclusive perks! We will only email you when we launch
          with exciting deals.
        </Description>
        <Forms>
          <TextInput
            placeholder="Name"
            value={this.state.name}
            id="name"
            onChange={this.handleChangeInfo}
            error={this.state.nameError}
            width="300px"
          />
          <TextInput
            placeholder="Email"
            value={this.state.email}
            id="email"
            onChange={this.handleChangeInfo}
            error={this.state.emailError}
            width="300px"
          />
        </Forms>
        <Button sticky onClick={this.createUser} text="Sign Up" />
        <Button sticky onClick={this.login} text="Login" />
      </Container>
    )
  }
}

export default withRouter(Form)
