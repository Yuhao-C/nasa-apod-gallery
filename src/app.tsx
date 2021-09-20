import React, { useCallback, useState } from 'react';
import StackGrid from 'react-stack-grid';
import { Snackbar, Alert } from '@mui/material';
import PhotoCard from '@/components/photo-card';
import ParticleBg from '@/components/particle-bg';
import { loadImage } from '@/utils/image';
import { useSnackbar } from '@/utils/snack-bar';
import { getAPOD } from '@/apis/apod';
import InfiniteScroll from '@/components/infinite-scroll';
import { MediaType, PhotoCardInfo } from '@/types/photo-card';

import './app.less';

const App: React.FC<Record<string, never>> = () => {
  const [data, setData] = useState<PhotoCardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const { open, message, severity, handleClose } = useSnackbar();

  const fetchAPOD = useCallback(async () => {
    setLoading(true);
    const response = await getAPOD(10);
    if (response) {
      const filteredRes = response.filter(
        res => res.media_type === MediaType.IMAGE && res.url,
      ) as Required<PhotoCardInfo>[];

      const imageUrls = filteredRes.map(res => res.url);

      await Promise.allSettled(imageUrls.map(url => loadImage(url))).then(
        res => {
          res.forEach((r, idx) => {
            if (r.status === 'fulfilled') {
              filteredRes[idx].img_element = r.value;
            }
          });
        },
      );
      setData(d => [...d, ...filteredRes.filter(res => res.img_element)]);
    }
    setLoading(false);
  }, []);

  return (
    <div className="app">
      <ParticleBg />
      <InfiniteScroll loading={loading} getData={fetchAPOD}>
        <StackGrid
          columnWidth={Math.min(400, window.innerWidth - 80)}
          gutterWidth={80}
          gutterHeight={80}
        >
          {data.map(d => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <PhotoCard key={d.url} {...d} />
          ))}
        </StackGrid>
      </InfiniteScroll>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default App;
