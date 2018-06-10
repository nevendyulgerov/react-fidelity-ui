import React from 'react';

const Panel = ({ theme = 'default', item }) => {
  const { name, date } = item;

  return (
    <div data-component="panel" data-theme={theme}>
      {theme === 'default' && (
        <div className="meta">
          <span className="name">{name}</span>
          <span className="date">
          {`Created at `}
            <time>{date}</time>
        </span>
        </div>
      )}
    </div>
  );
};

export default Panel;
