import React from "react";
import PageTitle from "../../shared/styles/PageTitle";
import FormComp from "./FormComp";
import styled from "styled-components";


const ContentWrapper = styled.div`
    margin: 0px;
    margin-top: 16px;
    padding: 24px;
    border-radius: 5px;
    background: #fff;
    border: 1px solid #e9e9e9;
    overflow-y: hidden;
`;

const FormPage = () => {

    return (
        <React.Fragment>

            <ContentWrapper>
                <PageTitle>Update Profile</PageTitle>

                <FormComp />
            </ContentWrapper>
        </React.Fragment>
    );
};

export default FormPage;
