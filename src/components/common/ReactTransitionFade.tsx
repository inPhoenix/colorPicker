import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

interface IProps {
  children: React.ReactNode;
}

const ReactTransitionFade: React.FC<IProps> = ({ children }) => {
  return (
    <ReactCSSTransitionGroup transitionName="fade" transitionEnterTimeout={200} transitionLeaveTimeout={100}>
      {children}
    </ReactCSSTransitionGroup>
  );
};

export default ReactTransitionFade;
