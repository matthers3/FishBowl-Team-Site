import './AlmaProject.scss';
import React from 'react';
import AlmaBanner from '../../components/AlmaBanner/AlmaBanner';
import AlmaSocialMedia from '../../components/AlmaSocialMedia/AlmaSocialMedia';

function AlmaProject() {

  return (
    <div className="AlmaProject">
      <div className="AlmaProject-Container">
            <AlmaBanner></AlmaBanner>
            <AlmaSocialMedia></AlmaSocialMedia>
      </div>
    </div>
  );
}

export default AlmaProject;
