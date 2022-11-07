import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  addClient,
  updateClientAddress,
  updateClientAgreement,
  updateClientRates,
  getDefaultTestRates,
} from "../../store/action";

import DefaultLayout from "../../layouts/dashboard/DefaultLayout";
import Card from "../../components/Card";

import { Link } from "react-router-dom";
// img
import shap1 from "../../../assets/images/shapes/01.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap3 from "../../../assets/images/shapes/03.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap5 from "../../../assets/images/shapes/05.png";
import shap6 from "../../../assets/images/shapes/06.png";
import AggrementTemplate1 from "./components/AggrementTemplate1";
import { data } from "jquery";

const ClientManagement = () => {
  const dispatch = useDispatch();
  const [clientDetails, setClientDetails] = useState({
    type: "",
    pan: "",
    name: "",
    email: "",
    mobile_no_1: "",
    mobile_no_2: "",
    minimum_wallet_balance: "",
    address_line_1: "",
    address_line_2: "",
    district: "",
    pin: "",
    country: "",
    city: "",
    state: "",
    representative_name: "",
  });

  const [stepCounter, setStepCounter] = useState(1);
  const [totalStep, setTotalStep] = useState(4);
  const [clientCode, setClientCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [defaultTestList, setDefaultTestList] = useState([]);
  const [rateChart, setRateChart] = useState([]);

  useEffect(() => {
    dispatch(
      getDefaultTestRates((data) => {
        if (
          data != "error" &&
          data.status == 200 &&
          data.data.status.status === 1
        ) {
          const { test_rates } = data.data;

          setDefaultTestList(test_rates);
        }
      })
    );
  }, []);

  const getInput = (e) => {
    setClientDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onStepChange = () => {
    if (stepCounter == totalStep) {
    } else {
      // let temp_Counter = stepCounter + 1;
      switch (stepCounter) {
        case 1:
          let temp_payload = {
            type: clientDetails.type,
            pan: clientDetails.pan,
            name: clientDetails.name,
            email_address: clientDetails.email,
            contact_number_1: clientDetails.mobile_no_1,
            contact_number_2: clientDetails.mobile_no_2,
            wallet_minimum_threshold: clientDetails.minimum_wallet_balance,
            representative_name: clientDetails.representative_name,
          };

          if (!temp_payload.type) {
            alert("please select a type");
            return false;
          } else if (!temp_payload.pan) {
            alert("please enter pan no");
            return false;
          } else if (!temp_payload.name) {
            alert("please enter name");
            return false;
          } else if (!temp_payload.email_address) {
            alert("please enter email");
            return false;
          } else if (!temp_payload.contact_number_1) {
            alert("please enter contact no");
            return false;
          } else if (!temp_payload.wallet_minimum_threshold) {
            alert("please enter minimum wallet balance");
            return false;
          } else if (!temp_payload.representative_name) {
            alert("please enter Representative Name");
            return false;
          } else {
            setLoading(true);
            dispatch(
              addClient(temp_payload, (data) => {
                if (
                  data != "error" &&
                  data?.status == 200 &&
                  data?.data?.status.status === 1
                ) {
                  setStepCounter(stepCounter + 1);
                  setClientCode(data?.data?.client_code);
                  setLoading(false);
                } else {
                  alert(data?.data?.message);
                }
              })
            );
          }
          break;
        case 2:
          addClientAddress();
          break;
        case 3:
          setStepCounter(stepCounter + 1);

          break;
        case 4:
          alert("client added successfully");

          break;

        default:
          break;
      }
      // return false;
    }
  };

  const addClientAddress = () => {
    let temp_payload = {
      client_code: clientCode ?? 0,
      address_line_1: clientDetails.address_line_1,
      address_line_2: clientDetails.address_line_2,
      zip: clientDetails.pin,
      district: clientDetails.district,
      city: clientDetails.city,
      state: clientDetails.state,
      country: clientDetails.country,
    };
    if (!temp_payload.address_line_1) {
      alert("please select a current address");
      return false;
    } else if (!temp_payload.zip) {
      alert("please enter zip");
      return false;
    } else if (!temp_payload.district) {
      alert("please enter district");
      return false;
    } else if (!temp_payload.city) {
      alert("please enter city");
      return false;
    } else if (!temp_payload.state) {
      alert("please enter state");
      return false;
    } else if (!temp_payload.country) {
      alert("please enter country");
      return false;
    } else {
      setLoading(true);
      dispatch(
        updateClientAddress(temp_payload, (data) => {
          if (
            data != "error" &&
            data?.status == 200 &&
            data?.data?.status === 1
          ) {
            setStepCounter(stepCounter + 1);
            setLoading(false);
          } else {
            alert(data?.data?.message);
          }
        })
      );
    }
  };
  const checkUndefinedInObject = (object) =>
    Object.entries(object).every(
      ([key, value]) => !["", "null", "undefined"].includes(key) && value
    );

  const onPreviousBtnClick = () => {
    setStepCounter(stepCounter - 1);
  };

  const onFinishClick = () => {
    setStepCounter(stepCounter - 1);
  };

  function onRateChange(e, id) {
    let modified_test_rate = "";
    modified_test_rate = defaultTestList;
    modified_test_rate[id].rate = e.target.value;
    setDefaultTestList(modified_test_rate);

    console.log(id, modified_test_rate);
    // console.log(e.target.value);
  }
  return (
    <>
      <DefaultLayout>
        <div>
          <Row>
            <Col xl='12' lg='12'>
              <Card>
                <Card.Header className='d-flex justify-content-between'>
                  <div className='header-title'>
                    <h6 className='card-title'>
                      Step {stepCounter}/{totalStep}
                    </h6>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className='new-user-info'>
                    {stepCounter == 1 && (
                      <div className='row'>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label>Type</Form.Label>
                          <select
                            name='type'
                            className='selectpicker form-control'
                            data-style='py-0'
                            defaultChecked='Select Type'
                            onChange={getInput}
                          >
                            <option>Select Type</option>
                            <option>Company</option>
                            <option>Individual</option>
                          </select>
                        </Form.Group>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label htmlFor='cname'>Name:</Form.Label>
                          <Form.Control
                            onChange={getInput}
                            name='name'
                            type='text'
                            id='cname'
                            placeholder='Name'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='mobno'>
                            Contact Number*
                          </Form.Label>
                          <Form.Control
                            name='mobile_no_1'
                            type='number'
                            id='mobno'
                            placeholder='Contact Number'
                            value={clientDetails.mobile_no_1}
                            onChange={getInput}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='mobno'>
                            Alternate Number
                          </Form.Label>
                          <Form.Control
                            type='number'
                            name='mobile_no_2'
                            id='mobno'
                            onChange={getInput}
                            value={clientDetails.mobile_no_2}
                            placeholder='Alternate Number'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='email'>Email*</Form.Label>
                          <Form.Control
                            type='email'
                            id='email'
                            onChange={getInput}
                            value={clientDetails.email}
                            name='email'
                            placeholder='Email'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='pan'>Pan No*</Form.Label>
                          <Form.Control
                            type='number'
                            name='pan'
                            id='pan'
                            placeholder='Pan No'
                            value={clientDetails.pan}
                            onChange={getInput}
                          />
                        </Form.Group>

                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='representative_name'>
                            Representative Name*
                          </Form.Label>
                          <Form.Control
                            type='text'
                            name='representative_name'
                            id='representative_name'
                            placeholder='Representative Name'
                            value={clientDetails.representative_name}
                            onChange={getInput}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='mwalletthresold'>
                            Minimum Wallet Balance*
                          </Form.Label>
                          <Form.Control
                            type='number'
                            name='minimum_wallet_balance'
                            id='mwalletthresold'
                            placeholder='Minimum Wallet Balance'
                            value={clientDetails.minimum_wallet_balance}
                            onChange={getInput}
                          />
                        </Form.Group>
                      </div>
                    )}
                    {stepCounter == 2 && (
                      <div className='row'>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label htmlFor='cname'>
                            Current Address*
                          </Form.Label>
                          <Form.Control
                            onChange={getInput}
                            name='address_line_1'
                            type='text'
                            id='address_line_1'
                            max={100}
                            value={clientDetails.address_line_1}
                            placeholder='Current Address'
                          />
                        </Form.Group>

                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='address_line_2'>
                            Permanent Address
                          </Form.Label>
                          <Form.Control
                            name='address_line_2'
                            type='number'
                            id='address_line_2'
                            max={100}
                            placeholder='Permanent Address'
                            value={clientDetails.address_line_2}
                            onChange={getInput}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='pin'>PIN*</Form.Label>
                          <Form.Control
                            type='number'
                            name='pin'
                            id='pin'
                            onChange={getInput}
                            maxLength={6}
                            value={clientDetails.pin}
                            placeholder='PIN'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='email'>District*</Form.Label>
                          <Form.Control
                            type='text'
                            id='district'
                            onChange={getInput}
                            name='district'
                            value={clientDetails.district}
                            placeholder='District'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='city'>City*</Form.Label>
                          <Form.Control
                            type='text'
                            name='city'
                            id='city'
                            maxLength={8}
                            placeholder='City'
                            value={clientDetails.city}
                            onChange={getInput}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='state'>State*</Form.Label>
                          <Form.Control
                            type='text'
                            name='state'
                            id='state'
                            maxLength={8}
                            placeholder='State'
                            value={clientDetails.state}
                            onChange={getInput}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='country'>Country*</Form.Label>
                          <Form.Control
                            type='text'
                            name='country'
                            id='country'
                            maxLength={8}
                            placeholder='Country'
                            value={clientDetails.country}
                            onChange={getInput}
                          />
                        </Form.Group>
                      </div>
                    )}
                    {stepCounter == 3 && (
                      <div className='table-responsive'>
                        <table
                          id='user-list-table'
                          className='table table-striped'
                          role='grid'
                          data-toggle='data-table'
                        >
                          <thead>
                            <tr className='ligth'>
                              <th>Code</th>
                              <th>Name</th>
                              <th>Rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            {defaultTestList.map((item, idx) => (
                              <tr key={idx}>
                                {/* <td className='text-center'>
                                  <Image
                                    className='bg-soft-primary rounded img-fluid avatar-40 me-3'
                                    src={item.img}
                                    alt='profile'
                                  />
                                </td> */}

                                <td>{item.code}</td>
                                <td>{item.name}</td>
                                <td>
                                  {" "}
                                  <Form.Control
                                    type='text'
                                    name='rate'
                                    id='rate'
                                    maxLength={8}
                                    placeholder='Rate'
                                    value={item.rate}
                                    onChange={(e) => onRateChange(e, idx)}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    {stepCounter == 4 && <AggrementTemplate1 />}
                    <div className='d-flex justify-content-between'>
                      {/* {stepCounter <= totalStep && stepCounter > 1 && (
                          <Button
                            type='button'
                            variant='btn btn-primary'
                            className='float-right'
                            onClick={onPreviousBtnClick}
                          >
                            Prev
                          </Button>
                        )} */}
                      {stepCounter == totalStep ? (
                        <Button
                          type='button'
                          variant='btn btn-primary'
                          className='float-right'
                          onClick={onStepChange}
                        >
                          Finish
                        </Button>
                      ) : (
                        <Button
                          type='button'
                          variant='btn btn-primary'
                          className='float-right ml-2'
                          onClick={onStepChange}
                          disabled={loading ? true : false}
                        >
                          {loading ? "Saving..." : "Next"}
                        </Button>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ClientManagement;
