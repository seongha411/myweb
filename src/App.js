import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import imagefile from "./campus_map_01.png"


function App() {
  return (
    <div>
      <Image src = {imagefile} centered />
      <Comments/>
    </div>
  );
}

export default App;
