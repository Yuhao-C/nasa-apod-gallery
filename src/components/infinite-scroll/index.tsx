import React, { useEffect, useRef } from 'react';
import cx from 'classnames';
import Loading from '@/components/loading';

interface Props {
  loading: boolean;
  getData: () => Promise<void>;
}
const InifiniteScroll: React.FC<Props> = props => {
  const { loading, getData, children } = props;
  const loaderRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();
  const shouldGetDataRef = useRef(0);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver(
      entities => {
        const target = entities[0];

        if (target.isIntersecting) {
          if (shouldGetDataRef.current % 2 === 0) {
            getData();
          }
          shouldGetDataRef.current += 1;
        }
      },
      { rootMargin: '200px' },
    );
    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }
  }, [loading, getData]);

  return (
    <div>
      {children}
      <div ref={loaderRef} className="infinite-scroll__loader">
        <div
          className={cx('infinite-scroll__loader-content', {
            'infinite-scroll__loader-content--loading': loading,
          })}
        >
          <Loading />
        </div>
      </div>
    </div>
  );
};

export default InifiniteScroll;
