import { useCheckout } from "@lib/context/checkout-context"
import Button from "@modules/common/components/button"
import Checkbox from "@modules/common/components/checkbox"
import Spinner from "@modules/common/icons/spinner"
import BillingAddress from "../billing_address"
import ShippingAddress from "../shipping-address"



const Addresses = () => {
  const {
    sameAsBilling: { state: checked, toggle: onChange },
    editAddresses: { state: isEdit, toggle: setEdit },
    setAddresses,
    handleSubmit,
    cart,
  } = useCheckout()
  return (
    <div className="bg-white">
      {/* <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
        <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center text-sm">
          1
        </div>
        <h2>Shipping address</h2>
      </div> */}
      {isEdit ? (
        <div className=" pb-8">
          <ShippingAddress />
          {/* start checkbox */}
          <div className="checkform mb-16">
            <div className="form-check pb-10">
              <input type="checkbox" className="chb chb-1 pb-4" id="chb-1" />
              <label htmlFor="chb-1">
                <span className="pl-6 text-base">
                  I agree to recieve Feno promo emails
                </span>
              </label>
            </div>

            <div className="form-check pb-10">
              <input type="checkbox" className="chb chb-1 pb-4" id="chb-2" />
              <label htmlFor="chb-2">
                <span className="pl-6 text-base font-normal">
                  I agree to Feno{' '}
                  <span className="text-[#1437BF] underline">
                    Terms & Conditions
                  </span>
                </span>
              </label>
            </div>
            <div className="form-check pb-10">
              <input type="checkbox" className="chb chb-1 pb-4" id="chb-3" />
              <label htmlFor="chb-3">
                <span className="pl-6 text-base font-normal">
                  I agree to{' '}
                  <span className="text-[#1437BF] underline">
                    Feno Privacy Policy
                  </span>
                </span>
              </label>
            </div>
          </div>

          {/* end checkbox */}
          <div className="">
            <div className="text-xl font-semibold pb-6">
              Shipping Address
            </div>
            {/* <div className="form-check pb-10">
              <input type="checkbox" className="chb chb-1 pb-4" id="chb-4" />
              <label htmlFor="chb-4">
                <span className="pl-6 text-base font-normal">
                  Use Billing Address as Shipping Address
                </span>
              </label>
            </div> */}
          </div>


          <div className=" mb-10">
            <Checkbox
              label="Use Billing Address as Shipping Address"
              checked={checked}
              onChange={onChange}
            />
          </div>
          {!checked && (
            <div>
              {/* <div className="text-xl-semi flex items-center gap-x-4 pb-6 pt-8">
                <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm">
                  2
                </div>
                <h2>Billing address</h2>
              </div> */}
              <BillingAddress />
            </div>
          )}
          {/* <Button
            className="max-w-[200px] mt-6"
            onClick={handleSubmit(setAddresses)}
          >
            Continue to delivery
          </Button> */}
        </div>
      ) : (
        <div>
          <div className="Cust-detail">Customer Details</div>
          <div className="grid grid-cols-2">
            <div className=" px-8 py-6 text-small-regular">
              <div className="address-card-title">shipping address</div>
              {cart && cart.shipping_address ? (
                <div className="flex items-start gap-x-8">
                  {/* <div className="bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                    ✓
                  </div> */}
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-col">
                      <span>
                        {cart.shipping_address.first_name}{" "}
                        {cart.shipping_address.last_name}
                      </span>
                      <span>
                        {cart.shipping_address.address_1}{" "}
                        {cart.shipping_address.address_2}
                      </span>
                      <span>
                        {cart.shipping_address.postal_code},{" "}
                        {cart.shipping_address.city}
                      </span>
                      <span>
                        {cart.shipping_address.country_code?.toUpperCase()}
                      </span>
                      <div className="mt-4 flex flex-col">
                        <span>{cart.shipping_address.phone}</span>
                        <span>{cart.email}</span>
                      </div>
                      {checked && (
                        <div className="flex items-center gap-x-2 mt-6">
                          <div className="flex items-center justify-center border border-gray-700 bg-gray-100 w-4 h-4">
                            ✓
                          </div>
                          <span>Same as billing address</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <button onClick={setEdit}>Edit</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  <Spinner />
                </div>
              )}
            </div>
            <div>
              {!checked && (
                <div>
                  {/* <div className="text-xl-semi flex items-center gap-x-4 px-8 pb-6 pt-8">
                    <div className="bg-gray-900 w-8 h-8 rounded-full text-white flex justify-center items-center font-mono text-sm">
                      2
                    </div>
                    <p>Billing address</p>
                  </div> */}
                  <div className=" px-8 py-6 text-small-regular">
                    <div className="address-card-title">billing address</div>
                    {cart && cart.billing_address ? (
                      <div className="flex items-start gap-x-8">
                        {/* <div className="bg-green-400 rounded-full min-w-[24px] h-6 flex items-center justify-center text-white text-small-regular">
                          ✓
                        </div> */}
                        <div className="flex items-start justify-between w-full">
                          <div className="flex flex-col">
                            <span>
                              {cart.billing_address.first_name}{" "}
                              {cart.billing_address.last_name}
                            </span>
                            <span>
                              {cart.billing_address.address_1}{" "}
                              {cart.billing_address.address_2}
                            </span>
                            <span>
                              {cart.billing_address.postal_code},{" "}
                              {cart.billing_address.city}
                            </span>
                            <span>
                              {cart.billing_address.country_code?.toUpperCase()}
                            </span>

                            <div className="mt-4 flex flex-col">
                              <span>{cart.billing_address.phone}</span>
                            </div>
                          </div>
                          <div>
                            <button onClick={setEdit}>Edit</button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="">
                        <Spinner />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Addresses
