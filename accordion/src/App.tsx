import React, { useState } from 'react';
import './App.css';

function Accordion({ children, defaultOpen, id, title }: { children: React.ReactNode, defaultOpen: boolean, id: string, title: string }) {
  const [open, setOpen] = useState(defaultOpen);
  return <>
    <h3>
      <button type="button"
        aria-expanded={open}
        onClick={() => { setOpen(!open) }}
        className="accordion-trigger"
        aria-controls={id + "_panel"}
        id={id}>
        <span className="accordion-title">
          {title}
          <span className="accordion-icon"></span>
        </span>
      </button>
    </h3>
    <div id={id + "_panel"}
      hidden={!open}
      role="region"
      aria-labelledby={id}
      className="accordion-panel">
      {children}
    </div>
  </>
}

function App() {
  return (
    <div className="App">
      <div id="accordionGroup" className="accordion">
        <Accordion defaultOpen={true} id="accordion1id" title="Personal Information">
          <div>
            <fieldset>
              <p>
                <label htmlFor="cufc1">
                  Name
                  <span aria-hidden="true">
                    *
                  </span>
                  :
                </label>
                <input type="text"
                  defaultValue=""
                  name="Name"
                  id="cufc1"
                  className="required"
                  aria-required="true" />
              </p>
              <p>
                <label htmlFor="cufc2">
                  Email
                  <span aria-hidden="true">
                    *
                  </span>
                  :
                </label>
                <input type="text"
                  defaultValue=""
                  name="Email"
                  id="cufc2"
                  aria-required="true" />
              </p>
              <p>
                <label htmlFor="cufc3">
                  Phone:
                </label>
                <input type="text"
                  defaultValue=""
                  name="Phone"
                  id="cufc3" />
              </p>
              <p>
                <label htmlFor="cufc4">
                  Extension:
                </label>
                <input type="text"
                  defaultValue=""
                  name="Ext"
                  id="cufc4" />
              </p>
              <p>
                <label htmlFor="cufc5">
                  Country:
                </label>
                <input type="text"
                  defaultValue=""
                  name="Country"
                  id="cufc5" />
              </p>
              <p>
                <label htmlFor="cufc6">
                  City/Province:
                </label>
                <input type="text"
                  defaultValue=""
                  name="City_Province"
                  id="cufc6" />
              </p>
            </fieldset>
          </div>
        </Accordion>
        <Accordion defaultOpen={false} id="accordion2id" title="Billing Address">
          <div>
            <fieldset>
              <p>
                <label htmlFor="b-add1">
                  Address 1:
                </label>
                <input type="text"
                  name="b-add1"
                  id="b-add1" />
              </p>
              <p>
                <label htmlFor="b-add2">
                  Address 2:
                </label>
                <input type="text"
                  name="b-add2"
                  id="b-add2" />
              </p>
              <p>
                <label htmlFor="b-city">
                  City:
                </label>
                <input type="text"
                  name="b-city"
                  id="b-city" />
              </p>
              <p>
                <label htmlFor="b-state">
                  State:
                </label>
                <input type="text"
                  name="b-state"
                  id="b-state" />
              </p>
              <p>
                <label htmlFor="b-zip">
                  Zip Code:
                </label>
                <input type="text"
                  name="b-zip"
                  id="b-zip" />
              </p>
            </fieldset>
          </div>
        </Accordion>
        <Accordion defaultOpen={false} id="accordion3id" title="Shipping Address">
          <div>
            <fieldset>
              <p>
                <label htmlFor="m-add1">
                  Address 1:
                </label>
                <input type="text"
                  name="m-add1"
                  id="m-add1" />
              </p>
              <p>
                <label htmlFor="m-add2">
                  Address 2:
                </label>
                <input type="text"
                  name="m-add2"
                  id="m-add2" />
              </p>
              <p>
                <label htmlFor="m-city">
                  City:
                </label>
                <input type="text"
                  name="m-city"
                  id="m-city" />
              </p>
              <p>
                <label htmlFor="m-state">
                  State:
                </label>
                <input type="text"
                  name="m-state"
                  id="m-state" />
              </p>
              <p>
                <label htmlFor="m-zip">
                  Zip Code:
                </label>
                <input type="text"
                  name="m-zip"
                  id="m-zip" />
              </p>
            </fieldset>
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
