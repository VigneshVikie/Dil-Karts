import { Formik, Form, Field } from 'formik';

export default function CheckoutForm() {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Item 1: $10</p>
      <p>Item 2: $20</p>
      <h2>Payment Details</h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          address: '',
          cardNumber: '',
          expiryDate: '',
          cvv: '',
        }}
        onSubmit={(values, actions) => {
          alert('Form submitted.');
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <Field type="text" id="address" name="address" />
          </div>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <Field type="text" id="cardNumber" name="cardNumber" />
          </div>
          <div>
            <label htmlFor="expiryDate">Expiry Date:</label>
            <Field type="text" id="expiryDate" name="expiryDate" />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <Field type="text" id="cvv" name="cvv" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}