import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 5z1xdb84hX5kJjW8lBrjHxDxK287oiEUSQ7UHYOMyTSMOzYo_6Iz4gMuyzr3IiCyvswBtfvN4nZu7HR98S58OmRFylBrlwQrpLiMBnXdNSmlgjZkRoBMDGx7WScLX3Yx'
  }
});

