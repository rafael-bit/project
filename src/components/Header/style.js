import styled, { createGlobalStyle } from 'styled-components'

export const Cheader = styled.header`
    background: #A8A8A8;
body {
  box-sizing: border-box;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.menu {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.menu .logo {
  display: inline-block;
  margin: 10px 0 10px 10px;
}

.menu .logo .btn-menu {
  display: none;
  color: white;
  text-decoration: none;
  font-size: 1em;
  align-self: center;
  margin-right: 10px;
}

.menu .logo img {
  vertical-align: top;
  width: 70px;
}

.menu .enlaces {
  display: inline-block;
  text-align: right;
  letter-spacing: 0.1em;
}
.menu .enlaces a {
  color: white;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2em;
  text-align: center;
  padding: 1em;
}
.menu .enlaces a:hover {
  color: #696969;
}
.menu .enlaces i {
  margin: 5px;
}

@media all and (max-width: 780px) {
  .menu {
    flex-direction: column;
  }
  
  .menu .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
  }
  
  .menu .logo img {
    width: 50px;
  }
  
  .menu .logo .btn-menu {
    display: inline-block;
  }
  
  .menu .enlaces {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .menu .enlaces a {
    border-bottom: 2px solid #696969;
    margin-left: 0rem;
  }
  
  .menu .enlaces a:hover {
    background-color: #beb597;
    color: white;
  }
}
`;

export const Button = styled.a`
    background-color: red;
    margin-left: 2rem;
`;