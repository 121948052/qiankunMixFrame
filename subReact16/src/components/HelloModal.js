import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

export default function() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)}>CLICK ME</Button>
      <Drawer title="Qiankun Drawer" placement="right" onClose={() => setVisible(false)} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}
