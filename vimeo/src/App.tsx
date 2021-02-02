import React from 'react';
import { DefaultButton, Panel} from '@fluentui/react';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>

      <Panel headerText="Always open (broken)" isOpen={true} >
      <iframe width="280" height="157" src="https://www.youtube.com/embed/sMHnpy53de4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://player.vimeo.com/video/483030145" width="320" height="173" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      {/* <iframe src="https://player.vimeo.com/video/483030145" width="320" height="240" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
      <DefaultButton text="Open panel" onClick={() => setIsOpen(true)} />
      </Panel>
      <Panel headerText="Sample panel (works)" isOpen={isOpen}  >
      <iframe width="280" height="157" src="https://www.youtube.com/embed/sMHnpy53de4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <iframe src="https://player.vimeo.com/video/483030145" width="320" height="173" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
        {/* <iframe src="https://player.vimeo.com/video/483030145" width="320" height="240" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
      </Panel>NP

    </div>
  );
}
export default App;
