import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Container from "../../components/Container";
import getNotebooks from "../../api/getNotebooks";
import NotebookList from "../NotebookList";

const HomeWrapper = Styled.div`
  margin-top: 20px;
`;

const NotebooksPage = () => {
  const [notebooks, setNotebooks] = useState([]);

  useEffect(() => {
    getNotebooks().then(console.log, console.error);
  });

  // fetchNotebooks = (params) => {
  //   getNotebooks(params)
  //     .then((response) => {
  //       setNotebooks(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <>
      <HomeWrapper>
        <Container>
          <NotebookList notebooks={notebooks} />
        </Container>
      </HomeWrapper>
    </>
  );
};

export default NotebooksPage;
