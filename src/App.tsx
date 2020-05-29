import React from "react";
import Card from "./component/card";

import styled from "styled-components";

const CardContainer = styled.div`
  display: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <div>
      <CardContainer>
        <Card
          image={"https://img.sta1.com/_up/store/2020/05/04/1588563909084.jpg"}
          name={"사뿐"}
          age={"10대,20대,30대"}
          type={"슈즈"}
        />
        <Card
          image={"https://img.sta1.com/_up/store/2020/01/23/1579748891347.jpg"}
          name={"베니토"}
          age={"20대,30대"}
          type={"럭셔리,명품,페미닌"}
        />
        <Card
          image={"https://img.sta1.com/_up/store/2020/04/03/1585884760828.jpg"}
          name={"히프나틱"}
          age={"10대,20대"}
          type={"러블리,섹시"}
        />
        <Card
          image={"https://img.sta1.com/_up/store/2020/04/28/1588046831617.jpg"}
          name={"쵸퍼"}
          age={"10대,20대"}
          type={"러블리,섹시"}
        />
      </CardContainer>
    </div>
  );
}

export default App;
