import instance from './index';

export default () => instance.request({
  method: 'GET',
  url: '/chats',
})
  .then((response) => response.data);
