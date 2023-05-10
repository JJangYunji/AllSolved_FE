import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Checklist } from "../images/Checklist.svg";
import { ReactComponent as BottomArrow } from "../images/BottomArrow.svg";
import { ReactComponent as TopArrow } from "../images/TopArrow.svg";
import { ReactComponent as Logo } from "../images/Logo.svg";
import { ReactComponent as Complain } from "../images/Complain.svg";

const Side = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 100vh;
  padding: 0 15px;
  border-right: 1px solid #e4e4e4;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
`;

const Div = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  padding-top: ${(props) => props.paddingTop || "0px"};
  padding-bottom: ${(props) => props.paddingBottom || "0px"};
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

const SideBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainBlue};
  padding: 15px 13px;
  border-radius: 10px;
  width: 100%;
  position: absolute;
  top: -10px;
`;

const SideBox_Side = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  cursor: pointer;
`;

const SideBox_Span = styled.span`
  font-size: ${(props) => props.theme.fontSize.ssm};
  margin: 0 5px;
  margin-right: 15px;
  color: ${(props) => props.color || "white"};
  width: 60%;
  font-weight: ${(props) => props.theme.fontBold.medium};
`;

const SideBox_List = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0px;
  padding-left: 19%;
  width: 100%;
`;

const Navbar = () => {
  const [checkListMenu, setCheckListMenu] = useState(false);
  const [complainMenu, setComplainMenu] = useState(false);

  const onCheckListToggle = () => {
    setCheckListMenu(!checkListMenu);
  };

  const onComplainToggle = () => {
    setComplainMenu(!complainMenu);
  };

  return (
    <Side>
      <Div height="15%" marginTop="10px" marginBottom="80px">
        <Link to="/">
          <Logo width={80} height={30} />
        </Link>
      </Div>
      <Div height="30%">
        <SideBox>
          <SideBox_Side>
            <Checklist width={20} height={17} />
          </SideBox_Side>
          <SideBox_Span>소통창구</SideBox_Span>
          <SideBox_Side onClick={onCheckListToggle}>
            {checkListMenu ? <TopArrow /> : <BottomArrow />}
          </SideBox_Side>
        </SideBox>
        {checkListMenu ? (
          <>
            <SideBox_List>
              <Link to="/counter">
                <SideBox_Span color="#000000">소통창구 조회</SideBox_Span>
              </Link>
            </SideBox_List>
            <SideBox_List>
              <Link to="/counter_detail">
                <SideBox_Span color="#000000">소통창구 상세</SideBox_Span>
              </Link>
            </SideBox_List>
          </>
        ) : (
          <></>
        )}
      </Div>

      <Div height="30%">
        <SideBox>
          <SideBox_Side>
            <Complain width={22} height={16} />
          </SideBox_Side>
          <SideBox_Span>컴플레인</SideBox_Span>
          <SideBox_Side onClick={onComplainToggle}>
            {complainMenu ? <TopArrow /> : <BottomArrow />}
          </SideBox_Side>
        </SideBox>
        {complainMenu ? (
          <>
            <SideBox_List>
              <Link>
                <SideBox_Span color="#000000">컴플레인 조회</SideBox_Span>
              </Link>
            </SideBox_List>
            <SideBox_List>
              <Link>
                <SideBox_Span color="#000000">컴플레인 상세</SideBox_Span>
              </Link>
            </SideBox_List>
          </>
        ) : (
          <></>
        )}
      </Div>
      <Div height="50%"></Div>
    </Side>
  );
};

export default Navbar;
