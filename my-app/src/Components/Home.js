import React from "react";
import styled from 'styled-components';
const HomeWrapper = styled.div`
.sk2{
    position: absolute;
    bottom:350px;
    margin-left:50%
  } 
  .sk3{
    font-size:48px;
  }
  `;
  
 function Home() {
  return (
    <HomeWrapper>
    <div className="sk1">
      <div className="sk">
        <div className="sk2">
            <h2 className="sk3" >Welcome to...foodparadise</h2>
        </div>
      </div>
    </div>
    </HomeWrapper>
  );
}

export default Home;