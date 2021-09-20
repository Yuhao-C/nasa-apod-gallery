import { useEffect, useState } from 'react';
import { AlertColor } from '@mui/material';

export const showSnackbar = (severity: AlertColor, message: string): void => {
  const event = new CustomEvent('showsnackbar', {
    detail: { severity, message },
  });
  document.dispatchEvent(event);
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useSnackbar = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<AlertColor>('success');
  const [message, setMessage] = useState<string>('');

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const handleShowSnackbar = (payload: {
      detail: { severity: AlertColor; message: string };
    }) => {
      const { severity: tempSeverity, message: tempMessage } = payload.detail;
      setOpen(true);
      setSeverity(tempSeverity);
      setMessage(tempMessage);
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.addEventListener('showsnackbar', handleShowSnackbar);

    return () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.removeEventListener('showsnackbar', handleShowSnackbar);
    };
  });

  return { open, message, severity, handleClose };
};
