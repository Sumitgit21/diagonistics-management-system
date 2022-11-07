import React, { useState, useEffect } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";

import { useDispatch } from "react-redux";
import { addEmployee, getUserGroup } from "../../store/action";

import DefaultLayout from "../../layouts/dashboard/DefaultLayout";
import Card from "../../components/Card";

import { Link } from "react-router-dom";
// img
import avatars1 from "../../../assets/images/avatars/01.png";
import avatars2 from "../../../assets/images/avatars/avtar_1.png";
import avatars3 from "../../../assets/images/avatars/avtar_2.png";
import avatars4 from "../../../assets/images/avatars/avtar_3.png";
import avatars5 from "../../../assets/images/avatars/avtar_4.png";
import avatars6 from "../../../assets/images/avatars/avtar_5.png";

const EmployeeManagement = () => {
  const dispatch = useDispatch();
  const [userGroup, setuserGroup] = useState([]);

  const [loading, setLoading] = useState(false);
  const [selectedUserGroup, setselectedUserGroup] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState({
    employee_id: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email_address: "",
    user_group_ids: [],
    user_group_name: [],
  });

  useEffect(() => {
    dispatch(
      getUserGroup((data) => {
        if (
          data != "error" &&
          data.status == 200 &&
          data.data.status.status === 1
        ) {
          const { user_groups } = data.data;
          setuserGroup(user_groups);
          console.group("user group data---------------");
          console.table(user_groups);
          console.groupEnd("user group data---------------");
        }
        console.log("get user group", JSON.stringify(data));
      })
    );
    return () => {};
  }, []);

  const getInput = (e) => {
    setEmployeeDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onRoleSelect = (e) => {
    const updatedOptions = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.value);

    const updatedText = [...e.target.options]
      .filter((option) => option.selected)
      .map((x) => x.text);
    setEmployeeDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: updatedOptions,
      };
    });
    setEmployeeDetails((prevState) => {
      return {
        ...prevState,
        user_group_name: updatedText,
      };
    });
  };

  const onSubmitBtnClick = () => {
    if (!employeeDetails.employee_id) {
      alert("please enter employee id ");
    } else if (!employeeDetails.first_name) {
      alert("please enter first name ");
    } else if (!employeeDetails.last_name) {
      alert("please enter first name ");
    } else if (!employeeDetails.phone_number) {
      alert("please enter phone number");
    } else if (!employeeDetails.email_address) {
      alert("please enter email address ");
    } else if (!employeeDetails.user_group_ids) {
      alert("please select a role ");
    } else {
      setLoading(true);
      dispatch(
        addEmployee(employeeDetails, (data) => {
          setLoading(false);
          if (
            data != "error" &&
            data?.status == 200 &&
            data?.data?.status === 1
          ) {
            alert("employee added successfully");
          } else {
            alert(data?.data?.message);
          }
        })
      );
    }
  };
  return (
    <>
      <DefaultLayout>
        <div>
          <Row>
            <Col xl='12' lg='12'>
              <Card>
                {/* <Card.Headr className='d-flex justify-content-between'>
                  <div className='header-title'>
                    <h4 className='card-title'>New User Information</h4>
                  </div>
                </Card.Header> */}
                <Card.Body>
                  <div className='new-user-info'>
                    <form>
                      <div className='row'>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label htmlFor='fname'>First Name*</Form.Label>
                          <Form.Control
                            type='text'
                            id='fname'
                            name='first_name'
                            onChange={getInput}
                            value={employeeDetails.first_name}
                            placeholder='First Name'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label htmlFor='lname'>Last Name*</Form.Label>
                          <Form.Control
                            type='text'
                            id='lname'
                            name='last_name'
                            placeholder='Last Name'
                            onChange={getInput}
                            value={employeeDetails.last_name}
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='employee_id'>
                            Employee Id*
                          </Form.Label>
                          <Form.Control
                            type='text'
                            id='employee_id'
                            name='employee_id'
                            onChange={getInput}
                            value={employeeDetails.employee_id}
                            placeholder='Employee Id'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='mobno'>
                            Mobile Number*
                          </Form.Label>
                          <Form.Control
                            type='tel'
                            id='mobno'
                            name='phone_number'
                            onChange={getInput}
                            value={employeeDetails.phone_number}
                            placeholder='Mobile Number'
                          />
                        </Form.Group>

                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='email'>Email*</Form.Label>
                          <Form.Control
                            type='email'
                            id='email'
                            name='email_address'
                            onChange={getInput}
                            value={employeeDetails.email_address}
                            placeholder='Email'
                          />
                        </Form.Group>
                        <Form.Group className='col-md-6 form-group'>
                          <Form.Label>Select Role</Form.Label>
                          <Form.Control
                            className='selectpicker form-control'
                            as='select'
                            multiple
                            value={employeeDetails.user_group_ids}
                            name='user_group_ids'
                            onChange={onRoleSelect}
                          >
                            {userGroup &&
                              userGroup?.length > 0 &&
                              userGroup.map((data, index) => (
                                <option value={data.id}>{data.name}</option>
                              ))}
                          </Form.Control>
                        </Form.Group>
                        <Form.Group className='col-md-6  form-group'>
                          <Form.Label htmlFor='role'></Form.Label>
                          {employeeDetails.user_group_name &&
                            employeeDetails.user_group_name?.length > 0 &&
                            employeeDetails.user_group_name.map(
                              (key, index) => (
                                <Form.Label>
                                  {key}
                                  {index >= 0 &&
                                    index <
                                      employeeDetails.user_group_name?.length -
                                        1 &&
                                    ","}
                                </Form.Label>
                              )
                            )}
                          {/* <Form.Control type='text' id='role' placeholder=''>
                            
                          </Form.Control> */}
                        </Form.Group>
                      </div>
                      <Button
                        type='button'
                        variant='btn btn-primary'
                        onClick={onSubmitBtnClick}
                        disabled={loading ? true : false}
                      >
                        {loading ? "Adding..." : "Submit"}
                      </Button>
                    </form>
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

export default EmployeeManagement;
