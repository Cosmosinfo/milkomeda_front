import React from "react";
import styled from "styled-components";

function Terms() {
  return (
    <>
      <TermsPopWrapper>
        <TermsContentItem>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
        <TermsContentItem2>
          <TermsContentItemText>Lorem ipsum</TermsContentItemText>
        </TermsContentItem2>
      </TermsPopWrapper>
    </>
  );
}

const TermsPopWrapper = styled.div`
  width: 200px;
  height: auto;
  background: #191922;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TermsContentItem = styled.div`
  width: 100%;
  height: 40px;
  color: #ffffff;
`;

const TermsContentItem2 = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid rgba(139, 137, 153, 0.2);
  color: #ffffff;
`;

const TermsContentItemText = styled.div`
  width: 100%;
  height: 17px;
  padding: 12px 95px 11px 24px;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
`;

export default Terms;
