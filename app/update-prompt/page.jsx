import React, { Suspense } from 'react';
import EditPrompt from './EditPrompt'; // adjust path if needed
import loading from '@app/profile/loading';

const Page = () => {
  return (
    <Suspense fallback={<loading/>}>
      <EditPrompt />
    </Suspense>
  );
};

export default Page;
