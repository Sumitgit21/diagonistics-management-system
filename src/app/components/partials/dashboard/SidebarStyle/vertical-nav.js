import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Accordion,
  useAccordionButton,
  AccordionContext,
} from "react-bootstrap";

function CustomToggle({ children, eventKey, onClick }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, (active) =>
    onClick({ state: !active, eventKey: eventKey })
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Link
      to='#'
      aria-expanded={isCurrentEventKey ? "true" : "false"}
      className='nav-link'
      role='button'
      onClick={(e) => {
        decoratedOnClick(isCurrentEventKey);
      }}
    >
      {children}
    </Link>
  );
}

const VerticalNav = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  //location
  let location = useLocation();
  return (
    <>
      <Accordion as='ul' className='navbar-nav iq-main-menu'>
        {/* <li className='nav-item static-item'>
          <Link className='nav-link static-item disabled' to='#' tabIndex='-1'>
            <span className='default-icon'>Home</span>
            <span className='mini-icon'>-</span>
          </Link>
        </li> */}
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === "/dashboard" ? "active" : ""
            } nav-link `}
            aria-current='page'
            to='/dashboard'
            onClick={() => {}}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Dashboard</span>
          </Link>
        </li>
        <li>
          <hr className='hr-horizontal' />
        </li>
        <li className='nav-item static-item'>
          <Link className='nav-link static-item disabled' to='#' tabIndex='-1'>
            <span className='default-icon'>Management</span>
            <span className='mini-icon'>-</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === "/employee-management" ? "active" : ""
            } nav-link `}
            aria-current='page'
            to='/employee-management'
            onClick={() => {}}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Employee</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === "/role-management" ? "active" : ""
            } nav-link `}
            aria-current='page'
            to='/role-management'
            onClick={() => {}}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Role </span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            className={`${
              location.pathname === "/client-management" ? "active" : ""
            } nav-link `}
            aria-current='page'
            to='/client-management'
            onClick={() => {}}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M16.0756 2H19.4616C20.8639 2 22.0001 3.14585 22.0001 4.55996V7.97452C22.0001 9.38864 20.8639 10.5345 19.4616 10.5345H16.0756C14.6734 10.5345 13.5371 9.38864 13.5371 7.97452V4.55996C13.5371 3.14585 14.6734 2 16.0756 2Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M4.53852 2H7.92449C9.32676 2 10.463 3.14585 10.463 4.55996V7.97452C10.463 9.38864 9.32676 10.5345 7.92449 10.5345H4.53852C3.13626 10.5345 2 9.38864 2 7.97452V4.55996C2 3.14585 3.13626 2 4.53852 2ZM4.53852 13.4655H7.92449C9.32676 13.4655 10.463 14.6114 10.463 16.0255V19.44C10.463 20.8532 9.32676 22 7.92449 22H4.53852C3.13626 22 2 20.8532 2 19.44V16.0255C2 14.6114 3.13626 13.4655 4.53852 13.4655ZM19.4615 13.4655H16.0755C14.6732 13.4655 13.537 14.6114 13.537 16.0255V19.44C13.537 20.8532 14.6732 22 16.0755 22H19.4615C20.8637 22 22 20.8532 22 19.44V16.0255C22 14.6114 20.8637 13.4655 19.4615 13.4655Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Client</span>
          </Link>
        </li>
        {/* <Accordion.Item as='li' eventKey='horizontal-menu' bsPrefix='nav-item'>
          <CustomToggle
            eventKey='horizontal-menu'
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M10.0833 15.958H3.50777C2.67555 15.958 2 16.6217 2 17.4393C2 18.2559 2.67555 18.9207 3.50777 18.9207H10.0833C10.9155 18.9207 11.5911 18.2559 11.5911 17.4393C11.5911 16.6217 10.9155 15.958 10.0833 15.958Z'
                  fill='currentColor'
                ></path>
                <path
                  opacity='0.4'
                  d='M22.0001 6.37867C22.0001 5.56214 21.3246 4.89844 20.4934 4.89844H13.9179C13.0857 4.89844 12.4102 5.56214 12.4102 6.37867C12.4102 7.1963 13.0857 7.86 13.9179 7.86H20.4934C21.3246 7.86 22.0001 7.1963 22.0001 6.37867Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M21.9998 17.3992C21.9998 19.2648 20.4609 20.7777 18.5609 20.7777C16.6621 20.7777 15.1221 19.2648 15.1221 17.3992C15.1221 15.5325 16.6621 14.0195 18.5609 14.0195C20.4609 14.0195 21.9998 15.5325 21.9998 17.3992Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Menu Style</span>
            <i className='right-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey='horizontal-menu'>
            <ul className='sub-nav'>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/horizontal" ? "active" : ""
                  } nav-link`}
                  to='/horizontal'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> H </i>
                  <span className='item-name'> Horizontal </span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link ' to='/dual-horizontal'>
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> D </i>
                  <span className='item-name'>Dual Horizontal</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dual-compact" ? "active" : ""
                  } nav-link`}
                  to='/dual-compact'
                >
                  <i className='icon svg-icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> D </i>
                  <span className='item-name'>Dual Compact</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/boxed" ? "active" : ""
                  } nav-link`}
                  to='/boxed'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> B </i>
                  <span className='item-name'>Boxed Horizontal</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/boxedfancy" ? "active" : ""
                  } nav-link`}
                  to='/boxedFancy'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> B </i>
                  <span className='item-name'>Boxed Fancy</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item> 
        <li className='nav-item'>
          <Link
            className={`${location.pathname === "/" ? "active" : ""} nav-link `}
            aria-current='page'
            target='blank'
            to='/'
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M21.9964 8.37513H17.7618C15.7911 8.37859 14.1947 9.93514 14.1911 11.8566C14.1884 13.7823 15.7867 15.3458 17.7618 15.3484H22V15.6543C22 19.0136 19.9636 21 16.5173 21H7.48356C4.03644 21 2 19.0136 2 15.6543V8.33786C2 4.97862 4.03644 3 7.48356 3H16.5138C19.96 3 21.9964 4.97862 21.9964 8.33786V8.37513ZM6.73956 8.36733H12.3796H12.3831H12.3902C12.8124 8.36559 13.1538 8.03019 13.152 7.61765C13.1502 7.20598 12.8053 6.87318 12.3831 6.87491H6.73956C6.32 6.87664 5.97956 7.20858 5.97778 7.61852C5.976 8.03019 6.31733 8.36559 6.73956 8.36733Z'
                  fill='currentColor'
                ></path>
                <path
                  opacity='0.4'
                  d='M16.0374 12.2966C16.2465 13.2478 17.0805 13.917 18.0326 13.8996H21.2825C21.6787 13.8996 22 13.5715 22 13.166V10.6344C21.9991 10.2297 21.6787 9.90077 21.2825 9.8999H17.9561C16.8731 9.90338 15.9983 10.8024 16 11.9102C16 12.0398 16.0128 12.1695 16.0374 12.2966Z'
                  fill='currentColor'
                ></path>
                <circle cx='18' cy='11.8999' r='1' fill='currentColor'></circle>
              </svg>
            </i>
            <span className='item-name'>
              Design System
              <span className='badge rounded-pill bg-success'>UI</span>
            </span>
          </Link>
        </li>*/}
        <li>
          <hr className='hr-horizontal' />
        </li>
        <li className='nav-item static-item'>
          <Link className='nav-link static-item disabled' to='#' tabIndex='-1'>
            <span className='default-icon'>Employee</span>
            <span className='mini-icon'>-</span>
          </Link>
        </li>
        <Accordion.Item as='li' eventKey='sidebar-special' bsPrefix='nav-item'>
          <CustomToggle
            eventKey='sidebar-special'
            onClick={(activeKey) => setActiveMenu(activeKey)}
          >
            <i className='icon'>
              <svg
                width='20'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  opacity='0.4'
                  d='M13.3051 5.88243V6.06547C12.8144 6.05584 12.3237 6.05584 11.8331 6.05584V5.89206C11.8331 5.22733 11.2737 4.68784 10.6064 4.68784H9.63482C8.52589 4.68784 7.62305 3.80152 7.62305 2.72254C7.62305 2.32755 7.95671 2 8.35906 2C8.77123 2 9.09508 2.32755 9.09508 2.72254C9.09508 3.01155 9.34042 3.24276 9.63482 3.24276H10.6064C12.0882 3.2524 13.2953 4.43736 13.3051 5.88243Z'
                  fill='currentColor'
                ></path>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M15.164 6.08279C15.4791 6.08712 15.7949 6.09145 16.1119 6.09469C19.5172 6.09469 22 8.52241 22 11.875V16.1813C22 19.5339 19.5172 21.9616 16.1119 21.9616C14.7478 21.9905 13.3837 22.0001 12.0098 22.0001C10.6359 22.0001 9.25221 21.9905 7.88813 21.9616C4.48283 21.9616 2 19.5339 2 16.1813V11.875C2 8.52241 4.48283 6.09469 7.89794 6.09469C9.18351 6.07542 10.4985 6.05615 11.8332 6.05615C12.3238 6.05615 12.8145 6.05615 13.3052 6.06579C13.9238 6.06579 14.5425 6.07427 15.164 6.08279ZM10.8518 14.7459H9.82139V15.767C9.82139 16.162 9.48773 16.4896 9.08538 16.4896C8.67321 16.4896 8.34936 16.162 8.34936 15.767V14.7459H7.30913C6.90677 14.7459 6.57311 14.4279 6.57311 14.0233C6.57311 13.6283 6.90677 13.3008 7.30913 13.3008H8.34936V12.2892C8.34936 11.8942 8.67321 11.5667 9.08538 11.5667C9.48773 11.5667 9.82139 11.8942 9.82139 12.2892V13.3008H10.8518C11.2542 13.3008 11.5878 13.6283 11.5878 14.0233C11.5878 14.4279 11.2542 14.7459 10.8518 14.7459ZM15.0226 13.1177H15.1207C15.5231 13.1177 15.8567 12.7998 15.8567 12.3952C15.8567 12.0002 15.5231 11.6727 15.1207 11.6727H15.0226C14.6104 11.6727 14.2866 12.0002 14.2866 12.3952C14.2866 12.7998 14.6104 13.1177 15.0226 13.1177ZM16.7007 16.4318H16.7988C17.2012 16.4318 17.5348 16.1139 17.5348 15.7092C17.5348 15.3143 17.2012 14.9867 16.7988 14.9867H16.7007C16.2885 14.9867 15.9647 15.3143 15.9647 15.7092C15.9647 16.1139 16.2885 16.4318 16.7007 16.4318Z'
                  fill='currentColor'
                ></path>
              </svg>
            </i>
            <span className='item-name'>Billing</span>
            <i className='right-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='18'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </i>
          </CustomToggle>
          <Accordion.Collapse eventKey='sidebar-special'>
            <ul className='sub-nav'>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/billing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to='/dashboard/special-pages/billing'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> B </i>
                  <span className='item-name'>Billing</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/calender"
                      ? "active"
                      : ""
                  } nav-link`}
                  to='/dashboard/special-pages/calender'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> C </i>
                  <span className='item-name'>Calender</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/kanban"
                      ? "active"
                      : ""
                  } nav-link`}
                  to='/dashboard/special-pages/kanban'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> K </i>
                  <span className='item-name'>kanban</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/pricing"
                      ? "active"
                      : ""
                  } nav-link`}
                  to='/dashboard/special-pages/pricing'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> P </i>
                  <span className='item-name'>Pricing</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`${
                    location.pathname === "/dashboard/special-pages/timeline"
                      ? "active"
                      : ""
                  } nav-link`}
                  to='/dashboard/special-pages/timeline'
                >
                  <i className='icon'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='10'
                      viewBox='0 0 24 24'
                      fill='currentColor'
                    >
                      <g>
                        <circle
                          cx='12'
                          cy='12'
                          r='8'
                          fill='currentColor'
                        ></circle>
                      </g>
                    </svg>
                  </i>
                  <i className='sidenav-mini-icon'> T </i>
                  <span className='item-name'>Timeline</span>
                </Link>
              </li>
            </ul>
          </Accordion.Collapse>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default VerticalNav;
