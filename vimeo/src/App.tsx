import React from 'react';
import { DefaultButton, Panel} from '@fluentui/react';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>

      <Panel headerText="Always open (broken)" isOpen={true} >
        <iframe src="https://player.vimeo.com/video/483030145" width="320" height="173" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
		/* <iframe src="https://player.vimeo.com/video/483030145" width="320" height="240" allow="autoplay; fullscreen" allowFullScreen></iframe>
        <DefaultButton text="Open panel" onClick={() => setIsOpen(true)} /> */
      </Panel>
<iframe src="https://player.vimeo.com/video/483030145" width="320" height="173" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      <Panel headerText="Sample panel (works)" isOpen={isOpen}  >
        /* <iframe src="https://player.vimeo.com/video/483030145" width="320" height="240" allow="autoplay; fullscreen" allowFullScreen></iframe> */
      </Panel>

    </div>
  );
}

export default App;
