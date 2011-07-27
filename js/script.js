/* Author: Sagie Maoz

*/

new TWTR.Widget({
  id: 'twitter',
  version: 2,
  type: 'search',
  search: '#j14',
  interval: 6000,
  title: '#j14',
  subject: 'פיד המהפכה',
  width: 'auto',
  height: 300,
  theme: {
    shell: {
      background: '#a60000',
      color: '#cccccc'
    },
    tweets: {
      background: '#404040',
      color: '#cccccc',
      links: '#ff3030'
    }
  },
  features: {
    scrollbar: true,
    loop: true,
    live: true,
    hashtags: true,
    timestamp: true,
    avatars: true,
    toptweets: true,
    behavior: 'default'
  }
}).render().start();

