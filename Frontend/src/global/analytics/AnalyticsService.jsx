import React from 'react';

const AnalyticsService = () => {
  return (
    <div>
      <iframe
        style={{
          background: '#F1F5F4',
          border: 'none',
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
          width: '93vw',
          height: '100vh',
        }}
        src="https://charts.mongodb.com/charts-project-0-ftwth/embed/dashboards?id=b9649b83-ac8a-40c8-84e4-556eece09887&theme=light&autoRefresh=true&maxDataAge=86400&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
      ></iframe>
    </div>
  );
};

export default AnalyticsService;
