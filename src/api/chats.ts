import instance from './index';

export default () => {
  console.log(instance);
  return instance.request({
    method: 'GET',
    url: '/chats',
  })
    .then((response) => response.data);
};
