import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import campusmap from "./campus_map_01.png"


function App() {
  return (
    <div>
      <Image src = {campusmap} centered />
      <Comments/>
    </div>
  );
}

export default App;
