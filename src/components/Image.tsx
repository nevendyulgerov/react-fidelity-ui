import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { isFunc, isNonEmptyStr, isObj } from '../utils';

const { useState, useEffect } = React;

export type ImageProps = {
  src: string,
  alt?: string,
  size?: string | null,
  aspectRatio?: string | null,
  className?: string | null,
  spinner?: React.ReactNode | null,
  spinnerHideDelay?: number,
  rounded?: boolean,
  hovered?: boolean,
  elevated?: boolean,
  expanded?: boolean,
  contained?: boolean,
  onLoad?: () => void | null,
  onError?: () => void | null,
  [key: string]: any
};

const Image = (props: ImageProps) => {
  const { src, alt, size, aspectRatio, className, spinner, spinnerHideDelay, rounded, hovered, elevated, expanded, contained, onLoad, onError, ...restProps } = props;
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorNode, setErrorNode] = useState(null);
  const [hasSpinnerFaded, setHasSpinnerFaded] = useState(false);
  const hasCustomError: boolean = isNonEmptyStr(errorNode) || isObj(errorNode);
  const hasAspectRatio: boolean = isNonEmptyStr(aspectRatio);
  const hasOnLoad: boolean = isFunc(onLoad);
  const hasOnError: boolean = isFunc(onError);
  const hasSpinner: boolean = isObj(spinner);
  const componentClassName: string = classNames({
    image: true,
    'image--loading': isLoading && hasSpinner,
    'image--rounded': rounded,
    'image--hovered': hovered,
    'image--elevated': elevated,
    'image--expanded': expanded,
    'image--contained': contained,
    'image--ratioed': hasAspectRatio,
    'image--error': isError,
    [`image--${size}`]: isNonEmptyStr(size),
    [`image--ratio-${aspectRatio}`]: hasAspectRatio,
    // @ts-ignore
    [className]: isNonEmptyStr(className)
  });

  const imageSpinnerClassName: string = classNames({
    image__spinner: true,
    'image__spinner--active': isLoading
  });

  const imgClassName: string = classNames({
    visible: !isLoading,
    invisible: isLoading
  });

  const onLoadSrc = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    setIsLoading(false);

    if (hasOnLoad) {
      // @ts-ignore
      onLoad(event);
    }
  };

  const setImageError = (err: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    setIsError(true);

    if (hasOnError) {
      // @ts-ignore
      const errorNode = onError(err);

      if (isNonEmptyStr(errorNode) || isObj(errorNode)) {
        // @ts-ignore
        setErrorNode(errorNode);
      }
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setHasSpinnerFaded(true);
      }, spinnerHideDelay);
    }
  }, [isLoading]);

  return (
    <span className={componentClassName}>
      {hasSpinner && !hasSpinnerFaded && (
        <span className={imageSpinnerClassName}>
          {spinner}
        </span>
      )}

      {(!isError || !hasCustomError) && (
        <img
          {...restProps}
          src={src}
          alt={alt}
          className={imgClassName}
          onLoad={onLoadSrc}
          onError={setImageError}
        />
      )}

      {isError && hasCustomError && (
        <span className="image__error">
          {errorNode}
        </span>
      )}
    </span>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf([null, 'xs', 'sm', 'md', 'lg', 'xl']),
  aspectRatio: PropTypes.oneOf([null, '4-3', '16-9']),
  className: PropTypes.string,
  spinner: PropTypes.node,
  spinnerHideDelay: PropTypes.node,
  rounded: PropTypes.bool,
  hovered: PropTypes.bool,
  elevated: PropTypes.bool,
  expanded: PropTypes.bool,
  contained: PropTypes.bool,
  onLoad: PropTypes.func,
  onError: PropTypes.func
};

Image.defaultProps = {
  alt: null,
  size: null,
  aspectRatio: null,
  className: null,
  spinner: null,
  spinnerHideDelay: 1000,
  rounded: true,
  hovered: false,
  elevated: false,
  expanded: false,
  contained: false,
  onLoad: null,
  onError: null
};

export default Image;
