import { PropsWithChildren, ReactElement, useEffect } from 'react';
import { Stack } from '@mui/material';
import { useLocation } from 'react-router-dom';

const AuthLayout = ({ children }: PropsWithChildren): ReactElement => {
  const location = useLocation();

  useEffect(() => console.log(location), [location]);
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor={(theme) => theme.palette.background.default}
    >
      {children}
    </Stack>
  );
};

export default AuthLayout;
