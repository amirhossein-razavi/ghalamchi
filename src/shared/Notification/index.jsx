import { useEffect } from 'react';
import { notification as antNotification } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const Notification = () => {
  const dispatch = useDispatch();
  const [api, contextHolder] = antNotification.useNotification();
  const { notification = {} } = useSelector((state) => ({
    notification: state.notification,
  }));

  const openNotification = () => {
    api[notification.type]({
      message: notification.title,
      description: notification.description,
      duration: notification.duration,
      placement: 'bottomLeft',
      onClose: () => {
        dispatch({
          type: 'ON_NOTIFICATION',
          payload: {
            title: '',
            description: '',
            duration: 3,
            show: false,
            type: '',
          },
        });
      },
    });
  };

  useEffect(() => {
    if (notification.show) openNotification();
  }, [notification.show]);

  return (
    contextHolder
  );
};

export default Notification;
