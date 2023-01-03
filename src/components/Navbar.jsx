import { Search } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

import styled from "styled-components";

const StyledStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
  position: sticky;
  background: #000;
  top: 0;
  justify-content: space-between;
`;

const Navbar = () => (
  <StyledStack>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </StyledStack>
);
export default Navbar;
