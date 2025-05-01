import React, { Suspense } from 'react';
import EditPrompt from './EditPrompt'; // adjust path if needed

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default Page;
