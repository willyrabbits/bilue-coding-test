import React from "react";

import Address from "./ui/components/Address/Address";
import AddressBook from "./ui/components/AddressBook/AddressBook";
import Button from "./ui/components/Button/Button";
import InputText from "./ui/components/InputText/InputText";
import Radio from "./ui/components/Radio/Radio";
import Section from "./ui/components/Section/Section";
import transformAddress from "./core/models/address";
import useAddressBook from "./ui/hooks/useAddressBook";

import useForm from "./hooks/formHook";
import ErrorMessage from "./ui/components/ErrorMessage/ErrorMessage";
import Form from "./ui/components/Form/Form";

function App() {

  const initialFormState = {
    postCode: { value: '', error: false, },
    houseNumber: { value: '', error: false },
    firstName: { value: '', error: false },
    lastName: { value: '', error: false },
    selectedAddress: { value: '', error: false },
  }
  const [form, setField, clearAll, error] = useForm(initialFormState)

  const [loading, setLoading] = React.useState(false)

  /**
   * Form fields states
   */
  const [selectedAddress, setSelectedAddress] = React.useState("");
  /**
   * Results states
   */
  const [addresses, setAddresses] = React.useState([]);
  /**
   * Redux actions
   */
  const { addAddress } = useAddressBook();

  /**
   * Text fields onChange handlers
   */
  const handlePostCodeChange = (e) => setField('postCode', e.target.value)

  const handleHouseNumberChange = (e) => setField('houseNumber', e.target.value)

  const handleFirstNameChange = (e) => setField('firstName', e.target.value)

  const handleLastNameChange = (e) => setField('lastName', e.target.value)

  const handleSelectedAddressChange = (e) => setSelectedAddress(e.target.value);

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    /**
     * This is not needed as is a check that the API does for us
     */
    // if (!form.postCode.value || !form.houseNumber.value) {
    //   console.warn('invalid input')
    //   return
    // }

    try {
      setLoading(true)
      const response = await fetch(`/api/getAddresses?postcode=${form.postCode.value}&streetnumber=${form.houseNumber.value}`).then(r => r.json())
      if (response.status === 'error') {
        alert(response.errormessage)
        return
      }
      const data = await response
      const aux = []
      data.details.forEach(item => {
        aux.push(transformAddress(item))
      });
      setAddresses(aux)
    } catch (error) {
      alert(error)
    } finally {
      setLoading(false)
    }
  };

  const handlePersonSubmit = (e) => {
    e.preventDefault();

    if (!selectedAddress || !addresses.length) {
      setError(
        "No address selected, try to select an address or find one if you haven't"
      );
      return;
    }

    const foundAddress = addresses.find(
      (address) => address.id === selectedAddress
    );

    addAddress({ ...foundAddress, firstName: form.firstName.value, lastName: form.lastName.value });
  };

  return (
    <main>
      <Section>
        <h1>
          Create your own address book!
          <br />
          <small>
            Enter an address by postcode add personal info and done! 👏
          </small>
        </h1>
        <Form
          onSubmit={handleAddressSubmit}
          legend={'🏠 Find an address'}
          submitText={'Find'}
        >
          <InputText
            name="postCode"
            onChange={handlePostCodeChange}
            placeholder="Post Code"
            value={form.postCode.value}
            error={form.postCode.error}
          />
          <InputText
            name="houseNumber"
            onChange={handleHouseNumberChange}
            value={form.houseNumber.value}
            error={form.houseNumber.error}
            placeholder="House number"
          />
        </Form>
        {loading && <div>LOADING...</div>}
        {addresses.length > 0 &&
          addresses.map((address) => {
            return (
              <Radio
                name="selectedAddress"
                id={address.id}
                key={address.id}
                onChange={handleSelectedAddressChange}
              >
                <Address address={address} />
              </Radio>
            );
          })}
        {selectedAddress && (
          <Form onSubmit={handlePersonSubmit} legend={'✏️ Add personal info to address'} submitText={'Add to addressbook'}>
            <InputText
              name="firstName"
              placeholder="First name"
              onChange={handleFirstNameChange}
              value={form.firstName.value}
              error={form.firstName.error}
            />
            <InputText
              name="lastName"
              placeholder="Last name"
              onChange={handleLastNameChange}
              value={form.lastName.value}
              error={form.lastName.error}
            />
          </Form>
        )}

        {/* It needs to be defined better when to display or not this error. */}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button onClick={clearAll} variant="secondary">Clear all fields</Button>

      </Section>

      <Section variant="dark">
        <AddressBook />
      </Section>
    </main>
  );
}

export default App;
