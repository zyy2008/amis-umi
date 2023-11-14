import { PageContainer } from '@ant-design/pro-components';
import { setDefaultTheme } from 'amis';
import { Editor } from 'amis-editor';
import 'amis-editor-core/lib/style.css';
import 'amis/lib/helper.css';
import 'amis/lib/themes/cxd.css';
import 'amis/sdk/iconfont.css';
import React from 'react';
// configure({ isolateGlobalState: true });

setDefaultTheme('cxd');

const HomePage: React.FC = () => {
  const [value, setValue] = React.useState<object>({});
  return (
    <PageContainer ghost>
      <Editor
        value={{
          type: 'page',
          body: 'Hello World!',
        }}
        onChange={setValue}
      />
    </PageContainer>
  );
};

export default HomePage;
