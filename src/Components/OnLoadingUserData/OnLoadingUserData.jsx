import React from 'react';

function OnLoadingUserData(Component) {
  return function LoadingPostsData({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    else
      return (
        <div>
          <h2>Wait, please...</h2>
        </div>
      );
  };
}

export default OnLoadingUserData;
