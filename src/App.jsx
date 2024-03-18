import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart.jsx';
import Layout from './components/Layout/Layout.jsx';
import Products from './components/Shop/Products.jsx';
import Notification from './components/UI/Notification.jsx';
import { sendCartData } from './store/cart-slice.js';

let isInitialValue = true;
function App() {
  const dispatch = useDispatch();
  // const isInitialValue = useRef(true);
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  // useEffect(() => {
  //   const sendCartData = async () => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'pending',
  //         title: 'Sending...',
  //         message: 'Sending cart data!',
  //       })
  //     );
  //     const response = await fetch(
  //       'https://test-base-3b9cf-default-rtdb.firebaseio.com/cart.json',
  //       {
  //         method: 'PUT',
  //         body: JSON.stringify(cart),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error('Sending cart data failed!');
  //     }

  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'success',
  //         title: 'Success',
  //         message: 'Cart data sent successfully!',
  //       })
  //     );
  //   };

  //   if (isInitialValue) {
  //     isInitialValue = false;
  //     return;
  //   }
  //   sendCartData().catch((err) => {
  //     dispatch(
  //       uiActions.showNotification({
  //         status: 'error',
  //         title: 'Error!',
  //         message: err.message,
  //       })
  //     );
  //   });
  // }, [cart, dispatch]);

  useEffect(() => {
    if (isInitialValue) {
      isInitialValue = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
