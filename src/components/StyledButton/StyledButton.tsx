import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

  const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    borderRadius: `1px solid ${theme.palette.primary.contrastText}`,
    border: "1px solid #fff",
    padding: "5px 15px",
    width: "100%",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    }
  }));

  return (
    <>
      <StyledButton>{children}</StyledButton>
    </>
  )
}

export default StyledButton
